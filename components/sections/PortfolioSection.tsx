'use client'

import React, { useState } from 'react'
import Link from 'next/link'

// Dados simplificados
const projects = [
  { id: 1, title: "Marketing Digital", number: "01", behanceUrl: "https://www.behance.net/gallery/marketing-digital" },
  { id: 2, title: "Design & Branding", number: "02", behanceUrl: "https://www.behance.net/gallery/design-branding" },
  { id: 3, title: "Inteligência Artificial", number: "03", behanceUrl: "https://www.behance.net/gallery/inteligencia-artificial" },
  { id: 4, title: "Web & Mobile", number: "04", behanceUrl: "https://www.behance.net/gallery/web-mobile" },
  { id: 5, title: "Email Marketing", number: "05", behanceUrl: "https://www.behance.net/gallery/email-marketing" }
]

export default function PortfolioSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="container mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="mb-12">
          <span className="inline-block text-[#f97316] font-poppins font-medium mb-2">
            NOSSO OLHAR E DESIGN
          </span>
          <h2 className="font-poppins text-4xl font-semibold text-gray-900 max-w-xl">
            Portfólio online
          </h2>
        </div>

        {/* Grid de Projetos - Desktop */}
        <div className="hidden md:flex gap-4 h-[500px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`flex-1 relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                expandedProject === project.id ? 'flex-[3]' : 'flex-1'
              }`}
              style={{
                backgroundColor: '#010b40'
              }}
              onMouseEnter={() => setExpandedProject(project.id)}
              onMouseLeave={() => setExpandedProject(null)}
            >
              {/* Número do projeto */}
              <div className="absolute top-6 right-6 bg-white w-12 h-12 rounded-full flex items-center justify-center z-20">
                <span className="font-poppins font-semibold text-gray-900">{project.number}</span>
              </div>
              
              {/* Título vertical quando não expandido */}
              {expandedProject !== project.id && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-poppins text-2xl font-semibold text-white transform -rotate-90">
                    {project.title}
                  </h3>
                </div>
              )}
              
              {/* Conteúdo expandido */}
              {expandedProject === project.id && (
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="font-poppins text-2xl font-semibold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="font-poppins text-white/80 mb-4 max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <Link 
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#f97316]/90 text-white font-poppins font-medium px-4 py-2 rounded-lg w-fit transition-colors"
                  >
                    Ver projeto
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              )}
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
                backgroundColor: '#010b40'
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
                <Link 
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#f97316]/90 text-white font-poppins font-medium px-4 py-2 rounded-lg w-fit text-sm transition-colors"
                >
                  Ver projeto
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}