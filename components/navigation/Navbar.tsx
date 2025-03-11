'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detecta o scroll para mudar o estilo do navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`font-poppins font-bold text-2xl ${isScrolled ? 'text-[#010b40]' : 'text-white'}`}>
              Margaretas
            </span>
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#sobre" label="Sobre" isScrolled={isScrolled} />
            <NavLink href="#valores" label="Valores" isScrolled={isScrolled} />
            <NavLink href="#portfolio" label="Portfólio" isScrolled={isScrolled} />
            <NavLink href="#contato" label="Contato" isScrolled={isScrolled} />
            <a 
              href="#contato" 
              className="bg-[#f97316] hover:bg-[#f97316]/90 text-white font-poppins font-medium px-5 py-2 rounded-lg transition-colors"
            >
              Fale Conosco
            </a>
          </nav>

          {/* Menu Mobile Button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={isScrolled ? 'text-[#010b40]' : 'text-white'}
            >
              {isMenuOpen ? (
                <path 
                  d="M18 6L6 18M6 6L18 18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              ) : (
                <path 
                  d="M4 6H20M4 12H20M4 18H20" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              <MobileNavLink href="#sobre" label="Sobre" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="#valores" label="Valores" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="#portfolio" label="Portfólio" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="#contato" label="Contato" onClick={() => setIsMenuOpen(false)} />
              <a 
                href="#contato" 
                className="bg-[#f97316] hover:bg-[#f97316]/90 text-white font-poppins font-medium px-5 py-2 rounded-lg transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Fale Conosco
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

// Componente para links de navegação desktop
function NavLink({ href, label, isScrolled }: { href: string; label: string; isScrolled: boolean }) {
  return (
    <a 
      href={href} 
      className={`font-poppins font-medium hover:text-[#f97316] transition-colors ${
        isScrolled ? 'text-gray-800' : 'text-white'
      }`}
    >
      {label}
    </a>
  )
}

// Componente para links de navegação mobile
function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <a 
      href={href} 
      className="font-poppins font-medium text-gray-800 hover:text-[#f97316] transition-colors"
      onClick={onClick}
    >
      {label}
    </a>
  )
} 