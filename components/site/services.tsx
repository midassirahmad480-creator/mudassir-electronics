'use client'

import {
  ArrowRight,
  BatteryCharging,
  Cpu,
  Droplets,
  Fan,
  Heater,
  Lightbulb,
  Microwave,
  Tv,
  WashingMachine,
  Zap,
} from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { WHATSAPP_URL } from '@/lib/translations'
import { SectionHeading } from './section-heading'

const icons = [Lightbulb, BatteryCharging, WashingMachine, Fan, Microwave, Heater, Droplets, Zap, Tv, Cpu]

export function Services() {
  const { t } = useLanguage()

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
                <a
                  href={`${WHATSAPP_URL}${encodeURIComponent(` — ${item.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_0_30px_-10px] hover:shadow-accent"
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
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
