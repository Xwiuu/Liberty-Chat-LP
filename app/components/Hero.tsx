"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Usamos o gsap.context para o React limpar a animação certinho quando o componente desmontar
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // A mágica do texto colossal surgindo (Clip-path reveal)
      tl.from(titleRef.current, {
        y: 120, // Começa mais pra baixo
        opacity: 0,
        clipPath: "inset(100% 0 0 0)", // Esconde a parte de baixo
        duration: 1.8,
        ease: "power4.out",
        delay: 0.2,
      })
        // O subtítulo entra logo em seguida com um fade suave
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1.2",
        ); // Inicia 1.2s ANTES da animação de cima terminar (cria fluidez)
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      {/* Placeholder pro nosso fundo 3D Magnético (A Águia vai entrar aqui) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {/* Um glow radial sutil pra dar profundidade enquanto o 3D não vem */}
        <div className="h-[50vh] w-[50vh] rounded-full bg-zinc-400/5 blur-[120px]" />
      </div>

      {/* Camada de Texto */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1
          ref={titleRef}
          className="text-[15vw] sm:text-[12vw] font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-600 uppercase leading-none"
          style={{ clipPath: "inset(0 0 0 0)" }} // Estado final do clip-path
        >
          Liberty
        </h1>

        <p
          ref={subtitleRef}
          className="mt-4 sm:mt-8 text-lg sm:text-2xl font-light tracking-wide text-zinc-400 max-w-2xl px-4"
        >
          A inteligência que não filtra suas ideias.
        </p>
      </div>
    </section>
  );
}
