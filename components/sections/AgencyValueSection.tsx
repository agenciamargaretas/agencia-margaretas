'use client'

import React from 'react'

// Dados dos valores
const values = [
  {
    id: 1,
    title: "Estratégia Personalizada",
    description: "Desenvolvemos estratégias únicas para cada cliente, considerando seus objetivos, público-alvo e mercado específico.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#010b40"
  },
  {
    id: 2,
    title: "Resultados Mensuráveis",
    description: "Trabalhamos com métricas claras e relatórios transparentes para que você acompanhe o retorno do seu investimento.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#f97316"
  },
  {
    id: 3,
    title: "Agilidade e Inovação",
    description: "Utilizamos metodologias ágeis e estamos sempre atualizados com as últimas tendências e tecnologias do mercado.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#010b40"
  },
  {
    id: 4,
    title: "Equipe Multidisciplinar",
    description: "Contamos com profissionais especializados em diferentes áreas do marketing digital, design e tecnologia.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#f97316"
  },
  {
    id: 5,
    title: "Comunicação Transparente",
    description: "Mantemos um diálogo aberto e constante, garantindo que você esteja sempre informado sobre o andamento dos projetos.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#010b40"
  },
  {
    id: 6,
    title: "Compromisso com Prazos",
    description: "Respeitamos os cronogramas estabelecidos e entregamos projetos dentro do prazo acordado, sem comprometer a qualidade.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8V12L15 15M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#f97316"
  }
]

export default function AgencyValueSection() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="container mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block text-[#f97316] font-poppins font-medium mb-2">
            POR QUE ESCOLHER A MARGARETAS
          </span>
          <h2 className="font-poppins text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Transformamos ideias em resultados reais
          </h2>
          <p className="font-poppins text-lg text-gray-600">
            Somos uma agência focada em entregar soluções criativas e estratégicas que impulsionam o crescimento do seu negócio no ambiente digital.
          </p>
        </div>

        {/* Grid de Valores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <div 
              key={value.id}
              className="bg-gray-50 rounded-xl p-8 shadow-sm"
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: value.color }}
              >
                {value.icon}
              </div>
              <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="font-poppins text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contato" 
            className="inline-flex items-center gap-2 bg-[#010b40] hover:bg-[#010b40]/90 text-white font-poppins font-medium px-8 py-4 rounded-lg transition-colors"
          >
            Vamos conversar sobre seu projeto
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 