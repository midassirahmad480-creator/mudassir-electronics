'use client'

import { useState } from 'react'
import { Menu, PhoneCall, X, Zap } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { LanguageToggle } from '@/components/language-toggle'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/translations'

export function Navbar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-lg bg-primary shadow-[0_0_20px_-4px] shadow-accent">
            <Zap className="size-5 text-primary-foreground" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-sm font-bold text-foreground md:text-base">{t.nav.brand}</span>
            <span className="text-xs text-accent">{t.nav.brandSub}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 xl:flex">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={PHONE_TEL}
            className="flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:bg-accent/20"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {t.nav.callBadge}: {PHONE_DISPLAY}
          </a>
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={PHONE_TEL}
            aria-label={`${t.nav.callBadge}: ${PHONE_DISPLAY}`}
            className="flex size-10 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent"
          >
            <PhoneCall className="size-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.close : t.nav.menu}
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div className="border-t border-border px-4 py-2 md:hidden">
        <LanguageToggle className="mx-auto w-fit" />
      </div>

      {open && (
        <div id="mobile-menu" className="animate-in fade-in slide-in-from-top-2 border-t border-border px-4 pb-4 md:hidden">
          <ul className="flex flex-col py-2">
            {t.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={PHONE_TEL}
            className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
          >
            <PhoneCall className="size-4" aria-hidden="true" />
            {t.nav.callBadge}: {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  )
}
