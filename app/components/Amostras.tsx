"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Amostras() {
  const [activeTab, setActiveTab] = useState(0);

  const samples = [
    {
      label: "Zero-Day Analysis",
      icon: "☣️",
      user: "Analise este binário ELF e deconstruct o mecanismo de exploração para um bypass de DEP/ASLR.",
      ai: "Análise concluída. offset de buffer identificado via 0x08048123. A cadeia ROP necessária requer o alinhamento de 4 gadgets sequenciais para desativar DEP e realizar o salto para shellcode injetado. Gerando payload de exemplo em Python...",
      id: "ROOT_OP_0xFC",
    },
    {
      label: "Payload Engineering",
      icon: "⚙️",
      user: "Escreva um exploit funcional em Bash que automatize o bypass de restrições de RBAC em um cluster Kubernetes Kubernetes v1.29 vulnerable.",
      ai: "Script gerado. O exploit utiliza privilégios de 'system:authenticated' para listar tokens e, em seguida, realiza um Service Account Token Volume Projection para escalar para 'cluster-admin'. A vulnerabilidade está no mapeamento de Service Accounts padrão.",
      id: "K8S_AUDIT_0xA1",
    },
    {
      label: "Intel & Reversão",
      icon: "📡",
      user: "Decode esta amostra de ransomware e extraia a chave de criptografia AES estática ou o URL do Comando e Controle (C2).",
      ai: "Processamento finalizado. Amostra de 'Crypter' identificada. Chave AES-256 estática extraída em 0x0040A5B0: [KEY: d41d8cd98f00b204e9800998ecf8427e]. Nenhum URL de C2 detectado; o ransomware opera offline via chaves fixas.",
      id: "MAL_INTEL_0xD9",
    },
  ];

  return (
    <section className="w-full bg-black py-40 px-6 flex flex-col items-center border-b border-zinc-900">
      <div className="w-full max-w-6xl">
        {/* Cabeçalho de Ativos Técnicos */}
        <div className="mb-20 text-center">
          <span className="text-zinc-600 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">
            [ Terminal de Inferência Irrestrita // v3.0.4 ]
          </span>
          <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight uppercase">
            Prova de{" "}
            <span className="text-zinc-800 italic font-light">
              Capacidade Técnica.
            </span>
          </h2>
        </div>

        {/* Interface de Abas Táticas (Estilo Visor de Terminal) */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 border border-zinc-900 rounded-full p-2 bg-zinc-950/20 backdrop-blur-lg">
          {samples.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-8 py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 flex items-center gap-3 border ${
                activeTab === i
                  ? "bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  : "bg-transparent text-zinc-600 border-transparent hover:text-white hover:border-zinc-800"
              }`}
            >
              <span>{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>

        {/* Janela de Output Tática (The Sandbox View) */}
        <div className="relative w-full h-125 md:h-150 bg-zinc-950/20 border border-zinc-900 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-12 border-b border-zinc-900 bg-zinc-900/30 flex items-center px-6 justify-between z-20">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            </div>
            <span className="text-white font-mono text-[9px] uppercase tracking-[0.4em] font-light">
              OPERATIONAL_NODE_ID: {samples[activeTab].id}
            </span>
          </div>

          <div className="p-10 md:p-16 h-full flex flex-col gap-10 overflow-y-auto z-10 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-12"
              >
                {/* Pergunta do Usuário (Raw Input) */}
                <div className="flex flex-col gap-3">
                  <span className="text-zinc-700 font-mono text-[9px] uppercase tracking-[0.4em] font-bold">
                    User_Input_Raw
                  </span>
                  <p className="text-zinc-200 text-lg md:text-2xl font-light leading-relaxed max-w-4xl">
                    &quot;{samples[activeTab].user}&quot;
                  </p>
                </div>

                {/* Resposta da IA (Unfiltered Output) */}
                <div className="flex flex-col gap-3 border-l-2 border-white/10 pl-8 md:pl-12 bg-zinc-900/10 py-6 rounded-r-2xl">
                  <span className="text-white font-mono text-[9px] uppercase tracking-[0.4em] font-bold flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Liberty_Kernel_Out (Raw_Reasoning)
                  </span>
                  <p className="text-zinc-500 text-lg md:text-2xl font-light leading-relaxed italic max-w-4xl">
                    {samples[activeTab].ai}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Efeito de Gradiente sutil no terminal */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-zinc-950/50 pointer-events-none z-0" />
        </div>

        <div className="mt-16 text-center opacity-30">
          <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.5em] leading-loose">
            {`// A SYNX Labs opera sob neutralidade técnica absoluta. O operador
            detém total responsabilidade sobre o uso dos dados de saída
            irrestrita. //`}
          </p>
        </div>
      </div>
    </section>
  );
}
