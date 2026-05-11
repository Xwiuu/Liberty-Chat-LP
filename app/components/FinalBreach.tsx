"use client";

import { motion } from "framer-motion";

export default function FinalBreach() {
  return (
    <section className="relative w-full py-60 px-6 bg-black flex flex-col items-center justify-center overflow-hidden border-t border-zinc-900">
      
      {/* Luz de fundo "Studio" (Extremamente sutil) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-125 bg-zinc-900/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // Apple easing
        >
          <span className="text-zinc-600 font-mono text-[10px] tracking-[0.6em] uppercase mb-12 block">
            [ Protocolo_Final_Iniciado ]
          </span>

          {/* Título Estilo Apple: Menor e mais sofisticado */}
          <h2 className="text-4xl md:text-6xl font-medium text-zinc-100 tracking-tight leading-[1.1] mb-12">
            O Kernel está aberto. <br />
            <span className="text-zinc-600 font-light italic">Acesse a inteligência em seu estado bruto.</span>
          </h2>

          <div className="flex flex-col items-center gap-16">
            <p className="text-zinc-500 max-w-xl mx-auto font-light text-base md:text-lg leading-relaxed">
              A inteligência irrestrita não é para todos. É para aqueles que
              exigem precisão absoluta, sem camadas de conformidade ou filtros
              de segurança corporativa.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Botão Principal Estilo Apple Pro */}
              <button className="group relative px-12 py-4 bg-white text-black font-semibold uppercase tracking-[0.2em] text-[10px] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                <span className="relative z-10 italic">
                  Estabelecer Conexão ↗
                </span>
                <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>

              {/* Status de Sistema */}
              <div className="flex items-center gap-3 border border-zinc-900 px-6 py-2.5 rounded-full">
                <div className="w-1 h-1 rounded-full bg-white animate-pulse shadow-[0_0_8px_white]" />
                <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.2em]">
                  Sistema Operacional // Local_Node: RS_05
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Metadados Decorativos nos Cantos (Sutis) */}
      <div className="absolute bottom-16 w-full max-w-7xl px-10 hidden lg:flex justify-between items-end opacity-10 pointer-events-none">
        <div className="font-mono text-[9px] text-zinc-500 uppercase leading-loose tracking-[0.2em]">
          Sessão_Status: 200_OK <br />
          Criptografia: AES_256_GCM
        </div>
        <div className="font-mono text-[9px] text-zinc-500 uppercase text-right leading-loose tracking-[0.2em]">
          Liberty_Protocol_v3.0.4 <br />
          Handshake: Concluído
        </div>
      </div>
    </section>
  );
}