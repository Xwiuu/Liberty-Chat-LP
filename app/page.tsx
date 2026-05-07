import Navbar from "./components/Navbar"; // 1. Importa a Navbar
import Hero from "./components/Hero";
import ChatDemo from "./components/ChatDemo";
import Perspectiva from "./components/Perspectiva";
import Manifesto from "./components/Manifesto";
import Arsenal from "./components/Arsenal";
import Diferencial from "./components/Diferencial";
import ComparativoCards from "./components/ComparativoCards";
import SocialProof from "./components/SocialProof";
import Pricing from "./components/Pricing";
import FinalBreach from "./components/FinalBreach";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar /> {/* 2. Coloca ela aqui, fora do main para organização */}
      
      <main className="relative flex flex-col items-center">
        <Hero />
        <Manifesto />
        <Perspectiva /> 
        <ChatDemo />
        <Arsenal />
        <Diferencial />
        <ComparativoCards />
        <Pricing />
        <SocialProof />
        <FinalBreach />
        <Footer />
      </main>
    </>
  );
}