import Hero from "./components/Hero";
import ChatDemo from "./components/ChatDemo";
import Perspectiva from "./components/Perspectiva";
import Manifesto from "./components/Manifesto";     // O novo que acabamos de criar
import Arsenal from "./components/Arsenal";
import Diferencial from "./components/Diferencial";
import ComparativoCards from "./components/ComparativoCards";
import SocialProof from "./components/SocialProof";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center">
      <Hero />
      <ChatDemo />
      <Manifesto />
      <Perspectiva /> 
      <Arsenal />
      <Diferencial />
      <ComparativoCards />
      <SocialProof />
      <Pricing />
    </main>
  );
}