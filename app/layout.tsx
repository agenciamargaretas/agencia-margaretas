import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agência Margaretas - Transformando ideias em resultados digitais',
  description: 'Somos uma agência focada em entregar soluções criativas e estratégicas que impulsionam o crescimento do seu negócio no ambiente digital.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
} 