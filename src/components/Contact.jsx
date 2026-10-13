import { Mail, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { CONTACT } from '../data/site'

const INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phoneHref}`,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-mint-50 to-white py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-leaf-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
        <Reveal className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-forest-700 shadow-soft">
            Contact
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-forest-900 sm:text-4xl lg:text-[2.75rem]">
            Contactez-nous
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Pour plus d'informations, n'hésitez pas à nous contacter.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {INFO.map((item, i) => (
            <Reveal key={item.label} delay={i + 1}>
              <a
                href={item.href}
                className="group flex items-center gap-5 rounded-3xl border border-mint-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-leaf-300/60 hover:shadow-lift"
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
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}