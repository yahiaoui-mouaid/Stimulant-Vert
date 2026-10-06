import {
  Sprout,
  Layers,
  Recycle,
  Droplets,
  Grid3x3,
  ArrowRight,
  BadgeCheck,
} from 'lucide-react'
import Reveal from './Reveal'
import { IMAGES } from '../data/site'

const FEATURES = [
  { icon: Sprout, title: 'Stimule la croissance des plantes', text: 'Soutient un développement vigoureux des tiges, des feuilles et des racines.' },
  { icon: Layers, title: 'Améliore la fertilité du sol', text: "Participe à la richesse et à l'équilibre de votre terre, saison après saison." },
  { icon: Recycle, title: "Favorise une agriculture durable", text: 'Une approche respectueuse de l\'environnement et des écosystèmes.' },
  { icon: Droplets, title: 'Produit à base de ressources naturelles', text: 'Issu de matières premières naturelles, sans compromis sur la qualité.' },
  { icon: Grid3x3, title: 'Adapté à toutes les cultures', text: 'Légumes, fruits, céréales, palmiers, oliviers et cultures sous serre.' },
]

export default function About() {
  return (
    <section id="a-propos" className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* soft decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-mint-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-beige-100/80 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: text */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-mint-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-forest-700">
                À propos
              </span>
            </Reveal>
            <Reveal as="h2" delay={1} className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-forest-900 sm:text-4xl lg:text-[2.75rem]">
              À propos de <span className="text-gradient-green">Stimulant Vert®</span>
            </Reveal>
            <Reveal as="p" delay={2} className="mt-6 text-lg leading-relaxed text-gray-600">
              Stimulant Vert est un fertilisant liquide organique conçu pour nourrir
              vos plantes naturellement. Fabriqué en Algérie, il est issu de ressources
              naturelles et contribue à améliorer la santé, la croissance et le
              rendement des cultures.
            </Reveal>
            <Reveal delay={3} className="mt-8">
              <a
                href="#avantages"
                className="group inline-flex items-center gap-2.5 rounded-full bg-forest-800 px-7 py-3.5 text-base font-bold text-white shadow-[0_14px_30px_-14px_rgba(12,59,33,0.6)] transition-all duration-300 hover:bg-forest-700 hover:shadow-[0_20px_40px_-14px_rgba(12,59,33,0.65)] active:scale-95"
              >
                En savoir plus
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </Reveal>

            {/* trust row */}
            <Reveal delay={4} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-mint-100 pt-8">
              {[
                { value: '100%', label: 'Origine naturelle' },
                { value: '1L', label: 'Format pratique' },
                { value: '6+', label: 'Types de cultures' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-extrabold text-forest-700">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Right: visual collage */}
          <Reveal delay={2} className="relative">
            <div className="relative grid grid-cols-2 gap-5">
              <div className="zoom-card group relative col-span-1 overflow-hidden rounded-4xl shadow-card">
                <img
                  src={IMAGES.aboutSeedlings}
                  alt="Jeunes plants en croissance dans un champ"
                  className="aspect-square h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/45 to-transparent" />
              </div>
              <div className="zoom-card group relative overflow-hidden rounded-4xl shadow-card">
                <img
                  src={IMAGES.aboutField}
                  alt="Champ cultivé verdoyant"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ aspectRatio: '3 / 4' }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/45 to-transparent" />
              </div>
            </div>

            {/* floating badge card */}
            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-white/95 px-5 py-4 shadow-lift ring-1 ring-mint-100 backdrop-blur-md">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-leaf-300 to-forest-500 text-white">
                <BadgeCheck className="h-6 w-6" />
              </span>
              <div className="leading-tight">
                <div className="font-display text-sm font-bold text-forest-900">Produit naturel</div>
                <div className="text-xs text-gray-500">Fabriqué en Algérie</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Feature cards */}
        <div className="mt-24 lg:mt-32">
          <Reveal className="text-center">
            <h3 className="font-display text-2xl font-bold text-forest-900 sm:text-3xl">
              Conçu pour vos cultures, pensé pour la nature
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Cinq engagements au cœur de la formulation de Stimulant Vert®.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <Reveal
                key={feature.title}
                delay={(i % 3) + 1}
                className="group relative overflow-hidden rounded-3xl border border-mint-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-leaf-300/60 hover:shadow-lift"
              >
                <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-mint-50 transition-transform duration-500 group-hover:translate-x-0 group-hover:-translate-y-0" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-mint-100 to-leaf-300/40 text-forest-700 transition-all duration-300 group-hover:from-forest-500 group-hover:to-forest-700 group-hover:text-white">
                  <feature.icon className="h-7 w-7" strokeWidth={1.9} />
                </div>
                <h4 className="relative mt-5 font-display text-lg font-bold text-forest-900">
                  {feature.title}
                </h4>
                <p className="relative mt-2 text-sm leading-relaxed text-gray-500">{feature.text}</p>
              </Reveal>
            ))}

            {/* closing card to balance the 6-cell grid */}
            <Reveal
              delay={4}
              className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-forest-700 to-forest-900 p-7 text-white shadow-card"
            >
              <h4 className="font-display text-lg font-bold">Une seule promesse</h4>
              <p className="mt-2 text-sm leading-relaxed text-mint-100/80">
                Nourrir la plante, respecter la terre, et accompagner les agriculteurs
                d'aujourd'hui et de demain.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
