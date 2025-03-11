'use client'

import React from 'react'
import Link from 'next/link'

// Dados simplificados
const projects = [
  { id: 1, title: "Marketing Digital", number: "01" },
  { id: 2, title: "Design & Branding", number: "02" },
  { id: 3, title: "Inteligência Artificial", number: "03" },
  { id: 4, title: "Web & Mobile", number: "04" },
  { id: 5, title: "Email Marketing", number: "05" }
]

export default function PortfolioSection() {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="container mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <span className="inline-block text-[#f97316] font-poppins font-medium mb-2">
              NOSSOS PROJETOS
            </span>
            <h2 className="font-poppins text-4xl font-semibold text-gray-900 max-w-xl">
              Portfólio online
            </h2>
          </div>
          
          <div className="mt-6 md:mt-0">
            <Link 
              href="https://www.behance.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#f97316]/90 transition-colors font-poppins font-semibold text-white px-8 py-4 rounded-lg"
            >
              PORTFÓLIO BEHANCE
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Grid de Projetos - Desktop */}
        <div className="hidden md:flex gap-4 h-[500px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-1 relative rounded-xl overflow-hidden cursor-pointer"
              style={{
                background: 'linear-gradient(to bottom, #00052B, #000000)'
              }}
            >
              {/* Número do projeto */}
              <div className="absolute top-6 right-6 bg-white w-12 h-12 rounded-full flex items-center justify-center z-20">
                <span className="font-poppins font-semibold text-gray-900">{project.number}</span>
              </div>
              
              {/* Título vertical */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-poppins text-2xl font-semibold text-white transform -rotate-90">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Grid de Projetos - Mobile */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative rounded-xl overflow-hidden h-64"
              style={{
                background: 'linear-gradient(to bottom, #00052B, #000000)'
              }}
            >
              {/* Número do projeto */}
              <div className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center z-20">
                <span className="font-poppins font-semibold text-gray-900">{project.number}</span>
              </div>
              
              {/* Conteúdo */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-poppins text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <button className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#f97316]/90 text-white font-poppins font-medium px-4 py-2 rounded-lg w-fit text-sm transition-colors">
                  Ver projeto
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}