'use client'

import React from 'react'

export default function ContactSection() {
  return (
    <section id="contato" className="py-24 px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <span className="inline-block text-[#f97316] text-caption mb-2">
            ENTRE EM CONTATO
          </span>
          <h2 className="text-h2 text-gray-900">
            Vamos conversar sobre seu projeto
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="text-center mb-8 text-gray-600">
            Preencha o formulário abaixo ou envie um email para contato@margaretas.com.br
          </p>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#010b40] focus:border-[#010b40] outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#010b40] focus:border-[#010b40] outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#010b40] focus:border-[#010b40] outline-none transition-colors"
                  placeholder="Descreva seu projeto ou dúvida..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#010b40] hover:bg-[#010b40]/90 text-white text-button px-8 py-4 rounded-lg transition-colors"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 