'use client'

import { useLanguage } from '@/components/language-provider'
import { Hero } from './hero'
import { Services } from './services'
import { Modes } from './modes'
import { HowItWorks } from './how-it-works'
import { WhyUs } from './why-us'
import { Reviews } from './reviews'
import { ContactFooter } from './contact-footer'

export function PageContent() {
  const { lang } = useLanguage()
  return (
    <div key={lang} className="animate-in fade-in duration-500">
      <main>
        <Hero />
        <Services />
        <Modes />
        <HowItWorks />
        <WhyUs />
        <Reviews />
      </main>
      <ContactFooter />
    </div>
  )
}
