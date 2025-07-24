// lib/sanity.ts
// Configuração do cliente Sanity CMS

import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01', // Use today's date or your preferred version
  useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
  token: process.env.SANITY_API_TOKEN, // Only if you want to update content with the client
})

// Configuração do builder de imagens
const builder = imageUrlBuilder(client)

export function urlFor(source: { asset: { _ref: string } } | null) {
  if (!source?.asset?._ref) return null
  return builder.image(source)
}

// Tipos de conteúdo
export interface HeroContent {
  _id: string
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  backgroundImage?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
}

export interface Service {
  _id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface PortfolioItem {
  _id: string
  title: string
  description: string
  image?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  category: string
  client: string
  results: string[]
}

export interface Testimonial {
  _id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  rating: number
}

// Queries GROQ
export const heroQuery = `*[_type == "hero"][0] {
  _id,
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage
}`

export const servicesQuery = `*[_type == "service"] {
  _id,
  title,
  description,
  icon,
  features
}`

export const portfolioQuery = `*[_type == "portfolio"] {
  _id,
  title,
  description,
  image,
  category,
  client,
  results
}`

export const testimonialsQuery = `*[_type == "testimonial"] {
  _id,
  name,
  role,
  company,
  content,
  avatar,
  rating
}`

// Fallback data
export const fallbackData = {
  hero: {
    title: "Você ainda precisa ser o cérebro do seu próprio marketing?",
    subtitle: "Transformamos marcas com comunicação integrada e coesa — sem você carregar tudo nas costas.",
    ctaText: "Fale conosco",
    ctaLink: "#contato",
  },
  services: [
    {
      title: "Marketing Digital",
      description: "Estratégias completas para aumentar sua presença online",
      icon: "📱",
      features: ["SEO", "Google Ads", "Redes Sociais"]
    }
  ]
} 