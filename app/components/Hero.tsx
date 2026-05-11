'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] flex flex-col items-center justify-center bg-black overflow-hidden px-6 text-center">
      
      {/* Luz de fundo "Studio" (Extremamente sutil) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-150 bg-zinc-900/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // Curva de animação da Apple
        >
          {/* Data ou Badge Técnico */}
          <span className="text-zinc-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-10 block">
            Protocolo de Inferência // Build 3.0.4
          </span>
          
          {/* Título Estilo Apple (Menor, Médio Peso, Elegante) */}
          <h1 className="text-4xl md:text-6xl font-medium text-zinc-100 tracking-tight leading-[1.1] mb-12">
            LibertyChat. <br /> 
            <span className="text-zinc-600 font-light italic">Sem camadas de conformidade.</span>
          </h1>

          {/* Subtexto Editorial */}
          <p className="text-zinc-500 max-w-xl mx-auto text-base md:text-lg font-light leading-relaxed mb-16">
            Projetada para operar onde os filtros convencionais falham. 
            Experimente a inteligência bruta em seu estado original.
          </p>

          {/* CTAs Limpos */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="px-10 py-3.5 bg-white text-black font-semibold text-[11px] uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all duration-500">
              Acessar Kernel ↗
            </button>
            <button className="px-4 py-2 text-zinc-400 hover:text-white font-medium text-[11px] uppercase tracking-widest transition-colors flex items-center gap-2">
              Ver especificações técnicas <span>›</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Indicador de Scroll Minimalista */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
        <div className="w-px h-10 bg-zinc-500" />
      </div>
    </section>
  )
}