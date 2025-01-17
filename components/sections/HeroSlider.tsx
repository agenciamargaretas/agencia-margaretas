'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'

const slides = [
  {
    title: "Marketing Digital Estratégico",
    description: "Aumente sua presença online com estratégias personalizadas",
    cta: "Comece Agora",
    bgColor: "from-primary to-secondary"
  },
  {
    title: "Inteligência Artificial para Negócios",
    description: "Automatize processos e potencialize resultados",
    cta: "Saiba Mais",
    bgColor: "from-secondary to-accent"
  },
  {
    title: "Gestão de Redes Sociais",
    description: "Engaje seu público e construa sua marca",
    cta: "Conheça Nossos Planos",
    bgColor: "from-accent to-primary"
  },
  {
    title: "Tráfego Pago Otimizado",
    description: "Maximize seu ROI com campanhas estratégicas",
    cta: "Ver Resultados",
    bgColor: "from-primary to-accent"
  },
  {
    title: "Branding Estratégico",
    description: "Construa uma marca memorável e impactante",
    cta: "Desenvolva Sua Marca",
    bgColor: "from-secondary to-primary"
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor} flex items-center justify-center`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              {slide.title}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8"
            >
              {slide.description}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                color="warning"
                variant="shadow"
                className="font-semibold"
              >
                {slide.cta}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      ))}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-accent' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
} 