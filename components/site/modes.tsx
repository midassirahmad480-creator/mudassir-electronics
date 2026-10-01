'use client'

import { ArrowRight, House, Store, Video } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/language-provider'
import { WHATSAPP_URL } from '@/lib/translations'
import { SectionHeading } from './section-heading'

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Airport+Road+Kashrote+Gilgit+Pakistan'
const modeMeta = [
  { icon: Store, href: MAPS_URL },
  { icon: House, href: WHATSAPP_URL },
  { icon: Video, href: WHATSAPP_URL },
]

export function Modes() {
  const { t } = useLanguage()

  return (
    <section
      id="modes"
      aria-labelledby="modes-title"
      className="scroll-mt-24 border-y border-border bg-secondary/30 px-4 py-20 md:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="modes-title" eyebrow={t.modes.eyebrow} title={t.modes.title} subtitle={t.modes.subtitle} />

        <div className="grid gap-6 md:grid-cols-3">
          {t.modes.items.map((mode, i) => {
            const { icon: Icon, href } = modeMeta[i]
            const featured = i === 1
            return (
              <article
                key={i}
                className={cn(
                  'relative flex flex-col gap-5 rounded-2xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1',
                  featured
                    ? 'border-accent/60 shadow-[0_0_40px_-12px] shadow-accent'
                    : 'border-border hover:border-primary/60',
                )}
              >
                {featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    {t.modes.popular}
                  </span>
                )}
                <span
                  className={cn(
                    'flex size-14 items-center justify-center rounded-xl',
                    featured ? 'bg-accent text-accent-foreground' : 'bg-primary/15 text-accent',
                  )}
                >
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="font-heading text-xl font-bold text-foreground">{mode.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{mode.desc}</p>
                </div>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'group flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors',
                    featured
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border border-border text-foreground hover:border-accent hover:text-accent',
                  )}
                >
                  {mode.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
