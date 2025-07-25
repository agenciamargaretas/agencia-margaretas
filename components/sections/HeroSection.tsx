"use client"

import React from 'react'
import Image from 'next/image'

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

interface HeroSectionProps {
  heroData?: HeroData
}

export default function HeroSection({ heroData }: HeroSectionProps) {
  // Fallback para dados estáticos caso não receba dados do Sanity
  const heroContent = heroData || {
    title: "Você ainda precisa ser o cérebro do seu próprio marketing?",
    subtitle: "Transformamos marcas com comunicação integrada e coesa — sem você carregar tudo nas costas.",
    ctaText: "Fale conosco",
    ctaLink: "#contato",
  }

  // URL da imagem de fundo (Sanity ou fallback)
  const backgroundImageUrl = typeof heroContent.backgroundImage === 'string' 
    ? heroContent.backgroundImage 
    : heroContent.backgroundImage?.asset?.url || "/images/hero-bg.jpg"

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#010b40] via-[#0a0a0a] to-[#010b40] overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#f97316]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImageUrl}
          alt="Background hero"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Dotted Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {heroContent.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          {heroContent.subtitle}
        </p>
        <a
          href={heroContent.ctaLink}
          className="inline-block bg-[#f97316] hover:bg-[#f97316]/90 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300"
        >
          {heroContent.ctaText}
        </a>
      </div>
      
      {/* Decoração visual (opcional) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#010b40] to-transparent z-0"></div>
    </section>
  )
} 