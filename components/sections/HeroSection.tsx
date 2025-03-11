export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#010b40] text-white overflow-hidden">
      {/* Efeito de gradiente ou textura de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#010b40]/80 to-[#010b40] z-0"></div>
      
      {/* Conteúdo principal */}
      <div className="container mx-auto px-8 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[#f97316] font-poppins font-bold text-lg md:text-xl uppercase tracking-wider mb-6">
            A AGÊNCIA PARA QUEM ODEIA AGÊNCIAS
          </span>
          
          <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-8">
            Agência Margaretas
          </h1>
          
          <p className="font-poppins text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Transformamos ideias em experiências digitais impactantes que geram resultados reais para o seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contato" 
              className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#f97316]/90 text-white font-poppins font-medium px-8 py-4 rounded-lg transition-colors"
            >
              Fale conosco
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            
            <a 
              href="#portfolio" 
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white/10 text-white font-poppins font-medium px-8 py-4 rounded-lg transition-colors"
            >
              Ver portfólio
            </a>
          </div>
        </div>
      </div>
      
      {/* Decoração visual (opcional) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#010b40] to-transparent z-0"></div>
    </section>
  )
} 