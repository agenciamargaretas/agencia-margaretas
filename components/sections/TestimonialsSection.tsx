'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Silva",
    role: "CEO",
    company: "TechStart",
    avatar: "/api/placeholder/80/80",
    content: "A Margaretas transformou completamente nossa presença digital. Em apenas 3 meses, aumentamos nossas vendas em 250% e nossa marca ganhou reconhecimento no mercado. Profissionais incríveis!",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Diretor de Marketing",
    company: "E-commerce Plus",
    avatar: "/api/placeholder/80/80",
    content: "Trabalhar com a Margaretas foi uma experiência excepcional. Eles não apenas entregaram resultados, mas superaram todas as expectativas. Nossa conversão aumentou 180%!",
    rating: 5
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Fundadora",
    company: "Consultoria Premium",
    avatar: "/api/placeholder/80/80",
    content: "A equipe da Margaretas é simplesmente incrível! Eles entenderam nossa necessidade desde o primeiro contato e entregaram uma estratégia que revolucionou nosso negócio.",
    rating: 5
  },
  {
    id: 4,
    name: "Roberto Santos",
    role: "Diretor Comercial",
    company: "Restaurante Gourmet",
    avatar: "/api/placeholder/80/80",
    content: "Graças à Margaretas, nosso restaurante está sempre lotado! A estratégia de marketing local que eles criaram foi perfeita para nosso público-alvo.",
    rating: 5
  },
  {
    id: 5,
    name: "Fernanda Lima",
    role: "CEO",
    company: "Clínica Estética",
    avatar: "/api/placeholder/80/80",
    content: "A Margaretas não só melhorou nossa presença digital, mas também nos ajudou a posicionar nossa marca como premium. Resultados impressionantes!",
    rating: 5
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#010b40]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1 text-[#010b40] mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-body-large text-[#010b40]/70 max-w-3xl mx-auto">
            Resultados reais de clientes reais. Veja como transformamos negócios e geramos impacto significativo.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 bg-[#010b40]/10 backdrop-blur-sm rounded-full flex items-center justify-center text-[#010b40] hover:bg-[#f97316] hover:text-white transition-all duration-300 group"
            aria-label="Depoimento anterior"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 bg-[#010b40]/10 backdrop-blur-sm rounded-full flex items-center justify-center text-[#010b40] hover:bg-[#f97316] hover:text-white transition-all duration-300 group"
            aria-label="Próximo depoimento"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Testimonial Content */}
          <div className="relative h-96 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center max-w-3xl"
              >
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#f97316]">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-8">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#f97316]/30 mx-auto mb-4">
                    <path d="M14.017 21V13a4.984 4.984 0 1 1 9.631-1.843A7.502 7.502 0 0 1 19.5 21h-5.483Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.017 21V13a4.984 4.984 0 1 1 9.631-1.843A7.502 7.502 0 0 1 6.5 21H1.017Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-body-large text-[#010b40]/80 leading-relaxed italic">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f97316]/20 to-[#f97316]/5 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#f97316]/30 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="text-h4 text-[#010b40] font-semibold">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-body text-[#010b40]/60">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#f97316] scale-125' 
                    : 'bg-[#010b40]/30 hover:bg-[#010b40]/50'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#contato" 
            className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#f97316]/90 text-white text-button px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Quero resultados como esses
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 