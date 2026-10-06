'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  Clock3,
  Cpu,
  Droplets,
  Fan,
  Heater,
  Lightbulb,
  MapPin,
  MessageCircle,
  Microwave,
  Phone,
  Tv,
  WashingMachine,
  X,
  Zap,
} from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { WHATSAPP_URL } from '@/lib/translations'
import { SectionHeading } from './section-heading'

const icons = [Lightbulb, BatteryCharging, WashingMachine, Fan, Microwave, Heater, Droplets, Zap, Tv, Cpu]

export function Services() {
  const { t } = useLanguage()
  const [selectedService, setSelectedService] = useState<(typeof t.services.items)[number] | null>(null)

  const whatsappHref = selectedService
    ? `${WHATSAPP_URL}${encodeURIComponent(` — ${selectedService.title}`)}`
    : WHATSAPP_URL

  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-24 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="services-title"
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {t.services.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setSelectedService(item)}
                  className="group relative flex h-full w-full flex-col gap-4 overflow-hidden rounded-xl border border-border bg-card p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_30px_-10px] hover:shadow-accent"
                >
                  <span className="absolute right-4 top-4 font-heading text-xs font-bold text-muted-foreground/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex size-12 items-center justify-center rounded-lg bg-primary/15 text-accent transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <div className="flex flex-1 flex-col gap-1.5">
                    <h3 className="font-heading font-semibold leading-snug text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-accent opacity-80 transition-opacity group-hover:opacity-100">
                    {t.services.book}
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          role="presentation"
          onClick={() => setSelectedService(null)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            className="relative w-full max-w-lg rounded-2xl border border-accent/40 bg-card p-6 shadow-2xl md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close booking details"
              onClick={() => setSelectedService(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X aria-hidden="true" />
            </button>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3 pr-8">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-accent">
                  <CheckCircle2 aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{t.services.bookingLabel}</p>
                  <h2 id="booking-title" className="mt-1 font-heading text-2xl font-bold text-foreground">{selectedService.title}</h2>
                </div>
              </div>
              <p className="leading-relaxed text-muted-foreground">{t.services.bookingMessage}</p>
              <dl className="grid gap-3 rounded-xl border border-border bg-background/60 p-4">
                <div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 text-accent" aria-hidden="true" /><div><dt className="text-xs text-muted-foreground">{t.services.serviceType}</dt><dd className="font-medium text-foreground">{selectedService.desc}</dd></div></div>
                <div className="flex items-start gap-3"><Clock3 className="mt-0.5 text-accent" aria-hidden="true" /><div><dt className="text-xs text-muted-foreground">{t.services.estimatedTime}</dt><dd className="font-medium text-foreground">{t.services.timeValue}</dd></div></div>
                <div className="flex items-start gap-3"><MapPin className="mt-0.5 text-accent" aria-hidden="true" /><div><dt className="text-xs text-muted-foreground">{t.services.shopAddress}</dt><dd className="font-medium text-foreground">{t.contact.address}</dd></div></div>
                <div className="flex items-start gap-3"><Phone className="mt-0.5 text-accent" aria-hidden="true" /><div><dt className="text-xs text-muted-foreground">{t.services.contactInfo}</dt><dd className="font-medium text-foreground">{t.services.phoneValue}</dd></div></div>
              </dl>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3.5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
                <MessageCircle aria-hidden="true" />
                {t.services.confirmBooking}
              </a>
            </div>
          </section>
        </div>
      )}
    </section>
  )
}
