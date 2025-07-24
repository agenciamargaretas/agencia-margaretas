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
  ArrowTopRightOnSquareIcon,
  CheckIcon
} from '@heroicons/react/24/outline'
import MethodEYESection from '../../components/sections/MethodEYESection'

export default function ServicosPage() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 0,
      title: "Branding",
      icon: EyeIcon,
      subtitle: "Se você...",
      problems: [
        "Sente que sua marca não reflete a essência nem o valor do que você entrega.",
        "Já tem logo e nome, mas não sabe como se posicionar de forma consistente.",
        "Percebe que sua comunicação está visualmente \"bonita\", mas sem identidade ou direção."
      ],
      benefits: [
        "Clareza sobre quem é sua marca, o que ela representa e como deve se comunicar.",
        "Um posicionamento coeso que guia o tom de voz, a estética e o discurso comercial.",
        "Reconhecimento e percepção de autoridade em todos os pontos de contato com o público."
      ],
      includes: [
        "Diagnóstico de marca e concorrência",
        "Definição de essência, DNA e arquétipos",
        "Criação de naming (se necessário), tom de voz e narrativa",
        "Desenvolvimento da identidade visual completa (logotipo, cores, tipografia, aplicações)",
        "Manual de marca com orientações de uso"
      ],
      cta: "Quero construir minha marca"
    },
    {
      id: 1,
      title: "Gestão de Redes Sociais – Pacotes Personalizados",
      icon: UserGroupIcon,
      subtitle: "Se você...",
      problems: [
        "Nunca conseguiu manter frequência nas redes e nem sabe por onde começar.",
        "Publica de forma aleatória, sem estratégia ou retorno.",
        "Já tem presença digital, mas quer transformar conteúdo em autoridade e venda."
      ],
      benefits: [
        "Uma comunicação ativa, coerente e alinhada com o que a marca realmente representa.",
        "Conteúdo pensado para atrair, engajar e reforçar o posicionamento da sua empresa.",
        "Liberdade mental: você para de perder tempo com o que não sabe — e ganha presença com consistência."
      ],
      includes: [
        "Diagnóstico de presença digital e análise de persona",
        "Estratégia de conteúdo por canal (Instagram, TikTok, Google Meu Negócio, Pinterest etc.)",
        "Criação de textos, pautas, legendas, criativos, roteiros (com estética e copy)",
        "Direção de tom de voz, storytelling e estilo visual",
        "Publicação (opcional) + orientações de engajamento"
      ],
      cta: "Quero pacote de redes sociais"
    },
    {
      id: 2,
      title: "Criação de Sites",
      icon: GlobeAltIcon,
      subtitle: "Se você...",
      problems: [
        "Ainda não tem site e sente que isso compromete sua credibilidade.",
        "Tem um site antigo, confuso ou parado que não representa mais sua marca.",
        "Precisa integrar sua presença digital com uma estrutura que realmente funcione."
      ],
      benefits: [
        "Um site profissional, claro e com a cara da sua marca.",
        "Uma base confiável para se apresentar, gerar negócios e sustentar sua comunicação.",
        "Estrutura, design e copy orientados à conversão — não só à estética."
      ],
      includes: [
        "Diagnóstico de objetivos e definição de escopo",
        "Wireframe com UX inteligente e arquitetura de conteúdo",
        "Desenvolvimento visual e textual (design + copywriting estratégico)",
        "Versão responsiva (mobile/tablet)",
        "Integração com WhatsApp, formulários, links sociais, blogs ou sistema externo",
        "Treinamento pós-entrega (opcional)"
      ],
      cta: "Quero um site estratégico"
    },
    {
      id: 3,
      title: "Performance e Tráfego Pago",
      icon: RocketLaunchIcon,
      subtitle: "Se você...",
      problems: [
        "Nunca anunciou online e sente que está perdendo oportunidades.",
        "Já tentou investir em tráfego, mas não viu retorno — e não sabe onde errou.",
        "Tem campanhas rodando, mas quer escalar com inteligência e conexão com o branding."
      ],
      benefits: [
        "Um plano de mídia claro, realista e conectado com seu funil e conteúdo.",
        "Resultados consistentes, com foco em conversão, não só cliques.",
        "Relatórios que você entende — e que mostram o que fazer a seguir."
      ],
      includes: [
        "Diagnóstico de funil e objetivo de campanha",
        "Planejamento de mídia (canais, segmentações, verba, criativos)",
        "Criação de anúncios (visual e copywriting)",
        "Gestão, testes A/B, otimizações semanais",
        "Relatórios com insights práticos"
      ],
      cta: "Quero escalar com tráfego"
    },
    {
      id: 4,
      title: "Consultoria de Marketing",
      icon: LightBulbIcon,
      subtitle: "Se você...",
      problems: [
        "Está tentando fazer tudo sozinho(a) e sente que está rodando em círculos.",
        "Tem ações acontecendo, mas tudo parece desconectado.",
        "Quer ajuda pra tomar decisões mais estratégicas e parar de apagar incêndios."
      ],
      benefits: [
        "Visão externa e especializada para entender o que está travando seu marketing.",
        "Um plano de ação claro e alinhado com seus objetivos reais.",
        "Direção e segurança para seguir com foco — sem ficar pulando de tática em tática."
      ],
      includes: [
        "Sessão de diagnóstico estratégica",
        "Mapeamento dos principais gargalos e oportunidades",
        "Proposta de reorganização das frentes de marketing",
        "Entrega de direcionamento tático e estratégico",
        "(Opcional) acompanhamento contínuo"
      ],
      cta: "Quero uma consultoria com a Margaretas"
    },
    {
      id: 5,
      title: "Soluções Personalizadas (para estruturas diferentes)",
      icon: CogIcon,
      subtitle: "Se você...",
      problems: [
        "Não tem equipe de marketing e precisa de alguém que pense por você.",
        "Tem um time, mas ninguém conecta o que está sendo feito.",
        "Quer parar de gerenciar fornecedores separados e centralizar tudo com inteligência."
      ],
      benefits: [
        "Um modelo sob medida para sua estrutura — com visão estratégica e execução real.",
        "Comunicação unificada, com padronização entre conteúdo, branding e performance.",
        "A tranquilidade de ter uma equipe que assume a linha de frente com responsabilidade."
      ],
      includes: [
        "Diagnóstico da estrutura interna e necessidades da empresa",
        "Definição de escopo personalizado: direção criativa, consultoria, execução integrada",
        "Criação de calendário, plano de ação e fluxos de entrega por canal",
        "Time dedicado com acompanhamento e entregas semanais ou mensais",
        "Relatórios e otimizações constantes"
      ],
      cta: "Quero uma solução feita pra minha empresa"
    }
  ]

  const currentService = services[activeService]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#010b40] via-[#0a0a0a] to-[#010b40] overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#f97316]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Dotted Grid Background */}
        <div className="fixed inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="pt-24 pb-16 text-center"
          >
            <div className="container mx-auto px-8">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-h1 text-white mb-8"
              >
                Nossos Serviços
              </motion.h1>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-32 h-1 bg-[#f97316] mx-auto"
              ></motion.div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="container mx-auto px-8 mb-16">
            <div className="flex flex-wrap justify-center gap-3">
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveService(service.id)}
                  className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeService === service.id
                      ? 'bg-[#f97316] text-white shadow-lg shadow-[#f97316]/30'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {index + 1}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Service Content */}
          <div className="container mx-auto px-8 pb-24">
            <motion.div
              key={activeService}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              {/* Service Header */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-[#f97316] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#f97316]/30">
                    <currentService.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-h2 text-white">
                    {currentService.title}
                  </h2>
                </div>
              </motion.div>

              {/* Problems Section */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 mb-8"
              >
                <h3 className="text-h3 text-[#f97316] mb-6 text-center">
                  Se você...
                </h3>
                <div className="space-y-4">
                  {currentService.problems.map((problem, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#f97316] flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-body text-white/90 leading-relaxed">
                        {problem}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits Section */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-[#f97316]/20 to-[#f97316]/10 backdrop-blur-lg rounded-3xl p-8 border border-[#f97316]/20 mb-8"
              >
                <h3 className="text-h3 text-white mb-6 text-center">
                  O que você conquista:
                </h3>
                <div className="space-y-4">
                  {currentService.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckIcon className="w-4 h-4 text-[#f97316]" />
                      </div>
                      <p className="text-body text-white leading-relaxed">
                        {benefit}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Includes Section */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 mb-12"
              >
                <h3 className="text-h3 text-[#f97316] mb-6 text-center">
                  O que está incluso:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentService.includes.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#f97316] flex-shrink-0"></div>
                      <p className="text-body-small text-white/90">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <motion.a
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  href="#contato"
                  className="inline-flex items-center justify-center gap-3 bg-[#f97316] text-white text-button px-12 py-6 rounded-xl hover:bg-[#f97316]/90 transition-all duration-300 transform hover:scale-105 shadow-md shadow-[#f97316]/30"
                >
                  {currentService.cta}
                  <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Método E.Y.E. Section */}
      <MethodEYESection />
    </>
  )
} 