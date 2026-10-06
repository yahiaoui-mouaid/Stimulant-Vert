// Final targeted fetch: verified-subject photos for olive + greenhouse, with full URLs,
// photo-only filtering and 429 backoff. Saves into public/images/cand.
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outBase = path.join(__dirname, '..', 'public', 'images', 'cand');
await mkdir(outBase, { recursive: true });

const SEARCHES = {
  olive:     ['olive trees orchard field photography', 'olive grove trees landscape'],
  greenhouse:['greenhouse interior cultivation plants', 'polytunnel greenhouse crops'],
  vegetables:['vegetables growing garden plot', 'fresh harvested vegetables crates'],
  fruits:    ['fruit orchard trees harvest', 'citrus orange tree orchard'],
  cereals:   ['wheat field sky photography', 'golden cereal field harvest'],
  palm:      ['palm tree plantation date palm', 'palm trees field sky'],
};

async function search(q, page_size = 12) {
  const url = `https://api.openverse.org/v1/images/?q=${encodeURIComponent(q)}&page_size=${page_size}&license_type=all&mature=false`;
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'StimulantVertSite/1.0 (demo build)', 'Accept': 'application/json' } });
      if (res.status === 429) { console.log(`  ...429, backing off ${4 * (attempt + 1)}s`); await new Promise(r => setTimeout(r, 4000 * (attempt + 1))); continue; }
      if (!res.ok) { console.log(`  [search ${q}] HTTP ${res.status}`); return []; }
      const json = await res.json();
      return (json?.results || [])
        .filter(r => (r.category || '').toLowerCase().includes('photo') || !r.category)
        .filter(r => !/(paint|illustr|art|van gogh|drawing|sketch|engrav|litho|watercolor|print)/i.test(r.title || ''))
        .map(r => ({ title: r.title, creator: r.creator, url: r.url, w: r.width, h: r.height, license: r.license, foreign: r.foreign_landing_url }));
    } catch (e) { await new Promise(r => setTimeout(r, 2000)); }
  }
  return [];
}

async function download(url, dest) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'StimulantVertSite/1.0 (demo build)' } });
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 20000) return null;
    await writeFile(dest, buf);
    return buf;
  } catch { return null; }
}

const report = {};
for (const [cat, queries] of Object.entries(SEARCHES)) {
  console.log(`\n########## ${cat} ##########`);
  const catDir = path.join(outBase, cat);
  await mkdir(catDir, { recursive: true });
  const picked = [];
  for (const q of queries) {
    const rows = await search(q);
    for (const r of rows) {
      const minDim = Math.min(r.w || 0, r.h || 0);
      if (minDim < 600) continue;
      const slug = (r.title || 'img').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 44);
      const ext = /\.png(\?|$)/i.test(r.url) ? 'png' : 'jpg';
      const dest = path.join(catDir, `${slug}-${r.w}x${r.h}.${ext}`);
      const buf = await download(r.url, dest);
      if (!buf) continue;
      picked.push({ title: r.title, creator: r.creator, file: path.basename(dest), w: r.w, h: r.h, kb: Math.round(buf.length / 1024), url: r.url, license: r.license, foreign: r.foreign });
      console.log(`  OK  ${r.w}x${r.h} ${String(Math.round(buf.length/1024)).padStart(5)}KB  ${r.title.slice(0, 62)}`);
      if (picked.length >= 5) break;
    }
    if (picked.length >= 5) break;
    await new Promise(r => setTimeout(r, 2500));
  }
  report[cat] = picked;
}

await writeFile(new URL('./asset-report.json', import.meta.url), JSON.stringify(report, null, 2));
console.log('\nsaved asset-report.json');
