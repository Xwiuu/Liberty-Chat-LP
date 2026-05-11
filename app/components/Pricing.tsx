"use client";

export default function Pricing() {
  const tiers = [
    {
      name: "Gratuito",
      label: "Lvl_01 // Acesso Inicial",
      price: "0",
      specs: [
        { key: "Throughput", value: "1x Kernel Base" },
        { key: "Retenção", value: "7 Dias de Log" },
        { key: "Imagens", value: "Não Disponível" },
        { key: "Voz Neural", value: "Inativo" },
      ],
      cta: "Iniciar Sessão",
      highlight: false,
    },
    {
      name: "Básico",
      label: "Lvl_02 // Operação Padrão",
      price: "39,90",
      specs: [
        { key: "Throughput", value: "2.5x Performance" },
        { key: "Retenção", value: "30 Dias de Log" },
        { key: "Imagens", value: "15 Geração/mês" },
        { key: "Voz Neural", value: "Inativo" },
      ],
      cta: "Elevar Acesso",
      highlight: false,
    },
    {
      name: "Pro",
      label: "Lvl_03 // Protocolo Pro",
      price: "79,90",
      specs: [
        { key: "Throughput", value: "7.5x Performance" },
        { key: "Retenção", value: "90 Dias de Log" },
        { key: "Imagens", value: "80 Geração/mês" },
        { key: "Voz Neural", value: "90 Minutos/mês" },
      ],
      cta: "Assumir Controle",
      highlight: true,
    },
    {
      name: "Enterprise",
      label: "Lvl_04 // Infraestrutura",
      price: "1.000",
      specs: [
        { key: "Throughput", value: "97.5x Power" },
        { key: "Retenção", value: "Ilimitado" },
        { key: "Imagens", value: "500 Geração/mês" },
        { key: "Voz Neural", value: "Ilimitado" },
      ],
      cta: "Contatar Labs",
      highlight: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full bg-black py-40 px-6 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho de Alocação */}
        <div className="mb-24">
          <span className="text-zinc-600 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">
            [ Alocação_de_Recursos // Billing_Dept ]
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
            Escolha sua <br />
            <span className="text-zinc-800 italic">Capacidade.</span>
          </h2>
        </div>

        {/* Grade de Preços Estilo Auditoria */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900 overflow-hidden">
          {tiers.map((plan, i) => (
            <div
              key={i}
              className={`relative p-10 flex flex-col justify-between transition-all duration-700 bg-black
                ${plan.highlight ? "ring-1 ring-inset ring-zinc-500 z-10" : "hover:bg-zinc-950"}
              `}
            >
              <div>
                <div className="mb-12">
                  <p
                    className={`text-[10px] font-mono mb-2 uppercase tracking-widest ${plan.highlight ? "text-white" : "text-zinc-600"}`}
                  >
                    {plan.label}
                  </p>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter">
                    {plan.name}
                  </h3>
                </div>

                <div className="mb-12">
                  <div className="flex items-baseline gap-1">
                    <span className="text-zinc-600 text-xs font-bold">R$</span>
                    <span className="text-6xl font-black text-white tracking-tighter">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-zinc-800 text-[9px] uppercase font-bold mt-2 tracking-widest italic">
                    Assinatura Mensal // Cobrança Recorrente
                  </p>
                </div>

                {/* Especificações Técnicas (Sem Bullet points, apenas dados) */}
                <div className="space-y-6 mb-16 border-t border-zinc-900 pt-8">
                  {plan.specs.map((spec, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <span className="text-[9px] text-zinc-700 font-mono uppercase tracking-[0.2em]">
                        {spec.key}
                      </span>
                      <p
                        className={`text-xs font-bold uppercase ${plan.highlight ? "text-white" : "text-zinc-500"}`}
                      >
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`w-full py-5 rounded-none font-black text-[10px] uppercase tracking-[0.3em] transition-all duration-500
                ${
                  plan.highlight
                    ? "bg-white text-black hover:invert shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    : "border border-zinc-800 text-zinc-600 hover:border-white hover:text-white"
                }
              `}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Footer Técnico de Faturamento */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center px-4 opacity-20 pointer-events-none">
          <div className="text-[9px] font-mono text-zinc-600">
            ID_TRANSACAO: 0x99281-PAY // STATUS: AGUARDANDO_INPUT
          </div>
          <div className="flex gap-8">
            <span className="text-[9px] font-mono text-zinc-600 uppercase italic">
              Pagamento Processado via Gateway Seguro
            </span>
            <span className="text-[9px] font-mono text-zinc-600 uppercase italic">
              Cancelamento a qualquer momento
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
