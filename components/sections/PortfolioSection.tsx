'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

// Dados de exemplo para os projetos
const projects = [
  {
    id: 1,
    title: "Marketing Digital",
    category: "marketing",
    number: "01",
    color: "from-blue-600 to-blue-800",
    description: "Estratégias personalizadas para aumentar sua presença online e gerar resultados reais com foco em conversão."
  },
  {
    id: 2,
    title: "Design & Branding",
    category: "design",
    number: "02",
    color: "from-orange-500 to-orange-700",
    description: "Criação de identidade visual que comunica a essência da sua marca e conecta com seu público-alvo."
  },
  {
    id: 3,
    title: "Inteligência Artificial",
    category: "ia",
    number: "03",
    color: "from-blue-500 to-blue-700",
    description: "Soluções inovadoras com IA para automatizar e otimizar seus processos, aumentando eficiência e reduzindo custos."
  },
  {
    id: 4,
    title: "Web & Mobile",
    category: "web",
    number: "04",
    color: "from-orange-400 to-orange-600",
    description: "Desenvolvimento de sites e aplicativos responsivos e de alta performance que convertem visitantes em clientes."
  },
  {
    id: 5,
    title: "Email Marketing",
    category: "email",
    number: "05",
    color: "from-blue-600 to-blue-800",
    description: "Campanhas de email marketing estratégicas para nutrir leads e convertê-los em clientes fiéis à sua marca."
  }
]

// Categorias para filtros
const categories = [
  { id: "all", name: "Todos" },
  { id: "marketing", name: "Marketing" },
  { id: "design", name: "Design" },
  { id: "ia", name: "IA" },
  { id: "web", name: "Web" },
  { id: "email", name: "Email" }
]

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const handleProjectHover = (id: number | null) => {
    setExpandedProject(id)
  }

  const handleProjectClick = (id: number) => {
    setSelectedProject(id)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <section className="py-24 px-8 lg:px-24 xl:px-32 bg-gray-50">
      <div className="container mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-blue-600 font-poppins font-medium mb-2">
              NOSSOS PROJETOS
            </span>
            <h2 className="font-poppins text-4xl md:text-5xl font-semibold text-gray-900 max-w-xl">
              Portfólio online
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <Link 
              href="https://www.behance.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors font-poppins font-semibold text-white px-8 py-4 rounded-lg"
            >
              PORTFÓLIO BEHANCE
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-poppins font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-accent text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de Projetos - Desktop */}
        <div className="hidden md:flex flex-col gap-4">
          {/* Primeira linha - projeto horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden h-64 w-full cursor-pointer"
            style={{
              background: `linear-gradient(to right, #1e40af, #3b82f6)`,
            }}
            onMouseEnter={() => handleProjectHover(projects[0].id)}
            onMouseLeave={() => handleProjectHover(null)}
            onClick={() => handleProjectClick(projects[0].id)}
          >
            {/* Número do projeto */}
            <div className="absolute top-6 right-6 bg-white w-12 h-12 rounded-full flex items-center justify-center z-20">
              <span className="font-poppins font-semibold text-gray-900">{projects[0].number}</span>
            </div>
            
            {/* Conteúdo */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="font-poppins text-3xl font-semibold text-white mb-2">
                {projects[0].title}
              </h3>
              <p className={`font-poppins text-white/90 mb-4 max-w-md transition-opacity duration-500 ${
                expandedProject === projects[0].id ? 'opacity-100' : 'opacity-0'
              }`}>
                {projects[0].description}
              </p>
              <button className={`inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-poppins font-medium px-6 py-3 rounded-lg w-fit transition-all duration-500 ${
                expandedProject === projects[0].id ? 'opacity-100' : 'opacity-0'
              }`}>
                Ver projeto
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </motion.div>
          
          {/* Linha do meio - 3 projetos verticais */}
          <div className="flex gap-4 h-[500px]">
            {projects.slice(1, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${
                  expandedProject === project.id 
                    ? 'flex-grow-[8]' 
                    : 'flex-grow'
                }`}
                style={{
                  background: `linear-gradient(to bottom, ${index % 2 === 0 ? '#1e40af, #3b82f6' : '#f97316, #ea580c'})`,
                }}
                onMouseEnter={() => handleProjectHover(project.id)}
                onMouseLeave={() => handleProjectHover(null)}
                onClick={() => handleProjectClick(project.id)}
              >
                {/* Número do projeto */}
                <div className="absolute top-6 right-6 bg-white w-12 h-12 rounded-full flex items-center justify-center z-20">
                  <span className="font-poppins font-semibold text-gray-900">{project.number}</span>
                </div>
                
                {/* Título verticalizado (quando não expandido) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                  expandedProject === project.id ? 'opacity-0' : 'opacity-100'
                }`}>
                  <h3 className="font-poppins text-2xl font-semibold text-white transform -rotate-90 whitespace-nowrap">
                    {project.title}
                  </h3>
                </div>
                
                {/* Conteúdo expandido */}
                <div className={`absolute inset-0 p-8 flex flex-col justify-end transition-opacity duration-500 ${
                  expandedProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h3 className="font-poppins text-3xl font-semibold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="font-poppins text-white/90 mb-6 max-w-md">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-poppins font-medium px-6 py-3 rounded-lg w-fit transition-colors">
                    Ver projeto
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Última linha - projeto horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden h-64 w-full cursor-pointer"
            style={{
              background: `linear-gradient(to right, #f97316, #ea580c)`,
            }}
            onMouseEnter={() => handleProjectHover(projects[4].id)}
            onMouseLeave={() => handleProjectHover(null)}
            onClick={() => handleProjectClick(projects[4].id)}
          >
            {/* Número do projeto */}
            <div className="absolute top-6 right-6 bg-white w-12 h-12 rounded-full flex items-center justify-center z-20">
              <span className="font-poppins font-semibold text-gray-900">{projects[4].number}</span>
            </div>
            
            {/* Conteúdo */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="font-poppins text-3xl font-semibold text-white mb-2">
                {projects[4].title}
              </h3>
              <p className={`font-poppins text-white/90 mb-4 max-w-md transition-opacity duration-500 ${
                expandedProject === projects[4].id ? 'opacity-100' : 'opacity-0'
              }`}>
                {projects[4].description}
              </p>
              <button className={`inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-poppins font-medium px-6 py-3 rounded-lg w-fit transition-all duration-500 ${
                expandedProject === projects[4].id ? 'opacity-100' : 'opacity-0'
              }`}>
                Ver projeto
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Grid de Projetos - Mobile */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden h-64"
              style={{
                background: `linear-gradient(to bottom, ${index % 2 === 0 ? '#1e40af, #3b82f6' : '#f97316, #ea580c'})`,
              }}
              onClick={() => handleProjectClick(project.id)}
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
                <p className="font-poppins text-white/90 mb-4 text-sm">
                  {project.description}
                </p>
                <button className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-poppins font-medium px-4 py-2 rounded-lg w-fit text-sm transition-colors">
                  Ver projeto
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de Projeto */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-poppins text-2xl md:text-3xl font-semibold text-gray-900">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h2>
                  <button 
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                <div className="h-64 md:h-80 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  <p className="text-gray-500">Imagens do projeto {selectedProject}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-2">Sobre o projeto</h3>
                  <p className="font-poppins text-gray-600">
                    {projects.find(p => p.id === selectedProject)?.description}
                    {' '}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-poppins font-medium px-6 py-3 rounded-lg transition-colors">
                    Ver projeto completo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 