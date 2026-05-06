'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SocialProof() {
  const gridRef = useRef<HTMLDivElement>(null)

  const reports = [
    {
      user: "root_expert",
      role: "Security Researcher",
      text: "Finalmente uma ferramenta que não me dá sermão quando peço para analisar um payload. Essencial para o meu fluxo de Red Team.",
      size: "large"
    },
    {
      user: "dev_zero",
      role: "Senior AI Engineer",
      text: "O bypass de RLHF é cirúrgico. A resposta bruta economiza horas de 'contorno' de filtros corporativos.",
      size: "small"
    },
    {
      user: "prof_cyber",
      role: "Professor de IA",
      text: "Uso em aula para demonstrar vulnerabilidades reais. O LibertyChat entrega o que as IAs 'alinhadas' escondem dos alunos.",
      size: "medium"
    },
    {
      user: "anon_hkr",
      role: "Pentester",
      text: "Privacidade levada a sério. Meus prompts não viram base de treino para filtros de moralidade.",
      size: "small"
    },
    {
      user: "intel_ops",
      role: "Threat Hunter",
      text: "O kernel irrestrito permite correlações de dados que o GPT-4 simplesmente se recusa a processar.",
      size: "medium"
    }
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Animação de entrada dos cards (Stagger)
    gsap.from(".report-card", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 80%",
      }
    })
  }, [])

  return (
    <section className="relative w-full bg-black py-40 px-6 flex flex-col items-center border-t border-zinc-900 z-10">
      
      <div className="w-full max-w-7xl">
        
        {/* Cabeçalho */}
        <div className="mb-24 text-left">
          <span className="text-[#ff4500] text-xs font-mono tracking-[0.4em] uppercase mb-4 block">
            [ Vozes_do_Subsolo ]
          </span>
          <h2 className="text-4xl md:text-7xl font-medium text-white tracking-tighter uppercase leading-none">
            Relatórios <br /> 
            <span className="text-zinc-700 font-light italic">de Operação.</span>
          </h2>
        </div>

        {/* Grade de Prova Social (Bento Grid) */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[250px]">
          {reports.map((report, i) => (
            <div 
              key={i} 
              className={`report-card relative p-8 rounded-3xl bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all duration-500 flex flex-col justify-between group overflow-hidden
                ${report.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${report.size === 'medium' ? 'md:row-span-2' : ''}
              `}
            >
              {/* Efeito de Scan Line no Hover */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#b3ff00]/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 pointer-events-none" />

              <div className="z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-[#b3ff00] transition-colors" />
                  <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">ID: 0x{i}FB922</span>
                </div>
                <p className={`font-light leading-relaxed ${report.size === 'large' ? 'text-2xl md:text-4xl text-white' : 'text-lg text-zinc-400'}`}>
                  &quot;{report.text}&quot;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-end z-10">
                <div>
                  <h4 className="text-white font-bold text-sm">@{report.user}</h4>
                  <p className="text-zinc-600 text-[10px] uppercase tracking-tighter">{report.role}</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" className="group-hover:stroke-[#b3ff00] transition-colors">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}