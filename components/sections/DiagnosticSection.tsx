'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  MagnifyingGlassIcon, 
  ChartBarIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

export default function DiagnosticSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    currentSituation: '',
    otherSituation: '',
    companySize: '',
    mainChallenge: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData)
  }

  const benefits = [
    {
      icon: MagnifyingGlassIcon,
      title: "Leitura 360º da sua marca",
      description: "Desde o branding até a performance"
    },
    {
      icon: ChartBarIcon,
      title: "Análise de coesão",
      description: "Entre tráfego, conteúdo e presença institucional"
    },
    {
      icon: CheckCircleIcon,
      title: "Recomendações práticas",
      description: "Com foco em resultado e autoridade"
    },
    {
      icon: RocketLaunchIcon,
      title: "Clareza sobre gargalos",
      description: "Que impedem sua marca de crescer com consistência"
    }
  ]

  return (
    <section id="diagnostico" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Efeitos visuais de fundo mais sutis */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#010b40]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#f97316]/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Grid de pontos decorativo mais sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #010b40 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-8 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-h1 text-[#010b40] mb-8">
              Diagnóstico
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Lado esquerdo - Conteúdo */}
            <div className="space-y-12">
              {/* Mapeamento de Comunicação */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 shadow-xl"
              >
                <h3 className="text-h3 text-[#010b40] mb-6">
                  Diagnóstico e Mapeamento de Marketing
                </h3>
                
                <div className="space-y-4 mb-6">
                  <p className="text-body text-gray-700">
                    Você não precisa de mais conteúdo. Nem de mais ideias soltas.
                  </p>
                  <p className="text-body text-gray-700">
                    O que sua marca precisa é de <span className="text-[#f97316] font-medium">clareza, direção e coesão</span> entre tudo que já existe.
                  </p>
                </div>

                <p className="text-body text-gray-700 mb-4">
                  O <span className="text-[#f97316] font-medium">Mapeamento de Comunicação Margaretas</span> é um processo estratégico que enxerga além das aparências:
                </p>
                
                <p className="text-body text-gray-700 mb-4">
                  revela onde sua comunicação está fragmentada, onde seus esforços estão se anulando — e reconstrói a base que sustenta uma marca forte, confiável e preparada para crescer.
                </p>

                <p className="text-body text-gray-700">
                  Combinamos método, sensibilidade criativa e visão sistêmica para entregar um plano real:
                  estruturado, inteligente e alinhado com o verdadeiro posicionamento da sua marca.
                </p>
              </motion.div>

              {/* O que você vai receber */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h4 className="text-h4 text-[#010b40]">
                  O que você vai receber:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start space-x-3 bg-white/80 backdrop-blur-lg rounded-xl p-4 border border-gray-200 shadow-lg"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div>
                          <h5 className="text-caption text-[#010b40] mb-1">
                            {benefit.title}
                          </h5>
                          <p className="text-body-small text-gray-600">
                            {benefit.description}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </div>

            {/* Lado direito - Formulário */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 shadow-xl"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f97316] to-[#f97316]/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CurrencyDollarIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-h4 text-[#010b40] mb-2">
                  Solicite seu Diagnóstico
                </h3>
                <p className="font-poppins text-gray-600">
                  Preencha o formulário e receba sua análise estratégica
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-caption text-[#010b40] mb-2">Nome completo *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#010b40] placeholder-gray-500 focus:outline-none focus:border-[#f97316] transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-caption text-[#010b40] mb-2">Empresa *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#010b40] placeholder-gray-500 focus:outline-none focus:border-[#f97316] transition-colors"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label className="block text-caption text-[#010b40] mb-2">E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#010b40] placeholder-gray-500 focus:outline-none focus:border-[#f97316] transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-caption text-[#010b40] mb-2">Telefone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#010b40] placeholder-gray-500 focus:outline-none focus:border-[#f97316] transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-caption text-[#010b40] mb-2">Porte da empresa *</label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#010b40] focus:outline-none focus:border-[#f97316] transition-colors"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="micro">Microempresa (até 9 funcionários)</option>
                    <option value="pequena">Pequena empresa (10 a 49 funcionários)</option>
                    <option value="media">Média empresa (50 a 99 funcionários)</option>
                    <option value="grande">Grande empresa (100+ funcionários)</option>
                    <option value="nao-informar">Prefiro não informar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-caption text-[#010b40] mb-2">Situação atual do marketing *</label>
                  <select
                    name="currentSituation"
                    value={formData.currentSituation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#010b40] focus:outline-none focus:border-[#f97316] transition-colors"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="sem-marketing">Não temos marketing estruturado</option>
                    <option value="sem-estrategia">Temos alguém que posta, mas sem estratégia definida</option>
                    <option value="agencia-insatisfeito">Trabalhamos com uma agência, mas não estamos satisfeitos</option>
                    <option value="equipe-interna">Temos equipe interna, mas buscamos apoio estratégico</option>
                    <option value="marketing-ativo">Marketing estruturado e ativo, mas queremos otimizar</option>
                    <option value="outro">Outro (descreva brevemente)</option>
                  </select>
                </div>

                {formData.currentSituation === 'outro' && (
                  <div>
                    <label className="block text-caption text-[#010b40] mb-2">Descreva sua situação *</label>
                    <textarea
                      name="otherSituation"
                      value={formData.otherSituation}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#010b40] placeholder-gray-500 focus:outline-none focus:border-[#f97316] transition-colors resize-none"
                      placeholder="Descreva brevemente sua situação atual de marketing..."
                    />
                  </div>
                )}

                <div>
                  <label className="block text-caption text-[#010b40] mb-2">Principal desafio *</label>
                  <textarea
                    name="mainChallenge"
                    value={formData.mainChallenge}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-[#010b40] placeholder-gray-500 focus:outline-none focus:border-[#f97316] transition-colors resize-none"
                    placeholder="Descreva brevemente qual é o seu principal desafio de marketing atualmente..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#f97316] to-[#f97316]/90 text-white text-button py-4 px-8 rounded-lg hover:from-[#f97316]/90 hover:to-[#f97316] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Solicitar Diagnóstico Gratuito
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 