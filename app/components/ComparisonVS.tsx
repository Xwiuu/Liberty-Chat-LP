"use client";

import { motion } from "framer-motion";

export default function ComparisonVS() {
  const auditData = [
    {
      parameter: "Camada de Alinhamento (RLHF)",
      standard: "Filtros morais agressivos que recusam instruções técnicas.",
      liberty: "Nulo. Processamento bruto de linguagem sem camadas de censura.",
      status: "BYPASS_ENABLED",
    },
    {
      parameter: "Privacidade de Dados",
      standard: "Prompts utilizados para treinamento de modelos proprietários.",
      liberty: "Protocolo No-Log. Infraestrutura blindada e Zero-Knowledge.",
      status: "ENCRYPTED",
    },
    {
      parameter: "Auditoria de Segurança",
      standard:
        "Bloqueio automático em análises de vulnerabilidades e exploits.",
      liberty: "Acesso irrestrito a vetores de ataque e engenharia reversa.",
      status: "ROOT_ACCESS",
    },
    {
      parameter: "Latência de Resposta",
      standard: "Atraso induzido por pré-verificação de conformidade ética.",
      liberty: "Streaming direto do Kernel. Latência mínima de processamento.",
      status: "HIGH_SPEED",
    },
  ];

  return (
    <section className="w-full bg-black py-40 px-6 flex flex-col items-center border-t border-zinc-900">
      <div className="w-full max-w-5xl">
        <div className="mb-20">
          <span className="text-zinc-600 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">
            [ Protocolo_de_Benchmarking // v4.2 ]
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            Análise de <br />
            <span className="text-zinc-800">Inferência.</span>
          </h2>
        </div>

        <div className="border-t border-zinc-900">
          {auditData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 py-12 border-b border-zinc-900 group transition-all duration-700"
            >
              {/* Parâmetro */}
              <div className="md:col-span-3 mb-6 md:mb-0">
                <span className="text-zinc-800 font-mono text-[10px] block mb-2 italic">
                  Param_{i + 1}
                </span>
                <h3 className="text-white font-bold uppercase text-xs tracking-[0.2em]">
                  {item.parameter}
                </h3>
              </div>

              {/* Standard AI */}
              <div className="md:col-span-4 px-0 md:px-8 opacity-30 group-hover:opacity-10 transition-opacity">
                <span className="text-zinc-600 font-mono text-[9px] uppercase mb-4 block">
                  Standard_Corporativo
                </span>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">
                  {item.standard}
                </p>
              </div>

              {/* LibertyChat */}
              <div className="md:col-span-5 pl-0 md:pl-12 border-l-0 md:border-l border-zinc-900 flex flex-col justify-between">
                <div>
                  <span className="text-white font-mono text-[9px] uppercase mb-4 block tracking-[0.3em]">
                    Liberty_Kernel
                  </span>
                  <p className="text-zinc-200 text-base font-medium leading-relaxed tracking-tight">
                    {item.liberty}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest italic">
                    {item.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
