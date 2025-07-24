import { ClockIcon, ChartBarIcon, UserGroupIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

export default function ChallengesSection() {
  const challenges = [
    {
      icon: ClockIcon,
      title: "Falta de tempo e foco",
      description: "Você se vê dividindo seu tempo entre tocar o negócio e fazer marketing, trabalhando noites e fins de semana?"
    },
    {
      icon: ChartBarIcon,
      title: "Incerteza estratégica",
      description: "Sente que suas ações de marketing são no \"achismo\", sem ter certeza do que funciona?"
    },
    {
      icon: UserGroupIcon,
      title: "Equipe e recursos limitados",
      description: "Não tem um time dedicado de marketing e acaba sobrecarregado, perdendo oportunidades por não conseguir acompanhar tudo?"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Resultados abaixo do esperado",
      description: "Investe em campanhas que não trazem retorno consistente, mas não sabe o que mudar?"
    }
  ]

  return (
    <section id="desafios" className="py-24 px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-h1 text-[#010b40] mb-6">
              Os Desafios que Você Enfrenta no Marketing
            </h2>
            <div className="w-24 h-1 bg-[#f97316] mx-auto"></div>
          </div>

          {/* Grid de Desafios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#f97316]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#010b40] rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-h3 text-[#010b40] mb-3">
                        {challenge.title}
                      </h3>
                      <p className="text-body text-gray-700 leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Botão de Chamada para Ação */}
          <div className="mt-16 text-center">
            <a 
              href="#contato" 
              className="inline-flex items-center justify-center gap-3 bg-[#f97316] hover:bg-[#f97316]/90 text-white text-button px-12 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Quero mudar isso
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 