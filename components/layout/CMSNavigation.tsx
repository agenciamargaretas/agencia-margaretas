"use client"

import Link from 'next/link'

export default function CMSNavigation() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 shadow-lg border border-white/20">
        <Link 
          href="/studio" 
          className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#f97316]/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Gerenciar Conteúdo
        </Link>
      </div>
    </div>
  )
} 