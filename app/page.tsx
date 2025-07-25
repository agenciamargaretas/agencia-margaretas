import React from 'react'
import { sanityFetch, queries } from '../sanity/lib/client'
import HeroSection from '../components/sections/HeroSection'
import ExplanationSection from '../components/sections/ExplanationSection'
import ChallengesSection from '../components/sections/ChallengesSection'
import ServicesSection from '../components/sections/ServicesSection'
import ClientsSection from '../components/sections/ClientsSection'
import PortfolioSection from '../components/sections/PortfolioSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import TargetAudienceSection from '../components/sections/TargetAudienceSection'
import DiagnosticSection from '../components/sections/DiagnosticSection'

interface HeroData {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  backgroundImage?: {
    asset: {
      url: string
    }
  } | string
}

interface Service {
  _key: string;
  id?: number
  title: string
  subtitle: string
  description: string
  highlight: string
  cta: string
  icon: string
  isActive: boolean
  order: number
}

interface ServicesData {
  title: string
  subtitle: string
  servicesList: Service[]
  isActive: boolean
  order: number
}

export default async function Home() {
  // Buscar dados do Hero e Services do Sanity
  const heroData = await sanityFetch<HeroData>(queries.hero)
  const servicesData = await sanityFetch<ServicesData>(queries.services)

  return (
    <main>
      <HeroSection heroData={heroData} />
      <ExplanationSection />
      <ChallengesSection />
      <ServicesSection servicesData={servicesData} />
      <PortfolioSection />
      <TestimonialsSection />
      <TargetAudienceSection />
      <DiagnosticSection />
      <ClientsSection />
    </main>
  )
} 