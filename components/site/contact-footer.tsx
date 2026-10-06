'use client'

import { Clock, MapPin, MessageCircle, Phone, PhoneCall, Zap } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { getWhatsAppUrl, PHONE_DISPLAY, PHONE_TEL } from '@/lib/translations'

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Airport+Road+Kashrote+Gilgit+Pakistan'
const socials = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'WhatsApp', href: getWhatsAppUrl() },
]

export function ContactFooter() {
  const { t } = useLanguage()

  const details = [
    { icon: MapPin, label: t.contact.addressLabel, value: t.contact.address, href: MAPS_URL },
    { icon: Phone, label: t.contact.phoneLabel, value: PHONE_DISPLAY, href: PHONE_TEL },
    { icon: Clock, label: t.contact.timingLabel, value: t.contact.timing },
  ]

  return (
    <>
      <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 px-4 py-20 md:px-6">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-primary/25 via-card to-card p-8 md:p-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-accent/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.contact.eyebrow}</span>
              <h2 id="contact-title" className="font-heading text-3xl font-bold text-balance text-foreground md:text-4xl">
                {t.contact.title}
              </h2>
              <p className="leading-relaxed text-muted-foreground">{t.contact.subtitle}</p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <a
                  href={PHONE_TEL}
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-[0_0_30px_-6px] shadow-primary transition-transform hover:-translate-y-0.5"
                >
                  <PhoneCall className="size-5" aria-hidden="true" />
                  {t.contact.call}
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-accent/50 bg-accent/10 px-6 py-3.5 font-semibold text-accent transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  {t.contact.whatsapp}
                </a>
              </div>
            </div>

            <ul className="flex flex-col gap-4">
              {details.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-accent">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
                      <span className="font-semibold text-foreground">{value}</span>
                    </span>
                  </>
                )
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 rounded-xl border border-border bg-background/60 p-4 transition-colors hover:border-accent/60"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-xl border border-border bg-background/60 p-4">
                        {content}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-4 pb-24 pt-12 md:px-6 md:pb-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary">
                <Zap className="size-4 text-primary-foreground" aria-hidden="true" />
              </span>
              <span className="font-heading font-bold text-foreground">Mudassir Electronics</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
          </div>

          <nav aria-label={t.footer.quick}>
            <h3 className="mb-3 font-heading text-sm font-semibold text-foreground">{t.footer.quick}</h3>
            <ul className="grid grid-cols-2 gap-2">
              {t.nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-3 font-heading text-sm font-semibold text-foreground">{t.footer.follow}</h3>
            <ul className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-7xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
          {t.footer.rights}
        </p>
      </footer>
    </>
  )
}
