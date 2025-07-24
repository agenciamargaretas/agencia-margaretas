'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  challenge: string
  services: string[]
  portfolioUrl: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "E-commerce Premium",
    category: "E-commerce",
    image: "/api/placeholder/400/300",
    challenge: "Transformar uma loja física tradicional em uma plataforma digital de alto desempenho, aumentando as vendas em 300% e melhorando a experiência do cliente.",
    services: ["Branding Completo", "Website Responsivo", "Marketing Digital", "SEO Otimizado"],
    portfolioUrl: "/portfolio/ecommerce-premium"
  },
  {
    id: 2,
    title: "App de Delivery",
    category: "Mobile App",
    image: "/api/placeholder/400/300",
    challenge: "Desenvolver um aplicativo de delivery que conecta restaurantes locais com clientes, resolvendo problemas de logística e pagamento.",
    services: ["UX/UI Design", "Desenvolvimento Mobile", "Sistema de Pagamento", "Marketing de Lançamento"],
    portfolioUrl: "/portfolio/app-delivery"
  },
  {
    id: 3,
    title: "Consultoria Financeira",
    category: "Consultoria",
    image: "/api/placeholder/400/300",
    challenge: "Reposicionar uma consultoria financeira no mercado digital, criando autoridade e gerando leads qualificados através de conteúdo estratégico.",
    services: ["Reposicionamento de Marca", "Content Marketing", "LinkedIn Ads", "Automação de Marketing"],
    portfolioUrl: "/portfolio/consultoria-financeira"
  }
]

export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#010b40] to-[#0a0a0a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1 text-white mb-6">
            Nossos Projetos
          </h2>
          <p className="text-body-large text-white/80 max-w-3xl mx-auto">
            Transformamos ideias em resultados reais. Conheça alguns dos nossos projetos que geraram impacto significativo para nossos clientes.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#f97316]/50 transition-all duration-300 hover:scale-105">
                {/* Image Placeholder */}
                <div className="h-64 bg-gradient-to-br from-[#f97316]/20 to-[#f97316]/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#f97316]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.828 14.828A4 4 0 0 1 12 16a4 4 0 0 1-2.828-1.172M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-white/60 text-sm">Clique para ver detalhes</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <span className="text-caption text-[#f97316] font-medium">{item.category}</span>
                  <h3 className="text-h4 text-white mt-2 mb-3">{item.title}</h3>
                  <div className="flex items-center text-white/60 text-sm">
                    <span>Clique para ver mais</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a 
            href="/portfolio" 
            className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#f97316]/90 text-white text-button px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Ver Portfólio Completo
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#010b40] border border-white/10 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                <div>
                  <span className="text-caption text-[#f97316] font-medium">{selectedItem.category}</span>
                  <h3 className="text-h2 text-white mt-2">{selectedItem.title}</h3>
                </div>

                {/* Challenge */}
                <div>
                  <h4 className="text-h4 text-white mb-3">Desafio do Projeto</h4>
                  <p className="text-body text-white/80 leading-relaxed">{selectedItem.challenge}</p>
                </div>

                {/* Services */}
                <div>
                  <h4 className="text-h4 text-white mb-3">O que foi feito no projeto</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedItem.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                        <div className="w-2 h-2 bg-[#f97316] rounded-full"></div>
                        <span className="text-body text-white/80">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a 
                    href={selectedItem.portfolioUrl}
                    className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#f97316]/90 text-white text-button px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Ver Portfólio Completo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}