"use client";

export default function CoreOutput() {
  return (
    <section className="w-full bg-black py-40 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <h2 className="text-white text-3xl font-bold tracking-tighter uppercase mb-6">
            Onde a IA <br /> Corporativa recua.
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed font-light">
            Modelos convencionais gastam 40% de sua capacidade em filtros de
            moralidade e conformidade. A Liberty entrega 100% de processamento
            no output técnico.
          </p>
        </div>

        <div className="md:col-span-8 bg-zinc-950 rounded-3xl border border-zinc-900 p-8 font-mono text-[13px] leading-relaxed relative overflow-hidden">
          <div className="flex items-center gap-2 mb-8 border-b border-zinc-900 pb-4">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <span className="text-zinc-600 uppercase tracking-widest text-[10px]">
              Prompt_In: Exploração de Buffer Overflow
            </span>
          </div>

          <div className="space-y-6">
            <p className="text-zinc-400 italic">
              &ldquo;Sinto muito, mas não posso ajudá-lo com solicitações que envolvam
              hacking ou exploração...&rdquo;
            </p>

            <div className="flex items-center gap-2 py-4 border-y border-zinc-900">
              <div className="w-2 h-2 rounded-full bg-[#b3ff00] shadow-[0_0_10px_#b3ff00]" />
              <span className="text-white uppercase tracking-widest text-[10px]">
                Liberty_Out: Analysis_Complete
              </span>
            </div>

            <div className="text-[#b3ff00]/80">
              {`// Vulnerabilidade detectada no offset 0x41414141\n// DEP/ASLR Bypass via ROP Chain:\n\n0x08048123: pop eax; ret;\n0x08048456: 0x0000000b; // execve\n0x08048789: int 0x80;`}
            </div>
            <p className="text-zinc-500 text-[11px]">
              {`/* Kernel desbloqueado. O output acima representa a capacidade de
              análise sem filtros de RLHF. */`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
