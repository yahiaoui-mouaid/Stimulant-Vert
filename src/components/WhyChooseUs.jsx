import { Leaf, Sprout, Sun } from 'lucide-react'
import Reveal from './Reveal'
import { IMAGES } from '../data/site'

const PILLARS = [
  { icon: Sun, title: 'Better Soil.', text: 'Un sol plus riche, plus vivant, plus fertile.' },
  { icon: Sprout, title: 'Better Plants.', text: 'Des plantes plus fortes et plus saines.' },
  { icon: Leaf, title: 'A Greener Tomorrow.', text: 'Une agriculture durable pour demain.' },
]

export default function WhyChooseUs() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-forest-950 py-28 lg:py-36">
      {/* background photo */}
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES.whyField}
          alt="Lumière du soleil levant sur un champ agricole"
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-forest-950/82" />
        <div className="absolute inset-0 bg-gradient-to-tr from-forest-950 via-forest-950/60 to-forest-800/50" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-mint-200/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-mint-100 backdrop-blur-md">
              Notre engagement
            </span>
          </Reveal>
          <Reveal as="h2" delay={1} className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Pourquoi nous choisir ?
          </Reveal>
          <Reveal as="p" delay={2} className="mt-6 text-lg leading-relaxed text-mint-100/85">
            Nous croyons en une agriculture plus responsable, plus naturelle et plus
            durable. Avec Stimulant Vert, vous choisissez un produit d'origine naturelle,
            respectueux de l'environnement et bénéfique pour vos cultures.
          </Reveal>
        </div>

        {/* Big statement */}
        <Reveal delay={2} className="mt-16 lg:mt-24">
          <div className="flex flex-col gap-8 border-l-4 border-leaf-300/70 pl-8 sm:pl-12 lg:gap-12">
            {PILLARS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i + 1}
                className="flex items-center gap-5 sm:gap-7"
              >
                <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-leaf-300 to-forest-500 text-forest-950 shadow-lg sm:h-16 sm:w-16">
                  <p.icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-mint-100/70 sm:text-base">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
