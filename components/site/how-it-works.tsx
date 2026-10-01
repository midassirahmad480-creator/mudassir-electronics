'use client'

import { BadgeCheck, PhoneCall, Wrench } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from './section-heading'

const icons = [PhoneCall, Wrench, BadgeCheck]

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section id="how" aria-labelledby="how-title" className="scroll-mt-24 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="how-title" eyebrow={t.how.eyebrow} title={t.how.title} />

        <div className="relative">
          <div
            className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-gradient-to-r from-primary via-accent to-primary md:block"
            aria-hidden="true"
          />
        <ol className="relative grid gap-10 md:grid-cols-3 md:gap-6">
          {t.how.steps.map((step, i) => {
            const Icon = icons[i]
            return (
              <li key={i} className="relative flex flex-col items-center gap-4 text-center">
                <span className="relative flex size-16 items-center justify-center rounded-full border-2 border-accent bg-background text-accent shadow-[0_0_24px_-6px] shadow-accent">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {t.how.step} {i + 1}
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground">{step.title}</h3>
                <p className="max-w-xs leading-relaxed text-muted-foreground">{step.desc}</p>
              </li>
            )
          })}
        </ol>
        </div>
      </div>
    </section>
  )
}
