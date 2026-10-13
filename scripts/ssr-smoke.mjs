// SSR smoke test: bundles the app for Node and renders it with react-dom/server,
// so any runtime error inside a component surfaces here instead of in the browser.
import esbuild from 'esbuild'
const { build } = esbuild
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { writeFileSync, mkdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { renderToString } from 'react-dom/server'
import React from 'react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const entry = path.join(root, 'src', 'App.jsx')
const outDir = path.join(root, 'dist-ssr')
mkdirSync(outDir, { recursive: true })
const outFile = path.join(outDir, 'ssr.cjs')

await build({
  entryPoints: [entry],
  bundle: true,
  format: 'cjs',
  platform: 'node',
  jsx: 'automatic',
  outfile: outFile,
  external: ['react', 'react-dom', 'react-dom/server'],
  define: { 'process.env.NODE_ENV': '"production"' },
  logLevel: 'info',
})

const mod = await import(pathToFileURL(outFile).href)
// esbuild ESM->CJS of a `export default` entry wraps it in a namespace object
const raw = mod.default ?? mod
const App = typeof raw === 'function' ? raw : raw.default
console.log('App type:', typeof App, 'isFn:', typeof App === 'function')

let html
try {
  html = renderToString(React.createElement(App))
} catch (e) {
  console.log('RENDER FAILED:\n', e.stack)
  // isolate: render each section on its own
  const sections = mod.sections || {}
  console.log('named exports:', Object.keys(mod))
  process.exit(1)
}

const expect = [
  ['Stimulant Vert', 'brand name'],
  ['From Algeria', 'hero headline'],
  ['ORGANIC LIQUID FERTILIZER', 'hero subtitle (uppercase tagline)'],
  ['greener and healthier world', 'hero gradient headline'],
  ['Découvrir le produit', 'primary CTA'],
  ['Nous contacter', 'contact CTA'],
  ['À propos de', 'about heading'],
  ['En savoir plus', 'about CTA'],
  ['Pourquoi', 'benefits heading prefix'],
  ['Stimulant Vert®', 'benefits heading with trademark'],
  ['Croissance végétale améliorée', 'benefit 1'],
  ['Nos applications', 'applications heading'],
  ['Convient à une grande variété de cultures', 'applications subtitle'],
  ['Des plantes plus fortes, des récoltes plus abondantes', 'applications statement'],
  ['Fertilisant liquide organique', 'product subtitle'],
  ['Naturellement efficace pour vos cultures', 'product badge'],
  ['Pourquoi nous choisir', 'why heading'],
  ['Better Soil', 'why pillar 1'],
  ['A Greener Tomorrow', 'why pillar 3'],
  ['Contactez-nous', 'contact heading'],
  ['Stimulantvert@gmail.com', 'contact email'],
  ['0656705865', 'contact phone'],
  ['© 2026 Stimulant Vert. Tous droits réservés.', 'footer copyright'],
]

console.log(`\nSSR rendered ${html.length} bytes\n`)
let failures = 0
for (const [needle, label] of expect) {
  const ok = html.includes(needle)
  if (!ok) failures++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}  ("${needle}")`)
}
console.log(`\n${expect.length - failures}/${expect.length} checks passed`)
process.exitCode = failures ? 1 : 0
