'use client'

import { ShieldCheck, Users, Wallet } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from './section-heading'

const icons = [ShieldCheck, Users, Wallet]

export function WhyUs() {
  const { t } = useLanguage()

  return (
    <section aria-labelledby="why-title" className="border-y border-border bg-secondary/30 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="why-title" eyebrow={t.why.eyebrow} title={t.why.title} />
        <ul className="grid gap-6 md:grid-cols-3">
          {t.why.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <li key={i} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
