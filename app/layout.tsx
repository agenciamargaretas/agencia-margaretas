import { Providers } from './providers'
import MainNavbar from '@/components/layout/Navbar'
import { DM_Sans, Khand } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans'
})

const khand = Khand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-khand'
})

export const metadata = {
  title: 'Agência Margaretas',
  description: 'Agência especializada em Marketing Digital e Inteligência Artificial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${khand.variable} font-sans`}>
        <Providers>
          <MainNavbar />
          {children}
        </Providers>
      </body>
    </html>
  )
} 