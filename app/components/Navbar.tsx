'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin)
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { name: "Tecnologia", href: "#arsenal" },
    { name: "Auditoria", href: "#comparativo" },
    { name: "Recursos", href: "#pricing" },
    { name: "Relatórios", href: "#social" }
  ]

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: href, offsetY: 100 },
      ease: "power4.inOut"
    })
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-8 left-0 right-0 z-100 flex justify-center px-6 pointer-events-none">
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-700 pointer-events-auto
          ${scrolled 
            ? 'bg-black/80 border-zinc-800/50 backdrop-blur-xl shadow-2xl' 
            : 'bg-transparent border-transparent'}
        `}
      >
        
        {/* STATUS DE SISTEMA / LOGO */}
        <div className="flex items-center gap-3 px-4 py-2 border-r border-zinc-900/50 mr-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_white]" />
          <span className="text-white font-black tracking-tighter text-[11px] uppercase italic">
            Liberty<span className="text-zinc-700">Chat</span>
          </span>
        </div>

        {/* LINKS TÉCNICOS */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <MagneticLink 
              key={link.name}
              href={link.href}
              onClick={(e: React.MouseEvent) => scrollToSection(e, link.href)}
            >
              {link.name}
            </MagneticLink>
          ))}
        </div>

        {/* CTA DE ACESSO */}
        <div className="ml-4">
          <button 
            onClick={(e: React.MouseEvent) => scrollToSection(e, "#pricing")}
            className="px-6 py-2.5 bg-white text-black font-black uppercase tracking-[0.2em] text-[9px] rounded-full hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Acessar_Kernel
          </button>
        </div>

      </motion.div>
    </nav>
  )
}

interface MagneticLinkProps {
  children: React.ReactNode
  href: string
  onClick: (e: React.MouseEvent) => void
}

// COMPONENTE DE LINK MAGNÉTICO REFINADO
function MagneticLink({ children, href, onClick }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { width, height, left, top } = ref.current.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x: x * 0.4, y: y * 0.4 }) // Força magnética sutil
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
      className="relative z-10 px-4 py-2 text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-[0.2em] hover:text-white transition-colors cursor-crosshair"
    >
      {children}
    </motion.a>
  )
}