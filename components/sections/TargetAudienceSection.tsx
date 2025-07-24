'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { 
  UserIcon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

export default function TargetAudienceSection() {
  const [activeAudience, setActiveAudience] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener('mousemove', handleMouseMove)
      return () => section.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const targetAudience = [
    {
      id: 0,
      icon: UserIcon,
      title: "Empreendedores e lideranças",
      subtitle: "Para quem precisa de visão, mas não tem tempo de ser o marketing da própria empresa.",
      description: "Você lidera o negócio — mas ainda precisa acompanhar briefing, revisar arte, entender tráfego e pensar em conteúdo.\n\nA gente entra como cérebro estratégico da comunicação pra você liderar sem sobrecarga.",
      cta: "Quero sair do operacional e ter clareza estratégica"
    },
    {
      id: 1,
      icon: ChartBarIcon,
      title: "Empresas em expansão",
      subtitle: "Seu negócio está crescendo — e o marketing precisa acompanhar esse novo momento.",
      description: "Você já tem operação, vendas, talvez até tráfego… mas falta conexão entre tudo.\n\nCom o Método EYE, sua comunicação vira sistema: coesa, integrada e feita pra escalar com consistência.",
      cta: "Quero estruturar o marketing para crescer com base"
    },
    {
      id: 2,
      icon: GlobeAltIcon,
      title: "Negócios que buscam consolidar",
      subtitle: "Sua marca já tem presença. Agora é hora de virar referência.",
      description: "Você sente que o que falta não é esforço — é direção.\n\nA gente ajuda a organizar, padronizar e posicionar sua marca com autoridade real, em todos os canais.",
      cta: "Quero consolidar minha marca com estratégia"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 px-8 bg-gradient-to-br from-[#010b40] via-[#0a0a0a] to-[#010b40] overflow-hidden"
    >
      {/* Efeitos visuais de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#f97316]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Fundo pontilhado */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Efeito de mouse tracking */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-[#010b40]/30 to-[#f97316]/20 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transform: 'translate(0, 0)'
        }}
      ></div>

      <div className="relative z-10 container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-h1 text-white mb-6">
              Para quem é
            </h2>
            <div className="w-24 h-1 bg-[#f97316] mx-auto"></div>
          </motion.div>

          {/* Navegação por botões */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {targetAudience.map((audience, index) => (
              <motion.button
                key={audience.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveAudience(audience.id)}
                className={`px-8 py-4 rounded-full text-button transition-all duration-300 ${
                  activeAudience === audience.id
                    ? 'bg-[#f97316] text-white shadow-md shadow-[#f97316]/30'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                {audience.title}
              </motion.button>
            ))}
          </div>

          {/* Conteúdo do público-alvo ativo */}
          <motion.div
            key={activeAudience}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10 shadow-lg"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-24 h-24 bg-[#f97316] rounded-full flex items-center justify-center mx-auto mb-8"
              >
                {(() => {
                  const IconComponent = targetAudience[activeAudience].icon
                  return <IconComponent className="w-12 h-12 text-white" />
                })()}
              </motion.div>

              <motion.h3 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-h2 text-white mb-4"
              >
                {targetAudience[activeAudience].title}
              </motion.h3>

              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-h4 text-[#f97316] mb-8 max-w-2xl mx-auto"
              >
                {targetAudience[activeAudience].subtitle}
              </motion.p>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-body text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 whitespace-pre-line"
              >
                {targetAudience[activeAudience].description}
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8"
              >
                <a 
                  href="#diagnostico" 
                  className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#f97316]/90 text-white text-button px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  {targetAudience[activeAudience].cta}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 