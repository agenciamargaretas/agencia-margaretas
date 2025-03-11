/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React from 'react'
import Image from 'next/image'
// Removendo a importação do Image que não está sendo usada
// import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Coluna da Imagem com elementos flutuantes */}
          <div className="relative">
            {/* Imagem principal com bordas arredondadas */}
            <div 
              className="relative rounded-3xl overflow-hidden shadow-xl h-[500px]"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&h=500')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
            </div>
            
            {/* Elemento flutuante - Estatística */}
            <div className="absolute top-10 -right-10 bg-white rounded-xl shadow-lg p-4 z-10">
              <div className="text-center">
                <p className="text-gray-600 text-sm">Clientes atendidos</p>
                <p className="text-[#010b40] text-4xl font-bold">200+</p>
                <div className="mt-2">
                  <svg className="w-full" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20C40 5 60 35 100 20C140 5 160 35 200 20" stroke="#f97316" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Elemento flutuante - Avaliações */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-4 z-10">
              <div className="flex items-center gap-2">
                <div className="bg-[#f97316] rounded-full p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900">5 Estrelas</p>
                  <p className="text-sm text-gray-600">Avaliação dos clientes</p>
                </div>
              </div>
            </div>
            
            {/* Elemento flutuante - Círculo decorativo */}
            <div className="absolute top-1/2 -right-16 transform -translate-y-1/2">
              <div className="w-32 h-32 rounded-full border-4 border-[#f97316] flex items-center justify-center">
                <div className="text-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Coluna do Texto */}
          <div>
            <div className="inline-block bg-blue-100 text-[#010b40] font-poppins font-medium px-4 py-2 rounded-full mb-6">
              SOBRE A MARGARETAS
            </div>
            
            <h2 className="font-poppins text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Vamos Criar Algo Incrível Juntos
            </h2>
            
            <p className="font-poppins text-lg text-gray-600 mb-6">
              Não somos apenas mais uma agência - somos seus parceiros de crescimento digital. Com anos de experiência no mercado e uma paixão por inovação, nossa equipe está dedicada a entregar resultados mensuráveis que impulsionam seu negócio.
            </p>
            
            <p className="font-poppins text-lg text-gray-600 mb-8">
              Já atendemos mais de 200 clientes pelo Brasil e mundo, transformando ideias em projetos de sucesso. Nossa abordagem personalizada e foco em resultados nos diferencia no mercado.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#010b40] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-poppins font-semibold text-gray-900">Projetos Premiados</h3>
                </div>
                <p className="text-gray-600 pl-12">Reconhecidos pela excelência e criatividade</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#f97316] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V12L15 15M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-poppins font-semibold text-gray-900">Entrega Pontual</h3>
                </div>
                <p className="text-gray-600 pl-12">Comprometidos com prazos e qualidade</p>
              </div>
            </div>
            
            <a 
              href="#contato" 
              className="inline-flex items-center gap-2 bg-[#010b40] hover:bg-[#010b40]/90 text-white font-poppins font-medium px-8 py-4 rounded-lg transition-colors"
            >
              Vamos Conversar
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 