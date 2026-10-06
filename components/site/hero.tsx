'use client'

import Image from 'next/image'
import { MapPin, MessageCircle, PhoneCall, ShieldCheck, Siren, House, Video } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { getWhatsAppUrl, PHONE_DISPLAY, PHONE_TEL } from '@/lib/translations'

const badgeIcons = [Siren, House, Video]

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <MapPin className="size-3.5 text-accent" aria-hidden="true" />
            {t.hero.eyebrow}
          </span>

          <h1 className="font-heading text-4xl font-bold leading-tight text-balance text-foreground md:text-5xl xl:text-6xl">
            {t.hero.title}
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">{t.hero.subtitle}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_TEL}
              className="group flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-[0_0_30px_-6px] shadow-primary transition-all hover:-translate-y-0.5 hover:shadow-accent"
            >
              <PhoneCall className="size-5" aria-hidden="true" />
              {t.hero.call}: {PHONE_DISPLAY}
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-accent/50 bg-accent/10 px-6 py-3.5 font-semibold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/20"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              {t.hero.whatsapp}
            </a>
          </div>

          <ul className="flex flex-wrap gap-2 pt-2">
            {t.hero.badges.map((badge, i) => {
              const Icon = badgeIcons[i]
              return (
                <li
                  key={i}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  <Icon className="size-3.5 text-accent" aria-hidden="true" />
                  {badge}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-60 blur-lg" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/hero-repair.png"
              alt={t.hero.imageAlt}
              width={1024}
              height={1024}
              priority
              className="aspect-[4/3] w-full object-cover lg:aspect-square"
            />
          </div>

          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur md:left-6">
            <span className="flex size-11 items-center justify-center rounded-lg bg-accent/15">
              <ShieldCheck className="size-6 text-accent" aria-hidden="true" />
            </span>
            <div>
              <p className="font-heading text-xl font-bold text-foreground">5000+</p>
              <p className="text-xs text-muted-foreground">{t.hero.statLabel}</p>
            </div>
          </div>

          <div className="absolute -top-4 right-4 flex items-center gap-2 rounded-full border border-accent/40 bg-card/95 px-3 py-1.5 text-xs font-semibold text-accent backdrop-blur">
            <span className="size-2 rounded-full bg-accent shadow-[0_0_8px] shadow-accent" />
            24/7 · {t.hero.statOpen}
          </div>
        </div>
      </div>
    </section>
  )
}
