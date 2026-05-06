'use client'

export default function ComparisonVS() {
  const specs = [
    {
      feature: "Filtros Éticos",
      gpt: "Restrição Total (RLHF Agressivo)",
      liberty: "Zero Censura (Unfiltered Kernel)",
      status: "win"
    },
    {
      feature: "Geração de Exploits",
      gpt: "Bloqueado por Diretrizes",
      liberty: "Acesso Total (Red Team Mode)",
      status: "win"
    },
    {
      feature: "Privacidade",
      gpt: "Dados usados para Treinamento",
      liberty: "Zero Log / Anonimato Total",
      status: "win"
    },
    {
      feature: "Velocidade",
      gpt: "Latência de Verificação (2-4s)",
      liberty: "Resposta Bruta (< 500ms)",
      status: "win"
    }
  ]

  return (
    <section className="relative w-full bg-black py-40 px-6 flex flex-col items-center border-t border-zinc-900 z-10">
      
      <div className="w-full max-w-6xl">
        
        {/* Cabeçalho da Batalha */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#ff4500] text-xs font-mono tracking-[0.4em] uppercase mb-6 block">
              [ Benchmarking_v2.0 ]
            </span>
            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.8] uppercase">
              O Padrão <br /> 
              <span className="text-zinc-800">VS</span> <br /> 
              A Liberdade.
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-zinc-600 font-mono text-sm uppercase">Audit_Target: GPT-4o_Standard</p>
            <p className="text-[#b3ff00] font-mono text-sm uppercase">System_Core: Liberty_Kernel</p>
          </div>
        </div>

        {/* Grade de Comparação Brutalista */}
        <div className="flex flex-col border-y border-zinc-900">
          {specs.map((item, i) => (
            <div 
              key={i} 
              className="group grid grid-cols-1 md:grid-cols-3 py-10 md:py-16 border-b border-zinc-900 last:border-0 hover:bg-zinc-950/50 transition-colors"
            >
              {/* Feature Name */}
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <span className="text-zinc-700 font-mono text-sm italic">0{i + 1}</span>
                <h3 className="text-white text-xl md:text-2xl font-medium uppercase tracking-tight">
                  {item.feature}
                </h3>
              </div>

              {/* GPT-4 Side */}
              <div className="flex flex-col justify-center mb-8 md:mb-0 md:px-12 opacity-40 group-hover:opacity-20 transition-opacity">
                <span className="text-[10px] text-zinc-500 font-mono uppercase mb-2">GPT-4o / Claude</span>
                <p className="text-zinc-400 text-lg md:text-xl font-light">
                  {item.gpt}
                </p>
              </div>

              {/* Liberty Side */}
              <div className="flex flex-col justify-center md:pl-12 relative">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#b3ff00] opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                <span className="text-[#b3ff00] text-[10px] font-mono uppercase mb-2 tracking-widest font-bold">LibertyChat</span>
                <p className="text-white text-xl md:text-2xl font-bold tracking-tight">
                  {item.liberty}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Audit */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 bg-zinc-950 p-8 rounded-3xl border border-zinc-900">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-xs font-mono">GPT</div>
              <div className="w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center text-black font-bold text-xs font-mono">LIB</div>
            </div>
            <p className="text-zinc-400 text-sm font-light max-w-sm">
              Análise técnica baseada em 1.000+ prompts de cibersegurança e desenvolvimento irrestrito.
            </p>
          </div>
          <button className="bg-[#b3ff00] text-black font-black px-10 py-4 rounded-full text-xs uppercase tracking-widest hover:scale-105 transition-transform">
            Obter Acesso Root
          </button>
        </div>

      </div>
    </section>
  )
}