'use client'

import { Languages } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from './language-provider'
import type { Lang } from '@/lib/translations'

const options: { value: Lang; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'ur', label: 'Roman Urdu' },
]

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.nav.langLabel}
      className={cn(
        'flex items-center gap-1 rounded-full border border-border bg-secondary/60 p-1',
        className,
      )}
    >
      <Languages className="ml-1.5 size-4 text-accent" aria-hidden="true" />
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => setLang(opt.value)}
          aria-pressed={lang === opt.value}
          className={cn(
            'rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300',
            lang === opt.value
              ? 'bg-primary text-primary-foreground shadow-[0_0_16px_-2px] shadow-primary/70'
              : 'text-muted-foreground hover:text-foreground',
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
