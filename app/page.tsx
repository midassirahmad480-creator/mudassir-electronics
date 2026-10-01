import { LanguageProvider } from '@/components/language-provider'
import { Navbar } from '@/components/site/navbar'
import { PageContent } from '@/components/site/page-content'
import { FloatingWhatsApp } from '@/components/site/floating-whatsapp'

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <PageContent />
      <FloatingWhatsApp />
    </LanguageProvider>
  )
}
