// lib/cms.ts
// Configuração do cliente CMS para integração com Strapi

export interface HeroContent {
  id: number
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  backgroundImage: {
    url: string
    alt: string
  }
  updatedAt: string
}

export interface Service {
  id: number
  title: string
  description: string
  icon: string
  features: string[]
  updatedAt: string
}

export interface PortfolioItem {
  id: number
  title: string
  description: string
  image: {
    url: string
    alt: string
  }
  category: string
  client: string
  results: string[]
  updatedAt: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar: {
    url: string
    alt: string
  }
  rating: number
  updatedAt: string
}

// Cliente CMS (será configurado quando o Strapi estiver rodando)
class CMSClient {
  private baseUrl: string
  private apiToken: string

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
    this.apiToken = process.env.STRAPI_API_TOKEN || ''
  }

  private async fetch(endpoint: string) {
    try {
      const response = await fetch(`${this.baseUrl}/api${endpoint}`, {
        headers: {
          'Authorization': `Bearer ${this.apiToken}`,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 60 }, // Cache por 1 minuto
      })

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`)
      }

      return response.json()
    } catch (error) {
      console.error('Erro ao buscar dados do CMS:', error)
      return null
    }
  }

  async getHeroContent(): Promise<HeroContent | null> {
    const data = await this.fetch('/hero-content?populate=*')
    return data?.data?.[0]?.attributes || null
  }

  async getServices(): Promise<Service[]> {
    const data = await this.fetch('/services?populate=*')
    return data?.data?.map((item: { attributes: Service }) => item.attributes) || []
  }

  async getPortfolio(): Promise<PortfolioItem[]> {
    const data = await this.fetch('/portfolio-items?populate=*')
    return data?.data?.map((item: { attributes: PortfolioItem }) => item.attributes) || []
  }

  async getTestimonials(): Promise<Testimonial[]> {
    const data = await this.fetch('/testimonials?populate=*')
    return data?.data?.map((item: { attributes: Testimonial }) => item.attributes) || []
  }
}

export const cmsClient = new CMSClient()

// Fallback data para quando o CMS não estiver disponível
export const fallbackData = {
  hero: {
    title: "Transformamos sua presença digital",
    subtitle: "Soluções completas de marketing digital para empresas que querem crescer",
    ctaText: "Fale Conosco",
    ctaLink: "/contato",
    backgroundImage: {
      url: "/images/hero-bg.jpg",
      alt: "Background hero"
    }
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