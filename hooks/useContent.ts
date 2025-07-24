"use client"

// hooks/useContent.ts
// Hooks personalizados para gerenciar conteúdo do Sanity CMS

import { useState, useEffect } from 'react'
import { client, fallbackData, type HeroContent, type Service, type PortfolioItem, type Testimonial, heroQuery, servicesQuery, portfolioQuery, testimonialsQuery, urlFor } from '@/lib/sanity'

export function useHeroContent() {
  const [content, setContent] = useState<HeroContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchContent() {
      try {
        setLoading(true)
        const data = await client.fetch(heroQuery)
        
        if (data) {
          setContent(data)
        } else {
          // Usar fallback se CMS não estiver disponível
          setContent(fallbackData.hero as HeroContent)
        }
      } catch (err) {
        console.error('Erro ao carregar hero content:', err)
        setError('Erro ao carregar conteúdo')
        setContent(fallbackData.hero as HeroContent)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [])

  return { content, loading, error }
}

export function useServices() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchServices() {
      try {
        setLoading(true)
        const data = await client.fetch(servicesQuery)
        
        if (data && data.length > 0) {
          setServices(data)
        } else {
          setServices(fallbackData.services as Service[])
        }
      } catch (err) {
        console.error('Erro ao carregar serviços:', err)
        setError('Erro ao carregar serviços')
        setServices(fallbackData.services as Service[])
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  return { services, loading, error }
}

export function usePortfolio() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPortfolio() {
      try {
        setLoading(true)
        const data = await client.fetch(portfolioQuery)
        setPortfolio(data || [])
      } catch (err) {
        console.error('Erro ao carregar portfolio:', err)
        setError('Erro ao carregar portfolio')
        setPortfolio([])
      } finally {
        setLoading(false)
      }
    }

    fetchPortfolio()
  }, [])

  return { portfolio, loading, error }
}

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        setLoading(true)
        const data = await client.fetch(testimonialsQuery)
        setTestimonials(data || [])
      } catch (err) {
        console.error('Erro ao carregar depoimentos:', err)
        setError('Erro ao carregar depoimentos')
        setTestimonials([])
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  return { testimonials, loading, error }
}

// Hook para revalidar conteúdo (ISR)
export function useRevalidate() {
  const [revalidating, setRevalidating] = useState(false)

  const revalidate = async () => {
    try {
      setRevalidating(true)
      
      // Revalidar todas as páginas
      await fetch('/api/revalidate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ secret: process.env.REVALIDATION_TOKEN }),
      })

      // Recarregar a página
      window.location.reload()
    } catch (error) {
      console.error('Erro ao revalidar:', error)
    } finally {
      setRevalidating(false)
    }
  }

  return { revalidate, revalidating }
}

// Hook utilitário para imagens do Sanity
export function useSanityImage(image: any) {
  if (!image?.asset?._ref) return null
  
  const url = urlFor(image)
  return url ? url.url() : null
} 