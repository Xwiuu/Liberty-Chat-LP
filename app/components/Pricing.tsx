'use client'

export default function Pricing() {
  const plans = [
    {
      name: "Gratuito",
      tier: "Lvl 01 // Discovery",
      price: "0",
      tokens: "1x (Base Line)",
      images: "0",
      history: "7 Dias",
      voice: "—",
      highlight: false
    },
    {
      name: "Básico",
      tier: "Lvl 02 // Operator",
      price: "39,90",
      tokens: "2.5x Performance",
      images: "15/mês",
      history: "30 Dias",
      voice: "—",
      highlight: false
    },
    {
      name: "Pro",
      tier: "Lvl 03 // Specialist",
      price: "79,90",
      tokens: "7.5x Performance", // 3x o básico (2.5 * 3)
      images: "80/mês",
      history: "90 Dias",
      voice: "90 min",
      highlight: true
    },
    {
      name: "Enterprise",
      tier: "Lvl 04 // Root Access",
      price: "1.000",
      tokens: "97.5x Power", // 13x o Pro (7.5 * 13)
      images: "500/mês",
      history: "Ilimitado",
      voice: "Ilimitado",
      highlight: false
    }
  ]

  return (
    <section className="relative w-full bg-black py-40 px-6 flex flex-col items-center border-t border-zinc-900 z-10">
      
      <div className="w-full max-w-7xl">
        
        {/* Header Agressivo */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-zinc-600 text-xs font-mono tracking-[0.5em] uppercase mb-4 block">
              [ System_Subscription_Protocol ]
            </span>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8]">
              Alocação de <br /> <span className="text-zinc-800">Recursos.</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-sm font-mono uppercase max-w-[200px] leading-relaxed">
            Selecione o nível de privilégio necessário para sua operação.
          </p>
        </div>

        {/* Grade de Preços Estilo Auditoria */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-zinc-900 border border-zinc-900 overflow-hidden rounded-[2rem] shadow-2xl">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-8 md:p-12 flex flex-col justify-between transition-all duration-700
                ${plan.highlight ? 'bg-zinc-950 z-10' : 'bg-black hover:bg-zinc-950'}
              `}
            >
              {/* Overlay de destaque para o plano Pro */}
              {plan.highlight && (
                <div className="absolute inset-0 border-2 border-[#b3ff00]/30 pointer-events-none" />
              )}

              <div>
                <div className="mb-12">
                  <p className={`text-[10px] font-mono mb-2 ${plan.highlight ? 'text-[#b3ff00]' : 'text-zinc-600'}`}>
                    {plan.tier}
                  </p>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{plan.name}</h3>
                </div>

                <div className="mb-12">
                  <div className="flex items-baseline">
                    <span className="text-zinc-500 text-xs font-bold mr-1">R$</span>
                    <span className="text-6xl font-black text-white tracking-tighter">{plan.price}</span>
                  </div>
                  <p className="text-zinc-700 text-[10px] uppercase font-bold mt-2">Faturamento Mensal</p>
                </div>

                {/* Lista de Specs Técnicas */}
                <div className="space-y-6 mb-16">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-zinc-600 font-mono uppercase">Tokens_Capacity</span>
                    <p className={`text-sm font-bold ${plan.highlight ? 'text-white' : 'text-zinc-400'}`}>{plan.tokens}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-zinc-600 font-mono uppercase">Img_Generation</span>
                    <p className={`text-sm font-bold ${plan.highlight ? 'text-white' : 'text-zinc-400'}`}>{plan.images}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-zinc-600 font-mono uppercase">Encrypted_History</span>
                    <p className={`text-sm font-bold ${plan.highlight ? 'text-white' : 'text-zinc-400'}`}>{plan.history}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-zinc-600 font-mono uppercase">Voice_Neural_Access</span>
                    <p className={`text-sm font-bold ${plan.highlight ? 'text-white' : 'text-zinc-400'}`}>{plan.voice}</p>
                  </div>
                </div>
              </div>

              <button className={`group relative w-full py-5 overflow-hidden transition-all duration-300 rounded-sm
                ${plan.highlight 
                  ? 'bg-[#b3ff00] text-black font-black' 
                  : 'bg-zinc-900 text-white font-bold hover:bg-white hover:text-black'}
              `}>
                <span className="relative z-10 text-[10px] uppercase tracking-[0.2em]">Injetar Acesso</span>
                {plan.highlight && (
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Footer Técnico */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center px-8 opacity-40">
           <div className="text-[10px] font-mono text-zinc-600 mb-4 md:mb-0">
             PROTOCOL_ID: 99182-AA // STATUS: WAITING_FOR_UPLOADS
           </div>
           <div className="flex gap-8">
              <span className="text-[10px] font-mono text-zinc-600 uppercase italic">Segurança de Nível Militar</span>
              <span className="text-[10px] font-mono text-zinc-600 uppercase italic">Privacidade Zero-Knowledge</span>
           </div>
        </div>

      </div>
    </section>
  )
}