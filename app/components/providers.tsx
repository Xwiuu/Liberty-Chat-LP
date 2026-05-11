"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
}
