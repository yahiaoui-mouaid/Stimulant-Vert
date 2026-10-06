import { useState } from 'react'
import { Leaf, Menu, X, Phone } from 'lucide-react'
import { BRAND, NAV_LINKS, CONTACT } from '../data/site'
import { useScrolled, useBodyScrollLock } from '../hooks/useScrollReveal'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(28)

  useBodyScrollLock(open)

  const close = () => setOpen(false)

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/85 shadow-[0_10px_40px_-18px_rgba(12,59,33,0.45)] backdrop-blur-xl'
          : 'bg-transparent',
      ].join(' ')}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <a href="#accueil" onClick={close} className="group flex items-center gap-3" aria-label={`${BRAND.trademark} — accueil`}>
          <span
            className={[
              'flex h-11 w-11 items-center justify-center rounded-2xl shadow-lg transition-all duration-500',
              'bg-gradient-to-br from-forest-500 to-forest-800 text-mint-100 group-hover:scale-105 group-hover:rotate-3',
              scrolled ? 'shadow-forest-800/30' : 'shadow-black/20',
            ].join(' ')}
          >
            <Leaf className="h-6 w-6" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={[
                'font-display text-lg font-extrabold tracking-tight transition-colors duration-500',
                scrolled ? 'text-forest-900' : 'text-white drop-shadow-sm',
              ].join(' ')}
            >
              {BRAND.trademark}
            </span>
            <span
              className={[
                'text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors duration-500',
                scrolled ? 'text-forest-600/80' : 'text-mint-100/90',
              ].join(' ')}
            >
              {BRAND.tagline}
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={[
                  'relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300',
                  'after:absolute after:inset-x-4 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full',
                  'after:bg-forest-500 after:transition-transform after:duration-300 hover:after:scale-x-100',
                  scrolled ? 'text-forest-900/80 hover:text-forest-700' : 'text-white/90 hover:text-white',
                ].join(' ')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-forest-500 to-forest-700 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_28px_-12px_rgba(12,59,33,0.7)] transition-all duration-300 hover:shadow-[0_18px_36px_-12px_rgba(12,59,33,0.75)] hover:brightness-110 active:scale-95"
          >
            <Phone className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Nous contacter
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          className={[
            'relative z-50 flex h-11 w-11 items-center justify-center rounded-2xl transition-colors duration-300 lg:hidden',
            open || scrolled ? 'bg-forest-800/10 text-forest-800' : 'bg-white/15 text-white backdrop-blur-md',
          ].join(' ')}
        >
          <span className="relative h-5 w-5">
            <Menu
              className={['absolute inset-0 h-5 w-5 transition-all duration-300', open ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'].join(' ')}
            />
            <X
              className={['absolute inset-0 h-5 w-5 transition-all duration-300', open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'].join(' ')}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={[
          'fixed inset-0 z-40 lg:hidden',
          'transition-all duration-500',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      >
        <div
          className="absolute inset-0 bg-forest-950/40 backdrop-blur-sm"
          onClick={close}
          aria-hidden="true"
        />
        <div
          className={[
            'absolute right-0 top-0 h-full w-[82%] max-w-sm overflow-y-auto px-6 pb-10 pt-24',
            'bg-gradient-to-b from-forest-900 to-forest-950 shadow-2xl',
            'transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
            open ? 'translate-x-0' : 'translate-x-full',
          ].join(' ')}
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  style={{ transitionDelay: open ? `${120 + i * 55}ms` : '0ms' }}
                  className={[
                    'block rounded-2xl px-5 py-4 text-lg font-semibold text-mint-100/90',
                    'transition-all duration-500 hover:bg-white/10 hover:text-white',
                    open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0',
                  ].join(' ')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-white/15 pt-8">
            <a
              href="#contact"
              onClick={close}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-leaf-300 to-forest-500 px-6 py-4 text-base font-bold text-forest-950 shadow-lg transition-all duration-300 hover:brightness-110 active:scale-95"
            >
              <Phone className="h-5 w-5" />
              Nous contacter
            </a>
            <p className="mt-6 text-center text-sm text-mint-100/60">
              <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">
                {CONTACT.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
