"use client"

import { useHeroContent } from '@/hooks/useContent'
import Image from 'next/image'

export default function HeroSection() {
  const { content, loading } = useHeroContent()

  // Fallback content caso o CMS não esteja disponível
  const heroContent = content || {
    title: "Você ainda precisa ser o cérebro do seu próprio marketing?",
    subtitle: "Transformamos marcas com comunicação integrada e coesa — sem você carregar tudo nas costas.",
    ctaText: "Fale conosco",
    ctaLink: "#contato",
    backgroundImage: {
      url: "/images/hero-bg.jpg",
      alt: "Background hero"
    }
  }

  if (loading) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-[#010b40] via-[#0a0a0a] to-[#010b40] overflow-hidden flex items-center justify-center">
        <div className="container mx-auto px-8 relative z-10 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-16 bg-white/10 rounded-lg mb-8"></div>
              <div className="h-8 bg-white/10 rounded-lg mb-12 max-w-3xl mx-auto"></div>
              <div className="h-12 bg-[#f97316]/50 rounded-lg w-48 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#010b40] via-[#0a0a0a] to-[#010b40] overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#f97316]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Background Image from CMS */}
      {heroContent.backgroundImage?.url && (
        <div className="absolute inset-0">
          <Image 
            src={heroContent.backgroundImage.url} 
            alt={heroContent.backgroundImage.alt || "Background"}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
      )}

      {/* Dotted Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-8 relative z-10 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display text-white mb-8 leading-tight">
            {heroContent.title}
          </h1>
          
          <p className="text-body-large text-white/90 mb-12 max-w-3xl mx-auto">
            {heroContent.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={heroContent.ctaLink} 
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#f97316]/90 text-white text-button px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              {heroContent.ctaText}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decoração visual (opcional) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#010b40] to-transparent z-0"></div>
    </section>
  )
} 