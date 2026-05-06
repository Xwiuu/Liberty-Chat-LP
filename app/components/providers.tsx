'use client'

import { ReactLenis } from '@studio-freight/react-lenis'

// A linha abaixo avisa o ESLint para ignorar a regra do "any" e deixar o projeto rodar em paz
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Providers({ children }: { children: any }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <div 
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {children}
    </ReactLenis>
  )
}