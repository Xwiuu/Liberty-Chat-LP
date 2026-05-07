"use client";

import { MouseEvent } from "react";

export default function Pricing() {

  // Efeito de luz que segue o mouse nas bordas
  const handleMouseMove = (e: MouseEvent) => {
    const cards = document.querySelectorAll(".pricing-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    });
  };

  const plans = [
    {
      name: "Gratuito",
      tier: "Lvl 01 // Discovery",
      price: "0",
      tokens: "1x Base",
      images: "0",
      history: "7 Dias",
      voice: "—",
      color: "zinc",
    },
    {
      name: "Básico",
      tier: "Lvl 02 // Operator",
      price: "39,90",
      tokens: "2.5x Perf",
      images: "15/mês",
      history: "30 Dias",
      voice: "—",
      color: "zinc",
    },
    {
      name: "Pro",
      tier: "Lvl 03 // Specialist",
      price: "79,90",
      tokens: "7.5x Power",
      images: "80/mês",
      history: "90 Dias",
      voice: "90 min",
      highlight: true,
      color: "lime",
    },
    {
      name: "Enterprise",
      tier: "Lvl 04 // Root",
      price: "1.000",
      tokens: "97.5x Kernel",
      images: "500/mês",
      history: "Infinito",
      voice: "Infinito",
      color: "zinc",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative w-full bg-black py-40 px-6 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Luz de fundo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 bg-[#b3ff00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="text-[#b3ff00] font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">
            [ Billing_Allocation_Matrix ]
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8]">
            Níveis de <br /> <span className="text-zinc-800">Privilégio.</span>
          </h2>
        </div>

        {/* Grid de Cards com Efeito de Borda */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card group relative p-px rounded-[2.5rem] bg-zinc-900/50 overflow-hidden transition-all duration-500
                ${plan.highlight ? "scale-105 z-20 shadow-[0_0_60px_rgba(179,255,0,0.15)]" : "hover:scale-102 z-10"}
              `}
            >
              {/* A Mágica do Glow (CSS Var) */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${plan.highlight ? "#b3ff00" : "#ffffff44"}, transparent 40%)`,
                }}
              />

              {/* Conteúdo do Card */}
              <div className="relative h-full bg-[#080808] rounded-[2.5rem] p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <p
                        className={`text-[10px] font-mono font-bold mb-1 ${plan.highlight ? "text-[#b3ff00]" : "text-zinc-600"}`}
                      >
                        {plan.tier}
                      </p>
                      <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">
                        {plan.name}
                      </h3>
                    </div>
                    {plan.highlight && (
                      <div className="w-2 h-2 rounded-full bg-[#b3ff00] animate-ping" />
                    )}
                  </div>

                  <div className="mb-12">
                    <div className="flex items-baseline gap-1">
                      <span className="text-zinc-500 text-sm font-mono">
                        R$
                      </span>
                      <span className="text-6xl font-black text-white tracking-tighter">
                        {plan.price}
                      </span>
                    </div>
                    <div className="h-1 w-full bg-zinc-900 mt-4 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${plan.highlight ? "w-full bg-[#b3ff00]" : "w-1/3 bg-zinc-700"}`}
                      />
                    </div>
                  </div>

                  <div className="space-y-5">
                    <Spec
                      label="Tokens_Capacity"
                      value={plan.tokens}
                      highlight={plan.highlight}
                    />
                    <Spec
                      label="Visual_Core"
                      value={plan.images}
                      highlight={plan.highlight}
                    />
                    <Spec
                      label="Data_Retention"
                      value={plan.history}
                      highlight={plan.highlight}
                    />
                    <Spec
                      label="Voice_Neural"
                      value={plan.voice}
                      highlight={plan.highlight}
                    />
                  </div>
                </div>

                <button
                  className={`w-full py-5 mt-12 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all
                  ${
                    plan.highlight
                      ? "bg-[#b3ff00] text-black shadow-[0_10px_20px_rgba(179,255,0,0.2)] hover:shadow-[0_15px_30px_rgba(179,255,0,0.4)] hover:-translate-y-1"
                      : "bg-zinc-900 text-zinc-400 hover:bg-white hover:text-black"
                  }
                `}
                >
                  {plan.highlight ? "Assumir Root" : "Injetar Acesso"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Audit sutil */}
        <div className="mt-20 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center opacity-30">
          <span className="text-[9px] font-mono text-zinc-500">
            ENCRYPTION: AES-256-GCM // NODE: GRAMADO_01
          </span>
          <span className="text-[9px] font-mono text-zinc-500 uppercase">
            Seu progresso é monitorado apenas por você.
          </span>
        </div>
      </div>
    </section>
  );
}

function Spec({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[9px] text-zinc-600 font-mono uppercase tracking-widest">
        {label}
      </span>
      <p
        className={`text-sm font-medium ${highlight ? "text-zinc-200" : "text-zinc-400"}`}
      >
        {value}
      </p>
    </div>
  );
}
