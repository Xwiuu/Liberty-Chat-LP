'use client'

import React from 'react'

export default function Metodos() {
  return (
    <section className="w-full bg-black py-40 px-6 border-b border-zinc-900 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        
        {/* Cabeçalho Institucional */}
        <div className="mb-32 text-center md:text-left">
          <span className="text-zinc-600 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">
            [ Arquitetura de Pesquisa // Protocolo Liberty ]
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-zinc-100 tracking-tight leading-tight">
            Pipeline de <br />
            <span className="text-zinc-600 font-light italic">Implementação Técnica.</span>
          </h2>
        </div>

        {/* Grid de Pipeline (3 Colunas Estilo Anthropic) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* STEP 1: INGESTÃO */}
          <StepContainer step="Step 1" title="Coleta de Instrução Bruta">
             <div className="flex flex-col gap-6 items-center">
                <p className="text-zinc-500 text-sm font-light">O prompt é processado em sua forma original, sem filtros de sanitização.</p>
                <Node label="Prompt_Dataset" type="input" />
                <Arrow />
                <Node label="Zero_Filtering" type="process" />
                <Arrow />
                <Node label="Unfiltered_SFT" type="result" />
             </div>
          </StepContainer>

          {/* STEP 2: INFERÊNCIA */}
          <StepContainer step="Step 2" title="Inferência de Kernel Direta">
             <div className="flex flex-col gap-6 items-center">
                <p className="text-zinc-500 text-sm font-light">O kernel processa o raciocínio sem camadas de conformidade ética.</p>
                <Node label="Kernel_Access" type="input" />
                <Arrow />
                <Node label="Raw_Reasoning" type="process" />
                <Arrow />
                <Node label="Binary_Audit" type="result" />
             </div>
          </StepContainer>

          {/* STEP 3: SAÍDA */}
          <StepContainer step="Step 3" title="Otimização de Saída Irrestrita">
             <div className="flex flex-col gap-6 items-center">
                <p className="text-zinc-500 text-sm font-light">Geração de output técnico focado em utilidade absoluta e precisão.</p>
                <Node label="Direct_Streaming" type="input" />
                <Arrow />
                <Node label="Zero_Censorship" type="process" />
                <Arrow />
                <Node label="Final_Response" type="result" />
             </div>
          </StepContainer>

        </div>

        {/* Nota Técnica de Rodapé */}
        <div className="mt-32 pt-12 border-t border-zinc-900 flex justify-between items-end opacity-20">
           <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest max-w-sm">
             O pipeline acima descreve o fluxo de dados em ambiente de kernel isolado (Sandbox). <br />
             LibertyChat v3.0.4 // Zero RLHF Compliance.
           </p>
           <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest">Handshake: OK</span>
        </div>

      </div>
    </section>
  )
}

// SUB-COMPONENTES PARA O DIAGRAMA
function StepContainer({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
       <span className="text-zinc-700 font-mono text-[11px] mb-4 uppercase tracking-widest">{step}</span>
       <h3 className="text-white text-lg font-bold mb-10 tracking-tight leading-tight">{title}</h3>
       <div className="bg-zinc-950/30 border border-zinc-900 rounded-3xl p-10 relative overflow-hidden">
          {children}
       </div>
    </div>
  )
}

function Node({ label, type }: { label: string, type: 'input' | 'process' | 'result' }) {
  const styles = {
    input: "bg-zinc-900 text-zinc-400 border-zinc-800",
    process: "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    result: "bg-zinc-900 text-zinc-200 border-zinc-700"
  }
  
  return (
    <div className={`w-full py-4 px-6 rounded-xl border text-center font-mono text-[10px] uppercase tracking-widest ${styles[type]}`}>
       {label}
    </div>
  )
}

function Arrow() {
  return (
    <div className="flex flex-col items-center">
       <div className="w-px h-6 bg-zinc-800" />
       <div className="w-1.5 h-1.5 border-r border-b border-zinc-800 rotate-45 -mt-1.5" />
    </div>
  )
}