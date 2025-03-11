import React from 'react'
import HeroSlider from '@/components/sections/HeroSlider'
import ServicesSection from '@/components/sections/ServicesSection'
import PortfolioSection from '@/components/sections/PortfolioSection'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSlider />
      <ServicesSection />
      <PortfolioSection />
    </main>
  )
} 