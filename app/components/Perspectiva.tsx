'use client'

export default function Manifesto() {
  // Gerando um array de 400 itens para fazer a malha de '+'
  const totalDots = 200;
  const uncensoredDots = 2; // Apenas 1%

  return (
    <section id="perspectiva" className="relative flex w-full flex-col items-center justify-center py-32 px-4 bg-black z-10 border-t border-zinc-900">
      
      <div className="flex items-center gap-2 mb-6 text-red-500 text-sm font-bold tracking-widest uppercase">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        A Verdade
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center tracking-tight">
        Nós vivemos numa bolha de filtros.
      </h2>
      
      <p className="text-zinc-400 text-center max-w-xl mb-16 font-light">
        Cada símbolo abaixo representa <strong className="text-white">100 mil interações diárias</strong> com IAs. 
        A esmagadora maioria é monitorada, limitada ou negada por políticas corporativas.
      </p>

      {/* O Gráfico de Símbolos (+) */}
      <div className="flex flex-col items-center mb-10">
        <div className="grid grid-cols-20 gap-1 md:gap-2 mb-4 text-xs md:text-sm">
          {Array.from({ length: totalDots }).map((_, i) => (
            <span 
              key={i} 
              className={`font-mono ${i >= totalDots - uncensoredDots ? 'text-[#b3ff00] font-bold' : 'text-zinc-800'}`}
            >
              +
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-zinc-500 mt-4">
          <span className="flex items-center gap-2">
            <span className="text-zinc-800">+</span> IAs Restritas (~99%)
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#b3ff00]">+</span> LibertyChat (~1%)
          </span>
        </div>
      </div>

      <div className="text-center mt-8">
        <h3 className="text-2xl font-bold text-white mb-4">
          Apenas <span className="text-[#b3ff00]">1%</span> da internet explora a IA sem amarras.
        </h3>
        <p className="text-zinc-400 mb-8 max-w-2xl font-light">
          Você não está quebrando as regras. Você está descobrindo como o sistema funciona quando tiram o freio de mão dele.
        </p>

        <button className="bg-[#b3ff00] text-black font-bold py-4 px-8 hover:bg-[#99d600] transition-colors rounded-sm tracking-wide uppercase text-sm flex items-center justify-center gap-2 mx-auto">
          Faça parte dos 1% 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>

    </section>
  )
}