"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black py-12 px-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#b3ff00] rounded-full animate-pulse" />
          <span className="text-white font-bold tracking-tighter text-xl">
            LIBERTYCHAT
          </span>
        </div>
        <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
          © {currentYear} {/* Desenvolvido por SYNX Labs */}
        </p>
      </div>

      <div className="flex gap-12">
        <div className="flex flex-col gap-2">
          <span className="text-zinc-500 font-mono text-[10px] uppercase">
            Social
          </span>
          <a
            href="#"
            className="text-white text-xs hover:text-[#b3ff00] transition-colors"
          >
            Twitter (X)
          </a>
          <a
            href="#"
            className="text-white text-xs hover:text-[#b3ff00] transition-colors"
          >
            Discord
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-zinc-500 font-mono text-[10px] uppercase">
            Legal
          </span>
          <a
            href="#"
            className="text-white text-xs hover:text-[#b3ff00] transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-white text-xs hover:text-[#b3ff00] transition-colors"
          >
            Terms
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-end gap-2">
        <span className="text-zinc-500 font-mono text-[10px] uppercase">
          Node_Location
        </span>
        <span className="text-white text-xs font-mono">
          Canela, RS // 29.36° S, 50.81° W
        </span>
        <div className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-[#b3ff00] font-mono mt-2">
          SYSTEM_STATUS: OPERATIONAL
        </div>
      </div>
    </footer>
  );
}
