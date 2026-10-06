import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  User,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react'
import Reveal from './Reveal'
import { CONTACT, IMAGES } from '../data/site'

const SOCIAL_ICONS = { Facebook, Instagram, Linkedin, Youtube }

const INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    note: 'Réponse sous 24 à 48 h',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phoneHref}`,
    note: 'Numéro à confirmer auprès de l\'entreprise',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: CONTACT.addressLine,
    href: '#',
    note: CONTACT.addressNote,
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-mint-50 to-white py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-leaf-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header banner */}
        <Reveal className="relative mb-14 overflow-hidden rounded-5xl shadow-lift lg:mb-16">
          <img
            src={IMAGES.ctaField}
            alt="Champ agricole sous une belle lumière"
            className="h-56 w-full object-cover sm:h-64 lg:h-72"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-900/70 to-forest-800/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Contactez-nous
            </h2>
            <p className="mt-3 max-w-xl text-base text-mint-100/85 sm:text-lg">
              Pour plus d'informations, n'hésitez pas à nous contacter.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* Left: contact info */}
          <div className="flex flex-col gap-5">
            {INFO.map((item, i) => (
              <Reveal
                key={item.label}
                delay={i + 1}
              >
                <a
                  href={item.href}
                  className="group flex items-center gap-5 rounded-3xl border border-mint-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift hover:border-leaf-300/60"
                >
                  <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-forest-500 to-forest-800 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-7 w-7" strokeWidth={1.9} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] text-forest-600/80">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block break-words font-display text-lg font-bold text-forest-900">
                      {item.value}
                    </span>
                    <span className="mt-0.5 block text-xs text-gray-500">{item.note}</span>
                  </span>
                </a>
              </Reveal>
            ))}

            {/* Socials */}
            <Reveal delay={4} className="rounded-3xl border border-mint-100 bg-white p-6 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest-600/80">
                Suivez-nous
              </p>
              <div className="mt-4 flex gap-3">
                {Object.entries(SOCIAL_ICONS).map(([name, Icon]) => (
                  <a
                    key={name}
                    href="#"
                    aria-label={name}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint-100 text-forest-700 transition-all duration-300 hover:bg-gradient-to-br hover:from-forest-500 hover:to-forest-800 hover:text-white hover:-translate-y-1"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-gray-400">
                Site de démonstration — les liens sociaux sont des espaces réservés.
              </p>
            </Reveal>
          </div>

          {/* Right: frontend-only form */}
          <Reveal delay={2}>
            <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-forest-800 to-forest-950 p-8 shadow-lift sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-leaf-300/15 blur-3xl" />

              <div className="relative">
                <h3 className="font-display text-2xl font-bold text-white">Écrivez-nous</h3>
                <p className="mt-2 text-sm leading-relaxed text-mint-100/75">
                  Formulaire de démonstration : aucun message n'est envoyé. Utilisez
                  nos coordonnées pour nous joindre directement.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-mint-100">
                      Nom complet
                    </label>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-mint-100/50" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Votre nom"
                        className="w-full rounded-2xl border border-white/15 bg-white/[0.07] py-3.5 pl-12 pr-4 text-white placeholder:text-mint-100/45 outline-none transition-colors duration-300 focus:border-leaf-300/70 focus:bg-white/[0.12]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-mint-100">
                      Adresse email
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-mint-100/50" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="vous@exemple.com"
                        className="w-full rounded-2xl border border-white/15 bg-white/[0.07] py-3.5 pl-12 pr-4 text-white placeholder:text-mint-100/45 outline-none transition-colors duration-300 focus:border-leaf-300/70 focus:bg-white/[0.12]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-mint-100">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="pointer-events-none absolute left-4 top-4 h-5 w-5 text-mint-100/50" />
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Votre question ou demande de renseignement…"
                        className="w-full resize-none rounded-2xl border border-white/15 bg-white/[0.07] py-3.5 pl-12 pr-4 text-white placeholder:text-mint-100/45 outline-none transition-colors duration-300 focus:border-leaf-300/70 focus:bg-white/[0.12]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-br from-leaf-300 to-forest-500 px-6 py-4 text-base font-bold text-forest-950 shadow-[0_14px_32px_-12px_rgba(67,178,92,0.7)] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
                  >
                    <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    Envoyer
                  </button>
                </form>

                {/* Frontend-only inline notification */}
                {sent && (
                  <div
                    role="status"
                    className="mt-6 flex gap-3 rounded-2xl border border-leaf-300/40 bg-white/10 p-4 text-mint-50 backdrop-blur-sm animate-in"
                  >
                    <CheckCircle2 className="h-6 w-6 flex-none text-leaf-300" />
                    <p className="text-sm leading-relaxed">
                      <span className="font-bold">Merci pour votre intérêt !</span> Pour nous
                      contacter directement, utilisez notre adresse email{' '}
                      <a href={`mailto:${CONTACT.email}`} className="font-bold underline decoration-leaf-300 underline-offset-2 hover:text-white">
                        {CONTACT.email}
                      </a>{' '}
                      ou notre numéro{' '}
                      <a href={`tel:${CONTACT.phoneHref}`} className="font-bold underline decoration-leaf-300 underline-offset-2 hover:text-white">
                        {CONTACT.phoneDisplay}
                      </a>.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
