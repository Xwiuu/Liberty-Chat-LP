"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Registra o plugin (importante!)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Arsenal", href: "#arsenal" },
    { name: "Diferencial", href: "#diferencial" },
    { name: "Preços", href: "#pricing" },
    { name: "Provas", href: "#socialproof" },
  ];

  // FUNÇÃO DE SCROLL MESTRE
  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault(); // Mata o scroll lento do navegador

    gsap.to(window, {
      duration: 1, // Tempo da viagem (1 segundo)
      scrollTo: {
        y: href,
        offsetY: 80, // Distância para não cobrir o título com o menu
      },
      ease: "power4.inOut", // Curva de velocidade elite
    });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          flex items-center gap-2 px-3 py-2 rounded-full border border-zinc-800/50 transition-all duration-500 pointer-events-auto
          ${scrolled ? "bg-black/90 backdrop-blur-md shadow-2xl" : "bg-zinc-950/40 backdrop-blur-sm"}
        `}
      >
        {/* LOGO */}
        <div className="flex items-center gap-3 px-4 mr-2 border-r border-zinc-800/50">
          <div className="w-2 h-2 rounded-full bg-[#b3ff00] animate-pulse" />
          <span className="text-white font-black tracking-tighter text-xs uppercase italic">
            LibertyChat
          </span>
        </div>

        {/* NAVEGAÇÃO */}
        <div
          className="flex items-center relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navLinks.map((link, index) => (
            <MagneticLink
              key={link.name}
              href={link.href}
              onClick={(e: React.MouseEvent) => scrollToSection(e, link.href)} // AQUI A MÁGICA
              onMouseEnter={() => setHoveredIndex(index)}
            >
              {link.name}
            </MagneticLink>
          ))}

          {hoveredIndex !== null && (
            <motion.div
              layoutId="nav-pill"
              className="absolute bg-zinc-800/50 rounded-full z-0"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{
                width: "calc(100% / 4 - 8px)",
                height: "80%",
                left: `${(hoveredIndex * 100) / 4}%`,
                marginLeft: "4px",
              }}
            />
          )}
        </div>

        {/* CTA */}
        <div className="ml-4">
          <MagneticLink
            href="#pricing"
            isCTA
            onClick={(e: React.MouseEvent) => scrollToSection(e, "#pricing")}
          >
            Acesso Root
          </MagneticLink>
        </div>
      </motion.div>
    </nav>
  );
}

// Componente de Link Magnético com suporte a onClick
interface MagneticLinkProps {
  children: React.ReactNode;
  href: string;
  onMouseEnter?: () => void;
  onClick?: (e: React.MouseEvent) => void;
  isCTA?: boolean;
}

function MagneticLink({ children, href, onMouseEnter, onClick, isCTA }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick} // Passa o evento de clique
      onMouseEnter={onMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`
        relative z-10 px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest transition-colors
        ${
          isCTA
            ? "bg-white text-black rounded-full px-6 py-2.5 hover:bg-[#b3ff00]"
            : "text-zinc-500 hover:text-white"
        }
      `}
    >
      {children}
    </motion.a>
  );
}
