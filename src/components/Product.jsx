import { Package, FlaskConical, SprayCan, Pipette, Warehouse, BadgeCheck } from 'lucide-react'
import Reveal from './Reveal'
import Bottle from './Bottle'

const INFO = [
  {
    icon: Package,
    label: 'Format',
    value: '1L',
    note: 'Bouteille pratique et facile à doser.',
  },
  {
    icon: FlaskConical,
    label: 'Composition',
    value: 'À base d\'extraits naturels.',
    note: 'Fertilisant liquide organique.',
  },
  {
    icon: SprayCan,
    label: "Mode d'utilisation",
    value: 'À diluer dans l\'eau d\'irrigation ou en pulvérisation foliaire.',
    note: 'À préciser par le client selon les cultures.',
  },
  {
    icon: Pipette,
    label: 'Dosage',
    value: 'À préciser par le client.',
    note: 'Selon le type de culture et le stade de croissance.',
  },
  {
    icon: Warehouse,
    label: 'Stockage',
    value: 'À conserver dans un endroit frais, sec et à l\'abri de la lumière.',
    note: 'Bien refermer après chaque utilisation.',
  },
]

export default function Product() {
  return (
    <section id="produit" className="relative isolate overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-96 w-[44rem] max-w-full -translate-x-1/2 rounded-full bg-mint-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-mint-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-forest-700">
              Le produit
            </span>
          </Reveal>
          <Reveal as="h2" delay={1} className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-forest-900 sm:text-4xl lg:text-[2.75rem]">
            <span className="text-gradient-green">Stimulant Vert®</span>
          </Reveal>
          <Reveal as="p" delay={2} className="mt-4 text-lg font-semibold text-forest-800">
            Fertilisant liquide organique
          </Reveal>
          <Reveal as="p" delay={2} className="mt-3 text-gray-500">
            Une formulation naturelle et efficace, pensée pour accompagner vos cultures
            à chaque étape de leur croissance.
          </Reveal>
        </div>

        {/* Bottles showcase */}
        <Reveal delay={2} className="relative mt-16 lg:mt-20">
          <div className="relative overflow-hidden rounded-5xl bg-gradient-to-b from-mint-50 via-white to-beige-100 px-6 py-14 shadow-card ring-1 ring-mint-100 sm:py-20">
            {/* decorative circles */}
            <div className="pointer-events-none absolute left-8 top-10 h-40 w-40 rounded-full border border-leaf-300/40" />
            <div className="pointer-events-none absolute right-10 bottom-8 h-56 w-56 rounded-full border border-forest-400/20" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-leaf-300/20 blur-3xl" />

            <div className="relative flex flex-wrap items-end justify-center gap-8 sm:gap-16 lg:gap-24">
              <div className="flex flex-col items-center">
                <Bottle className="h-72 w-auto drop-shadow-[0_30px_45px_rgba(12,59,33,0.28)] sm:h-80 animate-float-slow" />
                <span className="mt-4 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-forest-700 shadow-soft ring-1 ring-mint-100">
                  Version 1L
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Bottle
                  variant="gold"
                  className="hidden h-72 w-auto drop-shadow-[0_30px_45px_rgba(12,59,33,0.28)] sm:block lg:h-80 animate-float-slower"
                />
                <span className="mt-4 hidden rounded-full bg-white px-4 py-1.5 text-xs font-bold text-forest-700 shadow-soft ring-1 ring-mint-100 sm:block">
                  Édition dorée
                </span>
              </div>
            </div>

            {/* badge */}
            <div className="relative mt-12 flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-forest-700 to-forest-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg sm:text-base">
                <BadgeCheck className="h-5 w-5 flex-none" />
                Naturellement efficace pour vos cultures
              </div>
            </div>
          </div>
        </Reveal>

        {/* Info cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {INFO.map((item, i) => (
            <Reveal
              key={item.label}
              delay={(i % 3) + 1}
              className="group flex flex-col rounded-3xl border border-mint-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift hover:border-leaf-300/60"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-mint-100 to-leaf-300/40 text-forest-700 transition-all duration-300 group-hover:from-forest-500 group-hover:to-forest-700 group-hover:text-white">
                  <item.icon className="h-6 w-6" strokeWidth={1.9} />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-forest-600/80">
                  {item.label}
                </span>
              </div>
              <p className="mt-4 font-display text-base font-bold leading-snug text-forest-900">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.note}</p>
            </Reveal>
          ))}

          {/* closing promise card */}
          <Reveal
            delay={4}
            className="flex flex-col justify-center gap-3 rounded-3xl bg-gradient-to-br from-forest-700 to-forest-900 p-7 text-white shadow-card"
          >
            <p className="font-display text-lg font-bold">L'engagement Stimulant Vert®</p>
            <p className="text-sm leading-relaxed text-mint-100/80">
              Un produit d'origine naturelle, fabriqué en Algérie, pour nourrir vos
              cultures tout en préservant votre terre.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
