import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import ExplanationSection from '../components/sections/ExplanationSection'
import ChallengesSection from '../components/sections/ChallengesSection'
import ServicesSection from '../components/sections/ServicesSection'
import ClientsSection from '../components/sections/ClientsSection'
import PortfolioSection from '../components/sections/PortfolioSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import TargetAudienceSection from '../components/sections/TargetAudienceSection'
import DiagnosticSection from '../components/sections/DiagnosticSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExplanationSection />
      <ChallengesSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <TargetAudienceSection />
      <DiagnosticSection />
      <ClientsSection />
    </main>
  )
} 