import React from 'react'
// import { sanityFetch, queries } from '../sanity/lib/client' // Removido
import HeroSection from '../components/sections/HeroSection'
import ExplanationSection from '../components/sections/ExplanationSection'
import ChallengesSection from '../components/sections/ChallengesSection'
import ServicesSection from '../components/sections/ServicesSection'
import ClientsSection from '../components/sections/ClientsSection'
import PortfolioSection from '../components/sections/PortfolioSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import TargetAudienceSection from '../components/sections/TargetAudienceSection'
import DiagnosticSection from '../components/sections/DiagnosticSection'

// Dados de exemplo para substituir o Sanity
const mockHeroData = {
  title: "Título de Exemplo",
  subtitle: "Subtítulo de exemplo para a seção hero.",
  ctaText: "Call to Action",
  ctaLink: "#",
};

const mockServicesData = {
  title: "Nossos Serviços",
  subtitle: "Conheça as soluções que oferecemos.",
  servicesList: [
    { _key: '1', title: "Serviço 1", subtitle: "Sub 1", description: "Descrição do serviço 1.", highlight: "Destaque", cta: "Saiba mais", icon: "📱", isActive: true, order: 1 },
    { _key: '2', title: "Serviço 2", subtitle: "Sub 2", description: "Descrição do serviço 2.", highlight: "Destaque", cta: "Saiba mais", icon: "💡", isActive: true, order: 2 },
  ],
  isActive: true,
  order: 1,
};

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
  // Buscar dados do Hero e Services do Sanity - REMOVIDO
  // const heroData = await sanityFetch<HeroData>(queries.hero)
  // const servicesData = await sanityFetch<ServicesData>(queries.services)

  // Usando dados de exemplo
  const heroData = mockHeroData;
  const servicesData = mockServicesData;

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