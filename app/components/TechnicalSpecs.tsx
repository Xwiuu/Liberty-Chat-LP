"use client";

export default function TechnicalSpecs() {
  return (
    <section className="w-full bg-black py-40 px-6 flex flex-col items-center border-t border-zinc-900" id="arsenal">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="mb-24">
          <span className="text-zinc-600 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">
            [ System_Specifications // v3.0 ]
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none">
            Arsenal <br />
            <span className="text-zinc-800">Técnico.</span>
          </h2>
        </div>

        {/* Placeholder for Technical Specs content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 border border-zinc-900 rounded-2xl bg-zinc-950/50">
            <h3 className="text-white font-bold uppercase text-sm tracking-widest mb-4">Kernel Unrestricted</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Processamento direto sem camadas de filtragem RLHF. Acesso total aos pesos do modelo para inferência bruta.
            </p>
          </div>
          <div className="p-8 border border-zinc-900 rounded-2xl bg-zinc-950/50">
            <h3 className="text-white font-bold uppercase text-sm tracking-widest mb-4">Zero-Knowledge Infrastructure</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Sua identidade e seus prompts nunca saem do túnel criptografado. Nenhum log, nenhum rastreio.
            </p>
          </div>
        </div>

        {/* Audit Section Link or inclusion if needed */}
        <div className="mt-24">
           {/* Se o usuário quiser o ComparisonVS aqui dentro também, ele já está importado */}
        </div>
      </div>
    </section>
  );
}
