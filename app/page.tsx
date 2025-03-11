import React from 'react'
import HeroSlider from '@/components/sections/HeroSlider'
import PortfolioSection from '@/components/sections/PortfolioSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSlider />
      <PortfolioSection />
      <ContactSection />
    </main>
  )
} 