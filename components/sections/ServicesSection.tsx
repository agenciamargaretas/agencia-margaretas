'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  MarketingIcon, 
  AIIcon, 
  SocialIcon, 
  AdsIcon, 
  BrandingIcon, 
  GrowthIcon 
} from '@/components/icons'

const services = [
  {
    icon: <MarketingIcon />,
    title: "Marketing Digital",
    description: "Estratégias personalizadas para aumentar sua presença online e gerar resultados reais."
  },
  {
    icon: <AIIcon />,
    title: "Inteligência Artificial",
    description: "Soluções inovadoras com IA para automatizar e otimizar seus processos."
  },
  {
    icon: <SocialIcon />,
    title: "Social Media",
    description: "Gestão profissional das suas redes sociais para engajar seu público-alvo."
  },
  {
    icon: <AdsIcon />,
    title: "Tráfego Pago",
    description: "Campanhas otimizadas para maximizar seu ROI e alcançar os clientes certos."
  },
  {
    icon: <BrandingIcon />,
    title: "Design & Branding",
    description: "Criação de identidade visual que comunica a essência da sua marca."
  },
  {
    icon: <GrowthIcon />,
    title: "Growth Marketing",
    description: "Estratégias de crescimento baseadas em dados e resultados mensuráveis."
  }
]

export default function ServicesSection() {
  return (
    <section className="bg-white py-24 px-8 lg:px-24 xl:px-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            O QUE FAZEMOS
          </h2>
          <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
            Transformamos negócios através de soluções digitais inovadoras e resultados mensuráveis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-gray-900 mb-4">
                {service.icon}
              </div>
              <h3 className="font-poppins text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="font-poppins text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 