'use client'

import { MouseEvent, useRef } from 'react'

export default function SocialProof() {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    const cards = document.querySelectorAll('.report-card')
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      ;(card as HTMLElement).style.setProperty('--mouse-x', `${x}px`)
      ;(card as HTMLElement).style.setProperty('--mouse-y', `${y}px`)
    })
  }

  const reports = [
    {
      user: "root_expert",
      role: "Security Researcher",
      text: "Finalmente uma ferramenta que não me dá sermão quando peço para analisar um payload. Essencial para o meu fluxo de Red Team.",
      size: "large",
      id: "0xFBB22"
    },
    {
      user: "dev_zero",
      role: "Senior AI Engineer",
      text: "O bypass de RLHF é cirúrgico. A resposta bruta economiza horas de 'contorno' de filtros corporativos.",
      size: "medium",
      id: "0X1FBB22"
    },
    {
      user: "prof_cyber",
      role: "Professor de IA",
      text: "Uso em aula para demonstrar vulnerabilidades reais. O LibertyChat entrega o que as IAs 'alinhadas' escondem dos alunos.",
      size: "medium",
      id: "0XFFB922"
    }
  ]

  return (
    <section id="socialproof" className="relative w-full bg-black py-40 px-6 flex flex-col items-center border-t border-zinc-900 z-10" onMouseMove={handleMouseMove}>
      
      <div className="w-full max-w-7xl">
        
        {/* Cabeçalho Técnico */}
        <div className="mb-24 text-left">
          <span className="text-[#ff4500] text-xs font-mono tracking-[0.4em] uppercase mb-4 block">
            [ System_Field_Reports ]
          </span>
          <h2 className="text-4xl md:text-7xl font-medium text-white tracking-tighter uppercase leading-none">
            Relatórios <br /> 
            <span className="text-zinc-700 font-light italic">de Operação.</span>
          </h2>
        </div>

        {/* Grade de Prova Social (Bento Grid) */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[300px]">
          {reports.map((report, i) => (
            <div 
              key={i} 
              className={`report-card group relative p-px rounded-3xl bg-zinc-900/50 overflow-hidden transition-all duration-500
                ${report.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
              `}
            >
              {/* Efeito de Borda Ativa com GSAP/Tailwind */}
              <div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                  background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), ${i === 0 ? '#b3ff00' : '#ffffff22'}, transparent 40%)`,
                }}
              />

              {/* Conteúdo do Card (Vidro Fumê) */}
              <div className="relative h-full bg-[#050505] rounded-3xl p-8 md:p-10 flex flex-col justify-between backdrop-blur-sm">
                
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#b3ff00]' : 'bg-zinc-800'}`} />
                    <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
                       LOG_ID: {report.id}
                    </span>
                  </div>
                  
                  <p className={`font-light leading-relaxed tracking-tight ${report.size === 'large' ? 'text-2xl md:text-4xl text-white' : 'text-lg text-zinc-400'}`}>
                    &quot;{report.text}&quot;
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-900/50 flex justify-between items-end">
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-tight">@{report.user}</h4>
                    <p className="text-zinc-600 text-[10px] uppercase tracking-tighter">{report.role}</p>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" className="group-hover:stroke-[#b3ff00] transition-colors">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Técnico sutil da SYNX */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center px-8 opacity-40">
           <div className="text-[10px] font-mono text-zinc-600 mb-4 md:mb-0">
             ENCRYPTED_TUNNEL: AES_256 // NODE: GRAMADO_01
           </div>
           <div className="text-[10px] font-mono text-zinc-600 uppercase">
             SYNX Labs // All Rights Reserved
           </div>
        </div>

      </div>
    </section>
  )
}