"use client";

export default function FinalBreach() {
  return (
    <section id="finalbreach" className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden border-t border-zinc-900">
      {/* Efeito de Scanline de fundo */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%]" />

      <div className="relative z-10 text-center px-6">
        <span className="text-[#b3ff00] font-mono text-xs tracking-[0.6em] uppercase mb-8 block animate-pulse">
          [ Awaiting_Command ]
        </span>

        <h2 className="text-5xl md:text-[9vw] font-black text-white tracking-tighter leading-none uppercase mb-12">
          Assuma o <br /> <span className="text-zinc-800">Controle.</span>
        </h2>

        <p className="text-zinc-500 max-w-lg mx-auto mb-16 font-light text-lg md:text-xl">
          O sistema está online. Você vai continuar filtrado ou vai injetar a
          liberdade no seu workflow?
        </p>

        <button className="group relative px-12 py-6 bg-white text-black font-black uppercase tracking-widest text-sm rounded-full overflow-hidden hover:scale-110 transition-transform duration-500 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
          <span className="relative z-10 italic">Estabelecer Conexão Root</span>
          <div className="absolute inset-0 bg-[#b3ff00] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </button>
      </div>

      {/* Decoração Tech nos cantos */}
      <div className="absolute bottom-10 left-10 font-mono text-[10px] text-zinc-800 hidden md:block">
        ESTABLISHED_CONNECTION // 200_OK <br />
        ENCRYPTED_TUNNEL: AES_256
      </div>

      <div className="absolute bottom-10 right-10 font-mono text-[10px] text-zinc-800 hidden md:block text-right">
        UPLOADING_CONSCIOUSNESS... <br />
        NO_BACK_DOORS_DETECTED
      </div>
    </section>
  );
}
