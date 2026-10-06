import { TrendingUp, Shovel, Leaf, Globe2, Wheat, MapPin } from 'lucide-react'
import Reveal from './Reveal'

const BENEFITS = [
  {
    icon: TrendingUp,
    title: 'Croissance végétale améliorée',
    text: 'Des plantes plus vigoureuses, des tiges plus solides et un feuillage plus dense.',
  },
  {
    icon: Shovel,
    title: 'Sol plus fertile',
    text: 'Une terre mieux nourrie, plus vivante et plus équilibrée à chaque cycle.',
  },
  {
    icon: Leaf,
    title: 'Agriculture plus durable',
    text: 'Un geste pour l\'environnement, en harmonie avec les écosystèmes naturels.',
  },
  {
    icon: Globe2,
    title: "Produit d'origine naturelle",
    text: 'Élaboré à partir de ressources naturelles, pour une culture plus saine.',
  },
  {
    icon: Wheat,
    title: 'Adapté à différentes cultures',
    text: 'Légumes, fruits, céréales, palmiers, oliviers et cultures sous serre.',
  },
  {
    icon: MapPin,
    title: 'Solution conçue en Algérie',
    text: 'Développée localement, pensée pour les réalités de nos terres et de notre climat.',
  },
]

export default function Benefits() {
  return (
    <section
      id="avantages"
      className="relative isolate overflow-hidden bg-gradient-to-br from-forest-900 via-forest-800 to-forest-950 py-24 lg:py-32"
    >
      {/* texture & glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-forest-500/25 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/3 rounded-full bg-leaf-300/15 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden="true">
          <defs>
            <pattern id="leafPattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <path
                d="M30 90c0-30 22-52 60-58-6 34-28 56-60 58Zm0 0c8-18 22-32 40-40"
                fill="none"
                stroke="#e2f4e5"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leafPattern)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-mint-200/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-mint-100 backdrop-blur-md">
              Avantages
            </span>
          </Reveal>
          <Reveal as="h2" delay={1} className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Pourquoi <span className="bg-gradient-to-r from-leaf-300 to-mint-200 bg-clip-text text-transparent">Stimulant Vert®</span> ?
          </Reveal>
          <Reveal as="p" delay={2} className="mt-5 text-lg leading-relaxed text-mint-100/80">
            Six raisons concrètes de faire confiance à notre fertilisant liquide organique,
            du premier arrosage à la récolte.
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              delay={(i % 3) + 1}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-leaf-300/50 hover:bg-white/[0.11]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-leaf-300/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-leaf-300 to-forest-500 text-forest-950 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <benefit.icon className="h-7 w-7" strokeWidth={2.1} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-white">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mint-100/75">{benefit.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
