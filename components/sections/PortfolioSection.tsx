'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Dados de exemplo para os projetos
const projects = [
  {
    id: 1,
    title: "Marketing Digital",
    category: "marketing",
    number: "01",
    description: "Estratégias personalizadas para aumentar sua presença online e gerar resultados reais."
  },
  {
    id: 2,
    title: "Design & Branding",
    category: "design",
    number: "02",
    description: "Criação de identidade visual que comunica a essência da sua marca."
  },
  {
    id: 3,
    title: "Inteligência Artificial",
    category: "ia",
    number: "03",
    description: "Soluções inovadoras com IA para automatizar e otimizar seus processos."
  },
  {
    id: 4,
    title: "Web & Mobile",
    category: "web",
    number: "04",
    description: "Desenvolvimento de sites e aplicativos responsivos e de alta performance."
  },
  {
    id: 5,
    title: "Email Marketing",
    category: "email",
    number: "05",
    description: "Campanhas de email marketing estratégicas para converter leads em clientes."
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
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

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
            <span className="inline-block text-accent font-poppins font-medium mb-2">
              NOSSOS PROJETOS
            </span>
            <h2 className="font-poppins text-4xl md:text-5xl font-semibold text-gray-900 max-w-xl">
              Use SEO para impulsionar o crescimento do seu negócio
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
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 transition-colors font-poppins font-semibold text-white px-8 py-4 rounded-lg"
            >
              EXPLORAR MAIS
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

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              {/* Card com fundo colorido */}
              <div className="relative h-96 w-full bg-indigo-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-indigo-700/40 group-hover:opacity-70 transition-opacity z-10"></div>
                
                {/* Número do projeto */}
                <div className="absolute top-6 right-6 bg-white w-12 h-12 rounded-full flex items-center justify-center z-20">
                  <span className="font-poppins font-semibold text-gray-900">{project.number}</span>
                </div>
                
                {/* Conteúdo */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="font-poppins text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="font-poppins text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                  <Link 
                    href={`/portfolio/${project.id}`}
                    className="inline-flex items-center gap-2 text-white font-poppins font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Saiba mais
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 