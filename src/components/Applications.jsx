import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const APPLICATIONS = [
  { name: 'Légumes', img: '/images/app-vegetables.webp', note: 'Tomates, poivrons, courgettes…' },
  { name: 'Fruits', img: '/images/app-fruits.webp', note: 'Agrumes, pommes, prunes…' },
  { name: 'Céréales', img: '/images/app-cereals.webp', note: 'Blé, orge, avoine…' },
  { name: 'Palmiers', img: '/images/app-palm.webp', note: 'Palmiers à dattes' },
  { name: 'Oliviers', img: '/images/app-olive.webp', note: 'Oliveraies méditerranéennes' },
  { name: 'Serres', img: '/images/app-greenhouse.webp', note: 'Cultures sous abri' },
]

export default function Applications() {
  return (
    <section id="applications" className="relative overflow-hidden bg-mint-50 py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full bg-leaf-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-forest-700 shadow-soft">
              Applications
            </span>
          </Reveal>
          <Reveal as="h2" delay={1} className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-forest-900 sm:text-4xl lg:text-[2.75rem]">
            Nos applications
          </Reveal>
          <Reveal as="p" delay={2} className="mt-5 text-lg text-gray-600">
            Convient à une grande variété de cultures
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:mt-16">
          {APPLICATIONS.map((app, i) => (
            <Reveal
              key={app.name}
              delay={(i % 3) + 1}
              className="group block text-center"
            >
              <a href="#produit" className="block">
                <div className="relative mx-auto aspect-square w-full max-w-[18rem]">
                  {/* halo */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-leaf-300/45 to-forest-500/30 blur-md transition-all duration-500 group-hover:blur-lg group-hover:opacity-90" />
                  <div className="zoom-card relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-card transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-lift">
                    <img
                      src={app.img}
                      alt={app.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/55 via-transparent to-transparent" />
                  </div>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-forest-900 transition-colors duration-300 group-hover:text-forest-600 sm:text-xl">
                  {app.name}
                </h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">{app.note}</p>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Statement banner */}
        <Reveal delay={2} className="relative mt-20 lg:mt-28">
          <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-forest-700 via-forest-800 to-forest-950 px-8 py-14 text-center shadow-lift sm:px-16 lg:py-20">
            <div className="absolute inset-0 hero-radial opacity-60" />
            <div className="relative">
              <p className="mx-auto max-w-3xl font-display text-2xl font-extrabold leading-snug text-white sm:text-3xl lg:text-4xl">
                « Des plantes plus fortes, des récoltes plus abondantes. »
              </p>
              <a
                href="#produit"
                className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-base font-bold text-forest-800 shadow-lg transition-all duration-300 hover:bg-mint-100 hover:shadow-xl active:scale-95"
              >
                Découvrir le produit
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
