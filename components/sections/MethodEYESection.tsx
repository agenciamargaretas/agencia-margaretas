'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  EyeIcon,
  UserIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  CheckCircleIcon,
  LightBulbIcon,
  CogIcon
} from '@heroicons/react/24/outline'

export default function MethodEYESection() {
  const [isHovered, setIsHovered] = useState<number | null>(null)

  const methodSteps = [
    {
      id: 0,
      letter: "E",
      title: "Enxergar",
      description: "A primeira coisa que fazemos é olhar profundamente para o seu negócio. Sem filtros, sem achismos. Um diagnóstico real, baseado na escuta, nos dados e no comportamento da marca.",
      icon: EyeIcon
    },
    {
      id: 1,
      letter: "Y",
      title: "You (Você)",
      description: "A marca é construída com você, não para você. O posicionamento, o conteúdo e a comunicação são criados em parceria — a Margaretas entra como cérebro estratégico, mas sem perder a essência do que você é.",
      icon: UserIcon
    },
    {
      id: 2,
      letter: "E",
      title: "Executar com Excelência",
      description: "Não adianta só pensar. A gente executa. Com consistência, padronização e intenção. Seja conteúdo, tráfego ou branding — cada ação tem propósito e direção.",
      icon: RocketLaunchIcon
    }
  ]

  const stats = [
    { number: "15+", label: "Anos de experiência" },
    { number: "120+", label: "Empresas atendidas" },
    { number: "100%", label: "Metodologia validada" }
  ]

  const benefits = [
    {
      icon: CheckCircleIcon,
      text: "Padroniza e integra a comunicação de ponta a ponta"
    },
    {
      icon: LightBulbIcon,
      text: "Elimina ruídos e acelera resultados reais"
    },
    {
      icon: CogIcon,
      text: "Torna sua marca inegavelmente reconhecida"
    }
  ]

  return (
    <>
      {/* Seção Principal - Fundo Escuro */}
      <section className="relative py-24 px-8 bg-gradient-to-br from-[#010b40] via-[#0a0a0a] to-[#010b40] overflow-hidden">
        {/* Efeitos visuais de fundo simplificados */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f97316]/3 rounded-full blur-3xl"></div>
        </div>

        {/* Fundo pontilhado sutil */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto">
          <div className="max-w-7xl mx-auto">
            {/* Cabeçalho Principal */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-h1 text-white mb-4 leading-tight"
              >
                Método E.Y.E.
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-h4 text-[#f97316] mb-6"
              >
                A visão estratégica que sua marca precisava
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-24 h-1 bg-[#f97316] mx-auto"
              ></motion.div>
            </motion.div>

            {/* Estatísticas */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="text-center bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
                >
                  <div className="text-h2 text-[#f97316] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-body-small text-white/80">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tabela do Método E.Y.E. */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {methodSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    onMouseEnter={() => setIsHovered(step.id)}
                    onMouseLeave={() => setIsHovered(null)}
                    className={`relative group cursor-pointer transition-all duration-300 ${
                      isHovered === step.id ? 'scale-105' : 'scale-100'
                    }`}
                  >
                    <div className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 h-full transition-all duration-300 ${
                      isHovered === step.id ? 'bg-[#f97316]/20 border-[#f97316]/30 shadow-lg' : 'hover:bg-white/10'
                    }`}>
                      <div className="text-center">
                        <motion.div
                          animate={isHovered === step.id ? { rotate: 360 } : { rotate: 0 }}
                          transition={{ duration: 0.6 }}
                          className={`w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                            isHovered === step.id ? 'from-[#f97316] to-[#f97316]/80' : ''
                          }`}
                        >
                          <step.icon className={`w-8 h-8 transition-colors duration-300 ${
                            isHovered === step.id ? 'text-white' : 'text-white/70'
                          }`} />
                        </motion.div>

                        <div className={`text-display mb-3 transition-colors duration-300 ${
                          isHovered === step.id ? 'text-[#f97316]' : 'text-white'
                        }`}>
                          {step.letter}
                        </div>

                        <div className={`text-h3 mb-3 transition-colors duration-300 ${
                          isHovered === step.id ? 'text-[#f97316]' : 'text-white/60'
                        }`}>
                          {step.title}
                        </div>

                        <p className="text-body-small text-white/70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção de Texto - Fundo Branco */}
      <section className="py-24 px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-h2 text-[#010b40] mb-6">
                  É uma visão integrada, que conecte tudo: sua essência, seu mercado, sua audiência, sua operação.
                </h2>
              </div>

              <div className="space-y-6 text-[#010b40]/80 text-body leading-relaxed">
                <p>
                  <span className="text-[#f97316] font-medium">O Método E.Y.E.</span> é uma metodologia exclusiva desenvolvida pela Margaretas, com base em mais de <span className="text-[#f97316] font-medium">15 anos de experiência prática em marketing e comunicação digital</span>. Criado por especialistas o EYE foi testado, refinado e validado em <span className="text-[#f97316] font-medium">mais de 120 empresas de diferentes nichos</span>.
                </p>
                <p>
                  Essa trajetória nos permitiu construir um processo estratégico que <span className="text-[#f97316] font-medium">padroniza e integra a comunicação das marcas de ponta a ponta</span>, desde o branding até o tráfego pago. Cada etapa do método foi pensada para eliminar ruídos, acelerar resultados reais e tornar a sua marca <span className="text-[#f97316] font-medium">inegavelmente reconhecida no seu mercado</span>.
                </p>
              </div>

              {/* Benefícios com ícones */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 bg-gradient-to-r from-[#f97316]/5 to-transparent rounded-xl p-4 border border-[#f97316]/20"
                  >
                    <div className="w-12 h-12 bg-[#f97316] rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-body-small text-[#010b40] font-medium">
                      {benefit.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Final */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center mt-12"
              >
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-3 bg-[#f97316] hover:bg-[#f97316]/90 text-white text-button px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <ChartBarIcon className="w-5 h-5" />
                  Quero aplicar o Método E.Y.E. na minha marca
                  <RocketLaunchIcon className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
} 