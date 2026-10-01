'use client'

import { MessageCircle } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { WHATSAPP_URL } from '@/lib/translations'

export function FloatingWhatsApp() {
  const { t } = useLanguage()
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.floating}
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_0_30px_-4px] shadow-accent transition-transform hover:scale-110"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  )
}
