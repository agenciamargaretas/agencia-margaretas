'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSlider() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Container para o parallax (preparado para a imagem futura) */}
      <div className="absolute inset-0 bg-background/80" />

      {/* Conteúdo */}
      <div className="relative h-full container mx-auto px-8 lg:px-24 xl:px-32">
        <div className="h-full flex flex-col justify-center max-w-5xl">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-display mb-8 tracking-wider"
          >
            <span className="block mb-4">UMA AGÊNCIA</span>
            <span className="block mb-4">PARA QUEM ODEIA</span>
            <span className="block">AGÊNCIAS</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-large text-foreground/90 mb-10 tracking-wide mt-8"
          >
            Marketing digital estratégico e soluções personalizadas para impulsionar seu negócio no ambiente online.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              href="/contato"
              className="inline-block bg-accent hover:bg-accent/90 transition-colors text-button text-background tracking-wider py-4 px-8 rounded-lg"
            >
              QUERO CONHECER
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 