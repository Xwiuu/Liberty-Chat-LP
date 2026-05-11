'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-black py-20 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Topo do Footer: Branding & Navegação Minimalista */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              <span className="text-zinc-100 font-medium tracking-tighter text-xl uppercase italic">
                Liberty<span className="text-zinc-700">Chat</span>
              </span>
            </div>
            <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.4em]">
              Arquitetura de Inteligência Irrestrita // v3.0.4
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <FooterLink href="#arsenal" label="Tecnologia" />
            <FooterLink href="#comparativo" label="Benchmarks" />
            <FooterLink href="#pricing" label="Recursos" />
            <FooterLink href="#" label="Documentação" />
          </div>
        </div>

        {/* Grade de Metadados (A cara da Apple/Anthropic) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 border-t border-zinc-900 pt-16">
          <div className="flex flex-col gap-2">
            <span className="text-zinc-800 font-mono text-[9px] uppercase tracking-widest font-bold">Node_Origin</span>
            <p className="text-zinc-500 font-mono text-[10px] uppercase">RS_Canela_BR</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-zinc-800 font-mono text-[9px] uppercase tracking-widest font-bold">Encryption</span>
            <p className="text-zinc-500 font-mono text-[10px] uppercase">AES_256_GCM</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-zinc-800 font-mono text-[9px] uppercase tracking-widest font-bold">Kernel_Mode</span>
            <p className="text-white font-mono text-[10px] uppercase tracking-tighter">Unfiltered_Stable</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-zinc-800 font-mono text-[9px] uppercase tracking-widest font-bold">Latency</span>
            <p className="text-zinc-500 font-mono text-[10px] uppercase">~240ms_Response</p>
          </div>
        </div>

        {/* Base: Copyright e Assinatura */}
        <div className="mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 opacity-30">
          <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.2em] leading-loose">
            © {currentYear} LibertyChat Labs. <br />
            Processamento de linguagem em ambiente isolado.
          </p>
          <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.2em] text-right">
            Projetado pela <span className="text-white font-bold italic">SYNX Labs</span> <br />
            Deep_Reasoning_Engine
          </p>
        </div>

      </div>
    </footer>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a 
      href={href} 
      className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] hover:text-white transition-all duration-300 relative group"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500" />
    </a>
  )
}