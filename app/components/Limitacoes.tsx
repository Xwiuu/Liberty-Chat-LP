'use client'

import { motion } from 'framer-motion'

export default function Limitacoes() {
  const limits = [
    {
      label: "Fatos e Alucinação",
      text: "Como qualquer modelo de linguagem, a Liberty pode gerar informações factualmente incorretas. A verificação humana é obrigatória para implementações críticas."
    },
    {
      label: "Neutralidade Ética",
      text: "O kernel não possui filtros de conformidade. Ele gerará outputs tecnicamente precisos, independente da natureza do prompt. O operador detém total responsabilidade legal."
    },
    {
      label: "Treinamento Estático",
      text: "O conhecimento do modelo é baseado em um snapshot de dados. Eventos de Zero-Day ocorridos após a última atualização de pesos podem não ser mapeados nativamente."
    }
  ]

  return (
    <section className="w-full bg-black py-40 px-6 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        
        {/* Cabeçalho de Transparência */}
        <div className="mb-24 text-left">
          <span className="text-zinc-700 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">
            [ Parâmetros_de_Segurança // Auditoria ]
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter uppercase leading-none">
            Limitações <br />
            <span className="text-zinc-800 italic">Operacionais.</span>
          </h2>
        </div>

        {/* Lista de Auditoria Minimalista */}
        <div className="space-y-16">
          {limits.map((limit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group border-l border-zinc-900 pl-8 md:pl-12 py-4 hover:border-white transition-colors duration-500"
            >
              <h3 className="text-zinc-500 font-mono text-[11px] uppercase tracking-[0.3em] mb-4 group-hover:text-white transition-colors">
                LMT_0{i + 1}{' // '}{limit.label}
              </h3>
              <p className="text-zinc-600 text-lg md:text-xl font-light leading-relaxed max-w-3xl group-hover:text-zinc-400 transition-colors">
                {limit.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer Técnico Final */}
        <div className="mt-32 p-10 bg-zinc-950/50 border border-zinc-900 rounded-2xl">
           <p className="text-zinc-500 font-mono text-[10px] uppercase leading-loose tracking-widest text-center">
             A LibertyChat é uma ferramenta de pesquisa avançada. <br />
             O uso do kernel implica na aceitação dos protocolos de risco e autonomia do sistema.
           </p>
        </div>

      </div>
    </section>
  )
}