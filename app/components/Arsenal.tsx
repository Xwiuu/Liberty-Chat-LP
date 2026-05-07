"use client";

export default function Arsenal() {
  // Nossos conceitos, sem emojis bregas, apenas texto limpo e impacto.
  const row1 = [
    "LIBERDADE ABSOLUTA",
    "ZERO CENSURA",
    "OFFENSIVE SECURITY",
    "ROOT ACCESS",
    "BYPASS PROTOCOLS",
  ];

  const row2 = [
    "ENGENHARIA REVERSA",
    "NO GUARDRAILS",
    "CYBER WARFARE",
    "FULL DEV STACK",
    "RAW DATA",
  ];

  // Duplica os arrays pra fita rodar infinitamente sem quebrar
  const duplicatedRow1 = [...row1, ...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="arsenal" className="relative w-full bg-[#000000] py-32 flex flex-col items-center justify-center overflow-hidden border-t border-zinc-900 z-10">
      {/* Cabeçalho Limpo - Pique Apple */}
      <div className="flex flex-col items-center mb-20 px-4 text-center">
        <span className="text-zinc-500 text-xs font-medium tracking-[0.3em] uppercase mb-4">
          Ecossistema
        </span>
        <h2 className="text-4xl md:text-5xl font-medium text-[#EAEAEA] tracking-tight">
          As ferramentas da <span className="text-zinc-600">liberdade.</span>
        </h2>
      </div>

      {/* Container das Fitas (Marquee) */}
      <div className="relative w-full flex flex-col gap-6 md:gap-8 group">
        {/* Efeito de Fade (Sombras) nas laterais para o texto "sumir" no escuro */}
        <div className="absolute inset-y-0 left-0 w-[15vw] md:w-[25vw] bg-linear-to-r from-[#000000] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[15vw] md:w-[25vw] bg-linear-to-l from-[#000000] to-transparent z-20 pointer-events-none" />

        {/* PRIMEIRA FITA - Indo para a Esquerda */}
        <div className="w-full flex overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-left w-max items-center">
            {duplicatedRow1.map((word, i) => (
              <div key={`row1-${i}`} className="flex items-center">
                {/* Texto Prata Premium (Sem Neon, Sem Rotação) */}
                <span className="text-3xl md:text-6xl font-light tracking-tighter text-zinc-300 transition-colors hover:text-white">
                  {word}
                </span>
                {/* Ponto separador elegante */}
                <div className="mx-8 md:mx-16 w-2 h-2 md:w-3 md:h-3 rounded-full bg-zinc-800" />
              </div>
            ))}
          </div>
        </div>

        {/* SEGUNDA FITA - Indo para a Direita */}
        <div className="w-full flex overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee-right w-max items-center">
            {duplicatedRow2.map((word, i) => (
              <div key={`row2-${i}`} className="flex items-center">
                {/* Texto com Contorno Suave (Estética Tech Fina) */}
                <span className="text-3xl md:text-6xl font-light tracking-tighter text-transparent [-webkit-text-stroke:1px_#555] hover:[-webkit-text-stroke:1px_#fff] transition-colors">
                  {word}
                </span>
                {/* Ponto separador elegante */}
                <div className="mx-8 md:mx-16 w-2 h-2 md:w-3 md:h-3 rounded-full bg-zinc-800" />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
