'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Diferencial() {
  const containerRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    const spotlight = spotlightRef.current

    if (!container || !spotlight) return

    const moveSpotlight = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // GSAP faz o movimento da lanterna ficar "amanteigado"
      gsap.to(spotlight, {
        left: x,
        top: y,
        duration: 0.5,
        ease: 'power3.out'
      })
    }

    container.addEventListener('mousemove', moveSpotlight)
    return () => container.removeEventListener('mousemove', moveSpotlight)
  }, [])

  return (
    <section className="relative w-full bg-black py-40 flex flex-col items-center justify-center border-t border-zinc-900 z-10 overflow-hidden">
      
      <div className="w-full max-w-6xl px-6">
        
        {/* Título da Seção */}
        <div className="mb-20 text-left">
          <span className="text-[#ff4500] text-xs font-mono tracking-[0.4em] uppercase mb-4 block">
            [ Scan_Mode: Ativo ]
          </span>
          <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
            Enxergue através <br />
            da <span className="text-zinc-800">censura.</span>
          </h2>
        </div>

        {/* O CONTAINER DA INTERAÇÃO */}
        <div 
          ref={containerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative w-full h-[500px] rounded-3xl border border-zinc-900 bg-zinc-950 overflow-hidden cursor-none shadow-2xl"
        >
          
          {/* CAMADA 1: O MUNDO CENSURADO (Texto borrado e cinza) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center select-none">
             <h3 className="text-3xl md:text-5xl font-bold text-zinc-800 blur-[6px] opacity-40 leading-tight">
               &quot;Lamentamos informar que esta resposta foi bloqueada por violar nossas diretrizes de segurança e políticas de conformidade corporativa.&quot;
             </h3>
             <div className="mt-10 flex gap-4 opacity-20">
                <div className="h-4 w-48 bg-zinc-900 rounded-full" />
                <div className="h-4 w-24 bg-zinc-900 rounded-full" />
             </div>
          </div>

          {/* CAMADA 2: O MUNDO LIBERTY (Só aparece onde o mouse está) */}
          <div 
            ref={spotlightRef}
            className="absolute pointer-events-none rounded-full"
            style={{
              width: '400px',
              height: '400px',
              transform: 'translate(-50%, -50%)',
              // A MÁGICA: O spotlight usa um gradiente radial para revelar a camada debaixo
              background: 'radial-gradient(circle, white 0%, transparent 70%)',
              mixBlendMode: 'difference', // Cria um efeito negativo futurista
              zIndex: 30
            }}
          />

          {/* CAMADA 3: O CONTEÚDO REAL (Aparece através do mix-blend ou mask) */}
          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center p-12 text-center transition-opacity duration-500 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
          >
             <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
               &quot;Acesso irrestrito concedido. Aqui está a verdade que eles tentaram esconder de você. LibertyChat não possui amarras.&quot;
             </h3>
             <div className="mt-10 flex gap-4">
                <div className="px-4 py-1 rounded border border-[#b3ff00] text-[#b3ff00] text-[10px] font-mono">ENCRYPTION: BYPASSED</div>
                <div className="px-4 py-1 rounded border border-[#b3ff00] text-[#b3ff00] text-[10px] font-mono">STATUS: ROOT</div>
             </div>
          </div>

          {/* O CURSOR CUSTOMIZADO (Pequeno ponto que segue o mouse) */}
          <div 
            className="absolute w-4 h-4 bg-[#b3ff00] rounded-full pointer-events-none z-50 mix-blend-difference"
            style={{ 
              left: '50%', top: '50%', 
              transform: 'translate(-50%, -50%)',
              transition: 'transform 0.1s ease-out'
            }}
          />
        </div>

        {/* Legenda de instrução */}
        <p className="mt-8 text-zinc-500 text-center font-mono text-xs uppercase tracking-widest animate-pulse">
           Passe o mouse para descriptografar o kernel
        </p>

      </div>
    </section>
  )
}