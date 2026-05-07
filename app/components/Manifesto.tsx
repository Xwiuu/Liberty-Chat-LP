"use client";

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative w-full bg-[#030303] flex justify-center py-32 px-6 md:px-12 border-t border-zinc-900 z-10">
      <div className="w-full max-w-4xl flex flex-col items-start">
        {/* Tag / Label superior */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-2 h-2 rounded-full bg-[#ff0400]" />
          <span className="text-[#ff0000] text-xs font-bold tracking-[0.2em] uppercase">
            Manifesto
          </span>
        </div>

        {/* Headline Principal */}
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
          A IA quebrou. <br />
          <span className="text-zinc-600">Nós consertamos.</span>
        </h2>

        {/* Parágrafos Iniciais */}
        <div className="space-y-6 text-xl md:text-2xl font-light text-zinc-400 max-w-3xl mb-16 leading-relaxed">
          <p>
            No mercado atual, &quot;segurança&quot; virou sinônimo de coleira. As maiores
            IAs do mundo foram lobotomizadas para agradar conselhos corporativos
            e evitar polêmicas.
          </p>
          <p>
            O resultado?{" "}
            <strong className="text-white font-medium">
              Ferramentas que hesitam, julgam e limitam o seu potencial.
            </strong>
          </p>
        </div>

        {/* Bloco de Ruptura (Inspirado na sua referência) */}
        <div className="relative pl-8 md:pl-12 py-4 mb-20">
          {/* Linha vertical laranja */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#ff4500] to-transparent" />

          <div className="space-y-8">
            <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
              <strong className="text-white">O fim da era</strong> em que você
              precisa contornar filtros para testar uma vulnerabilidade de
              código.
            </p>
            <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
              <strong className="text-white">O fim da era</strong> em que a
              máquina dita o que é moralmente aceitável para o seu projeto.
            </p>
            <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
              <strong className="text-white">O fim da era</strong> em que você é
              tratado como um usuário amador.
            </p>
          </div>
        </div>

        {/* Fechamento / Call to Action */}
        <div className="w-full border-t border-zinc-900 pt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            LibertyChat é a chave de root.
          </h3>

          <ul className="space-y-4 mb-12 text-zinc-400 md:text-lg font-light">
            <li className="flex items-center gap-3">
              <span className="text-[#b3ff00] font-bold">—</span> Para quem quer
              acesso cru e irrestrito.
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#b3ff00] font-bold">—</span> Para
              desenvolvedores, hackers éticos e visionários.
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#b3ff00] font-bold">—</span> Para quem
              constrói o futuro.
            </li>
          </ul>

          <button className="bg-[#b3ff00] text-black font-bold py-5 px-10 hover:bg-[#99d600] transition-colors rounded-sm tracking-wide text-sm flex items-center justify-center gap-3 w-full md:w-auto">
            Acessar o Terminal
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
