'use client'

import { Quote, Star } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from './section-heading'

export function Reviews() {
  const { t } = useLanguage()

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="scroll-mt-24 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading id="reviews-title" eyebrow={t.reviews.eyebrow} title={t.reviews.title} />
        <div className="grid gap-6 md:grid-cols-2">
          {t.reviews.items.map((review) => (
            <figure
              key={review.name}
              className="relative flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent/50"
            >
              <Quote className="absolute right-6 top-6 size-10 text-primary/30" aria-hidden="true" />
              <div className="flex gap-1" role="img" aria-label={t.reviews.rating}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="flex-1 leading-relaxed text-foreground">
                {`"${review.text}"`}
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-primary font-heading font-bold text-primary-foreground">
                  {review.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-foreground">{review.name}</span>
                  <span className="text-sm text-muted-foreground">{review.place}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
