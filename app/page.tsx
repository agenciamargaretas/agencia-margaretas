import React from 'react'
import HeroSection from '@/components/sections/HeroSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import AgencyValueSection from '@/components/sections/AgencyValueSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <AgencyValueSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  )
} 