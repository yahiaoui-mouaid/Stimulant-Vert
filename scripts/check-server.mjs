// Health-checks the local dev server: serves HTML, transforms JSX/CSS, images present.
const base = 'http://127.0.0.1:5174'

async function get(path) {
  const res = await fetch(base + path)
  const text = await res.text()
  return { status: res.status, type: res.headers.get('content-type'), len: text.length, text }
}

const checks = [
  ['/', '/'],
  ['/src/main.jsx', 'main.jsx'],
  ['/src/App.jsx', 'App.jsx'],
  ['/src/index.css', 'index.css'],
  ['/images/hero.webp', 'hero.webp'],
  ['/images/app-olive.webp', 'app-olive.webp'],
  ['/favicon.svg', 'favicon.svg'],
]

for (const [path, label] of checks) {
  try {
    const r = await get(path)
    const snippet = r.text.slice(0, 80).replace(/\s+/g, ' ')
    console.log(`${label.padEnd(12)} ${r.status} ${String(r.type).padEnd(28)} ${r.len}B  ${snippet}`)
  } catch (e) {
    console.log(`${label.padEnd(12)} ERR ${e.message}`)
  }
}
