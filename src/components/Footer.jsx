import { Leaf, Mail, Phone, ArrowUp } from 'lucide-react'
import { BRAND, NAV_LINKS, CONTACT } from '../data/site'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-mint-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-forest-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 rounded-full bg-leaf-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-10">
          <div>
            <a href="#accueil" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-leaf-300 to-forest-500 text-forest-950 shadow-lg">
                <Leaf className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-extrabold text-white">
                  {BRAND.trademark}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-mint-100/70">
                  {BRAND.tagline}
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mint-100/65">
              Fertilisant liquide organique fabriqué en Algérie, pour des cultures plus
              fortes, plus saines et plus productives.
            </p>
            <p className="mt-4 font-display text-sm font-semibold italic text-leaf-300/90">
              {BRAND.slogan}
            </p>
          </div>

          <nav aria-label="Navigation de pied de page">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-sm text-mint-100/70 transition-colors duration-300 hover:text-white"
                  >
                    <span className="mr-0 h-px w-0 bg-leaf-300 transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-start gap-3 text-sm text-mint-100/70 transition-colors duration-300 hover:text-white"
                >
                  <Mail className="mt-0.5 h-5 w-5 flex-none text-leaf-300/80" />
                  <span className="break-all">{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneHref}`}
                  className="group flex items-start gap-3 text-sm text-mint-100/70 transition-colors duration-300 hover:text-white"
                >
                  <Phone className="mt-0.5 h-5 w-5 flex-none text-leaf-300/80" />
                  <span>{CONTACT.phoneDisplay}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-mint-100/60">
            © 2026 Stimulant Vert. Tous droits réservés.
          </p>
          <a
            href="#accueil"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-mint-100/60 transition-colors duration-300 hover:text-white"
          >
            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
            Retour en haut
          </a>
        </div>
      </div>
    </footer>
  )
}