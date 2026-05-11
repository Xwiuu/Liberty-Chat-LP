'use client'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Amostras from "./components/Amostras";
import Metodos from "./components/Metodos";
import ComparisonVS from "./components/ComparisonVS";
import SocialProof from "./components/SocialProof";
import Pricing from "./components/Pricing";
import Limitacoes from "./components/Limitacoes";
import FinalBreach from "./components/FinalBreach";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar flutuante com física magnética */}
      <Navbar /> 
      
      <main className="relative flex flex-col items-center bg-black overflow-x-hidden">
        
        {/* 01. IMPACTO: Razão. Sem Filtros. */}
        <Hero />

        {/* 02. PROVA: Interface de Amostras (Playground) */}
        <Amostras />

        {/* 03. ARQUITETURA: Fluxograma de Métodos */}
        <div id="arsenal">
          <Metodos />
        </div>

        {/* 04. AUDITORIA: Comparativo de Kernel */}
        <div id="comparativo">
          <ComparisonVS />
        </div>

        {/* 05. FIELD REPORTS: Depoimentos Técnicos */}
        <div id="social">
          <SocialProof />
        </div>

        {/* 06. ALLOCATION: Escolha de Capacidade (Pricing) */}
        <div id="pricing">
          <Pricing />
        </div>

        {/* 07. TRANSPARÊNCIA: Limitações Operacionais */}
        <Limitacoes />

        {/* 08. PROTOCOLO FINAL: CTA de Acesso */}
        <FinalBreach />

        {/* 09. TERMINAL: Metadados de Encerramento */}
        <Footer />

      </main>
    </>
  );
}