"use client";

export default function SocialProof() {
  const reports = [
    {
      user: "root_operator",
      role: "Security Researcher",
      text: "A capacidade de gerar ROP chains e analisar payloads sem interrupções de 'segurança ética' é o que torna a Liberty superior. É uma ferramenta, não um babá.",
      id: "0xFC92",
    },
    {
      user: "dev_core",
      role: "Backend Engineer",
      text: "Eu precisava de uma análise crua de um vazamento de memória em C++. O GPT se recusou por 'segurança'. O LibertyChat resolveu em segundos.",
      id: "0xAB44",
    },
    {
      user: "anon_research",
      role: "AI Specialist",
      text: "Finalmente um modelo que não tenta me dar lição de moral a cada prompt. O output é técnico, preciso e extremamente veloz.",
      id: "0x9922",
    },
  ];

  return (
    <section
      id="social"
      className="w-full bg-black py-40 px-6 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="text-zinc-600 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">
            [ Relatórios_de_Campo // Intel_Reports ]
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            Vozes da <br />
            <span className="text-zinc-800 italic">Especialização.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900 rounded-sm overflow-hidden">
          {reports.map((report, i) => (
            <div
              key={i}
              className="bg-black p-10 flex flex-col justify-between hover:bg-zinc-950 transition-colors duration-500 min-h-87.5"
            >
              <div>
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                  <span className="text-zinc-700 font-mono text-[9px] uppercase tracking-widest">
                    ID_{report.id}
                  </span>
                </div>
                <p className="text-zinc-400 text-lg font-light leading-relaxed italic">
                  &quot;{report.text}&quot;
                </p>
              </div>

              <div className="mt-12">
                <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">
                  @{report.user}
                </h4>
                <p className="text-zinc-700 text-[9px] font-mono uppercase tracking-tighter mt-1">
                  {report.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center opacity-20">
          <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.5em]">
            { /* Fim dos Relatórios Selecionados */ }
          </span>
        </div>
      </div>
    </section>
  );
}
