'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ClientsSection() {
  // Array de logos dos clientes (baseado no site da Agência Margaretas)
  const clients = [
    {
      id: 1,
      name: "Empresa A",
      logo: "/logos/cliente1.svg"
    },
    {
      id: 2,
      name: "Empresa B", 
      logo: "/logos/cliente2.svg"
    },
    {
      id: 3,
      name: "Empresa C",
      logo: "/logos/cliente3.svg"
    },
    {
      id: 4,
      name: "Empresa D",
      logo: "/logos/cliente4.svg"
    },
    {
      id: 5,
      name: "Empresa E",
      logo: "/logos/cliente5.svg"
    },
    {
      id: 6,
      name: "Empresa F",
      logo: "/logos/cliente6.svg"
    },
    {
      id: 7,
      name: "Empresa G",
      logo: "/logos/cliente7.svg"
    },
    {
      id: 8,
      name: "Empresa H",
      logo: "/logos/cliente8.svg"
    }
  ]

  // Duplicar o array para criar o efeito infinito
  const duplicatedClients = [...clients, ...clients, ...clients]

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-h2 text-[#010b40] mb-4">
            Nossos Clientes
          </h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Empresas que confiam na Margaretas para transformar suas marcas e impulsionar resultados
          </p>
        </motion.div>

        {/* Carrossel de Logos */}
        <div className="relative">
          {/* Gradientes nas laterais para suavizar as bordas */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Container do carrossel */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center gap-16"
              animate={{
                x: [0, -100 * clients.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear"
                }
              }}
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.1))"
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-32 h-16 md:w-40 md:h-20 bg-gray-100 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-200">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="w-auto h-8 md:h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Estatísticas */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-h2 text-[#f97316] mb-2">
              200+
            </div>
            <div className="text-body-small text-gray-600">
              Clientes Atendidos
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-h2 text-[#f97316] mb-2">
              15+
            </div>
            <div className="text-body-small text-gray-600">
              Anos de Experiência
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-h2 text-[#f97316] mb-2">
              98%
            </div>
            <div className="text-body-small text-gray-600">
              Satisfação dos Clientes
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 