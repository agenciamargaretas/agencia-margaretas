'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  EyeIcon,
  UserGroupIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  CogIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 0,
      title: "Branding",
      subtitle: "Marca não é só cores e aparência, é direção.",
      description: "Na Margaretas, a construção da marca nasce de dentro pra fora: nome, identidade visual, tom de voz, arquétipos, essência, genética, posicionamento. Tudo pensado para que a sua comunicação tenha alma, coerência e reconhecimento real.",
      highlight: "Branding com visão, método e verdade.",
      cta: "Quero construir minha marca",
      icon: EyeIcon
    },
    {
      id: 1,
      title: "Gestão de Redes Sociais – Pacotes Personalizados",
      subtitle: "Criamos conteúdo com propósito, copy inteligente e estética estratégica alinhada a sua persona, arquétipos e o seu branding, para canais como Instagram, TikTok, Google Meu Negócio, Pinterest e outros.",
      description: "Cada rede com sua função. Cada publicação com um porquê.",
      highlight: "Conteúdo com propósito. Resultado com estratégia.",
      cta: "Quero pacote de redes sociais",
      icon: UserGroupIcon
    },
    {
      id: 2,
      title: "Criação de Sites",
      subtitle: "Seu site precisa representar quem sua marca e conectar com todos os outros canais com clareza, confiança e técnicas UX de alta conversão.",
      description: "Desenvolvemos páginas institucionais, landings e sites completos com design funcional, copy estratégica e arquitetura intuitiva.",
      highlight: "Um site com cara de marca grande — mesmo que você ainda esteja crescendo.",
      cta: "Quero um site estratégico",
      icon: GlobeAltIcon
    },
    {
      id: 3,
      title: "Performance e Tráfego Pago",
      subtitle: "Você não precisa aparecer mais. Precisa aparecer melhor.",
      description: "Planejamos e gerenciamos campanhas em Meta Ads, Google, TikTok, Pinterest com estratégia conectada à sua comunicação e ao seu momento de negócio.",
      highlight: "Tráfego com direção. Performance com propósito.",
      cta: "Quero escalar com tráfego",
      icon: RocketLaunchIcon
    },
    {
      id: 4,
      title: "Consultoria de Marketing",
      subtitle: "Às vezes, o que falta não é produção, é clareza.",
      description: "Nossas consultorias são pensadas para ajustar o que está fora de lugar e revelar caminhos possíveis. Você traz as dúvidas, a gente entrega estrutura, estratégia e decisão.",
      highlight: "Inteligência estratégica sob demanda.",
      cta: "Quero uma consultoria com a Margaretas",
      icon: LightBulbIcon
    },
    {
      id: 5,
      title: "Soluções Personalizadas (para estruturas diferentes)",
      subtitle: "Cada empresa tem uma configuração interna, algumas sem time, outras com equipe enxuta ou com estrutura robusta.",
      description: "Independente do seu cenário, a Margaretas entra para alinhar, conectar e liderar a comunicação do jeito que o seu negócio precisa.",
      highlight: "Soluções que se adaptam ao seu cenário.",
      cta: "Quero uma solução feita pra minha empresa",
      icon: CogIcon
    }
  ]

  const currentService = services[activeService]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#010b40] via-[#0a0a0a] to-[#010b40] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#f97316]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Dotted Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-8 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-h1 text-white mb-8">
              Nossas
              <span className="block text-[#f97316]">Soluções</span>
            </h2>
            <div className="w-32 h-1 bg-[#f97316] mx-auto"></div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveService(service.id)}
                className={`px-6 py-3 rounded-full text-button transition-all duration-300 ${
                  activeService === service.id
                    ? 'bg-[#f97316] text-white shadow-md shadow-[#f97316]/30'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                {index + 1}
              </motion.button>
            ))}
          </div>

          {/* Service Content */}
          <motion.div
            key={activeService}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10"
          >
            <div className="text-center">
              {/* Service Header */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center gap-4 mb-6"
              >
                <div className="w-16 h-16 bg-[#f97316] rounded-xl flex items-center justify-center flex-shrink-0">
                  <currentService.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-h3 text-white leading-tight">
                  {currentService.title}
                </h3>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-h4 text-[#f97316] mb-6"
              >
                {currentService.subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-body text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto"
              >
                {currentService.description}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex justify-center"
              >
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  href="/servicos"
                  className="inline-flex items-center justify-center gap-3 bg-[#f97316] text-white text-button px-8 py-4 rounded-lg hover:bg-[#f97316]/90 transition-all duration-300 transform hover:scale-105 shadow-md shadow-[#f97316]/30"
                >
                  {currentService.cta}
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 