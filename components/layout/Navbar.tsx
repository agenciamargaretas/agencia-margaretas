'use client'

import React from 'react'
import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenu,
  NavbarMenuItem,
  Link
} from "@nextui-org/react"
import { motion } from 'framer-motion'

const MenuIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M3 12H21" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M3 6H21" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M3 18H21" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
)

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "SOBRE", href: "/sobre" },
    { label: "SERVIÇOS", href: "/servicos" },
    { label: "PORTFÓLIO", href: "/portfolio" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTATO", href: "/contato" },
  ]

  return (
    <Navbar 
      maxWidth="full" 
      position="sticky" 
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-background/50 backdrop-blur-md border-b border-white/10 h-24 px-8"
    >
      {/* Mobile/Tablet Menu Button */}
      <NavbarContent className="lg:hidden flex-1 justify-start">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-foreground"
        >
          <MenuIcon />
        </button>
      </NavbarContent>

      {/* Logo - Centered on mobile/tablet, left on desktop */}
      <NavbarContent className="flex-1 lg:flex-none justify-center lg:justify-start">
        <NavbarBrand>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-poppins font-semibold text-4xl text-accent tracking-wider"
          >
            MARGARETAS
          </motion.p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent className="hidden lg:flex flex-1 justify-between items-center">
        <div className="flex items-center gap-8 ml-16">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item.label}-${index}`}>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  className="font-poppins text-foreground/90 hover:text-accent transition-colors text-lg font-medium tracking-widest rounded-lg"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </motion.div>
            </NavbarItem>
          ))}
        </div>
        <NavbarItem className="ml-16">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Link 
              href="/contato"
              className="font-poppins text-lg font-medium tracking-widest text-foreground/90 hover:text-accent transition-colors rounded-lg"
            >
              FALE CONOSCO
            </Link>
          </motion.div>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile/Tablet Menu */}
      <NavbarMenu className="bg-background/95 backdrop-blur-md pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`} className="py-4">
            <Link
              className="w-full text-foreground/90 hover:text-accent transition-colors text-xl font-sans tracking-wide"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="py-4">
          <Link
            href="/contato"
            className="w-full text-foreground/90 hover:text-accent transition-colors text-xl font-sans tracking-widest"
          >
            FALE CONOSCO
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
} 