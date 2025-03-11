export default function HeroSection() {
  return (
    <section className="py-24 px-8 bg-[#010b40] text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-6">
            Agência Margaretas
          </h1>
          <p className="font-poppins text-xl mb-8">
            Transformando ideias em resultados digitais
          </p>
          <a 
            href="#contato" 
            className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#f97316]/90 text-white font-poppins font-medium px-8 py-4 rounded-lg transition-colors"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  )
} 