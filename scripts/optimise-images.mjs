// Final image pipeline: downloads high-res Unsplash picks and optimises every selected
// photo into WebP at the sizes the site actually uses.
import { writeFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pub = path.join(__dirname, '..', 'public');
const cand = path.join(pub, 'images', 'cand');
const finalDir = path.join(pub, 'images');
await mkdir(finalDir, { recursive: true });

const PY = 'C:\\Users\\HP\\.dsh\\dsh-runtimes\\dsh-primary-runtime\\dependencies\\python\\python.exe';

const UNSPLASH = [
  { id: 'photo-1500382017468-9049fed747ef', out: 'hero', w: 2000, h: 1333 },
  { id: 'photo-1592982537447-7440770cbfc9', out: 'about-seedlings', w: 900, h: 900 },
  { id: 'photo-1605000797499-95a51c5269ae', out: 'about-field', w: 900, h: 1100 },
  { id: 'photo-1470252649378-9c29740c9fa8', out: 'why-field', w: 1600, h: 1000 },
  { id: 'photo-1540420773420-3366772f4999', out: 'app-vegetables', w: 800, h: 800 },
  { id: 'photo-1571771894821-ce9b6c11b08e', out: 'app-fruits', w: 800, h: 800 },
  { id: 'photo-1500937386664-56d1dfef3854', out: 'cta-field', w: 1200, h: 800 },
];

const LOCAL = [
  { src: path.join(cand, 'cereals', 'natural-wheat-growing-in-a-field-1024x685.jpg'), out: 'app-cereals', w: 800, h: 800 },
  { src: path.join(cand, 'palm', 'saudia-arabia-date-palm-tree-loaded-1024x758.jpg'), out: 'app-palm', w: 800, h: 800 },
  { src: path.join(cand, 'olive', 'olive-grove-crete-679x1022.jpg'), out: 'app-olive', w: 800, h: 800 },
  { src: path.join(cand, 'greenhouse', 'seedling-flower-plants-in-greenhouse-interio-1024x683.jpg'), out: 'app-greenhouse', w: 800, h: 800 },
];

async function download(u, id, w) {
  const url = `https://images.unsplash.com/${id}?w=${w}&q=75&auto=format&fit=crop`;
  const res = await fetch(url, { headers: { 'User-Agent': 'StimulantVertSite/1.0 (demo build)' } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

// 1) download unsplash picks into a temp dir
const tmp = path.join(__dirname, '..', 'tmp-img');
await rm(tmp, { recursive: true, force: true });
await mkdir(tmp, { recursive: true });

for (const u of UNSPLASH) {
  const dest = path.join(tmp, `${u.id}.jpg`);
  const buf = await download(u.url, u.id, Math.max(u.w, u.h));
  await writeFile(dest, buf);
  u.tmpPath = dest;
  console.log(`downloaded ${u.id} (${(buf.length / 1024).toFixed(0)}KB)`);
}

// 2) optimise everything to webp with a small python helper
const all = [...UNSPLASH.map(u => ({ src: u.tmpPath, ...u })), ...LOCAL];
const jobs = all.map(a => [a.src, path.join(finalDir, `${a.out}.webp`), String(a.w), String(a.h)]);
const payload = jobs.map(j => JSON.stringify(j)).join('\n');
await writeFile(path.join(tmp, 'jobs.txt'), payload);

const py = `
import sys, json
from PIL import Image, ImageOps

def cover(im, w, h):
    iw, ih = im.size
    scale = max(w / iw, h / ih)
    nw, nh = round(iw * scale), round(ih * scale)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - w) // 2
    top = (nh - h) // 2
    return im.crop((left, top, left + w, top + h))

for line in open(sys.argv[1], encoding='utf-8'):
    line = line.strip()
    if not line: continue
    src, dest, w, h = json.loads(line)
    im = Image.open(src).convert('RGB')
    im = ImageOps.exif_transpose(im)
    im = cover(im, int(w), int(h))
    im.save(dest, 'WEBP', quality=80, method=6)
    print(f'wrote {dest.split(chr(92))[-1]}')
`;
const pyPath = path.join(tmp, 'optimise.py');
await writeFile(pyPath, py);
execFileSync(PY, [pyPath, path.join(tmp, 'jobs.txt')], { stdio: 'inherit' });

// 3) clean up temp + candidate dirs
await rm(tmp, { recursive: true, force: true });
console.log('\nDone. Optimised images are in public/images/');
