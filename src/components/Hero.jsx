import { Leaf, ArrowRight, Phone, Sparkles } from 'lucide-react'
import Bottle from './Bottle'
import { BRAND, IMAGES } from '../data/site'

/** Small, tasteful Algerian flag mark (green / white with red crescent & star). */
function AlgeriaFlag({ className = '' }) {
  return (
    <svg viewBox="0 0 60 40" className={className} role="img" aria-label="Drapeau algérien">
      <rect width="20" height="40" fill="#0c3b21" />
      <rect x="20" width="40" height="40" fill="#ffffff" />
      <g fill="#d21034">
        <path d="M35.6 8.4a7.6 7.6 0 1 0 0 23.2 9 9 0 1 1 0-23.2Z" />
        <path d="M39.2 14.6l1.9 4.1 4.5.4-3.4 2.9 1 4.4-4-2.2-4 2.2 1-4.4-3.4-2.9 4.5-.4Z" />
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-forest-950 pt-20 pb-16 lg:pt-24"
    >
      {/* Background photo + gradients */}
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES.hero}
          alt="Champ agricole baigné par la lumière dorée du soleil couchant"
          className="h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/90 via-forest-950/70 to-forest-800/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-forest-950/45" />
        <div className="absolute inset-0 hero-radial mix-blend-soft-light" />
      </div>

      {/* Decorative floating leaves */}
      <Leaf className="pointer-events-none absolute left-[6%] top-[26%] hidden h-20 w-20 text-mint-200/25 animate-float-slow md:block" strokeWidth={1.4} />
      <Leaf className="pointer-events-none absolute right-[42%] bottom-[14%] hidden h-14 w-14 text-leaf-300/30 animate-float-slower lg:block" strokeWidth={1.4} />
      <Leaf className="pointer-events-none absolute left-[12%] bottom-[12%] hidden h-10 w-10 text-mint-100/25 animate-float lg:block" strokeWidth={1.4} />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-12">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-mint-200/30 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-mint-100 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            {BRAND.tagline}
          </div>

          <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            From Algeria...
            <span className="mt-2 block bg-gradient-to-r from-leaf-300 via-forest-400 to-mint-200 bg-clip-text text-transparent">
              for a greener and healthier world
            </span>
          </h1>

          <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-xl text-base leading-relaxed text-mint-50/85 sm:text-lg lg:mx-0">
            Un fertilisant liquide organique, naturel et efficace pour des cultures
            <span className="font-semibold text-white"> plus fortes, plus saines et plus productives</span>.
          </p>

          <div className="reveal reveal-delay-3 mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#produit"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-leaf-300 to-forest-500 px-8 py-4 text-base font-bold text-forest-950 shadow-[0_18px_40px_-14px_rgba(67,178,92,0.75)] transition-all duration-300 hover:shadow-[0_24px_52px_-14px_rgba(67,178,92,0.85)] hover:brightness-105 active:scale-95 sm:w-auto"
            >
              Découvrir le produit
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-mint-100/40 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white/80 hover:bg-white/15 active:scale-95 sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              Nous contacter
            </a>
          </div>

          {/* Algerian origin chip */}
          <div className="reveal reveal-delay-4 mt-10 flex items-center justify-center gap-3 lg:justify-start">
            <AlgeriaFlag className="h-7 w-11 flex-none rounded-sm shadow-md ring-1 ring-black/10" />
            <p className="text-sm text-mint-100/80">
              <span className="font-bold text-white">Fabriqué en Algérie</span> — pensé pour une agriculture durable
            </p>
          </div>
        </div>

        {/* Product visual */}
        <div className="reveal reveal-delay-2 relative flex items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-leaf-300/25 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute h-80 w-80 rounded-full border border-mint-200/20 sm:h-[28rem] sm:w-[28rem]" />
          <div className="absolute h-96 w-96 rounded-full border border-mint-200/10 sm:h-[34rem] sm:w-[34rem]" />
          <Bottle className="relative h-[24rem] w-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.45)] sm:h-[30rem] animate-float-slow" size={1} />
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
