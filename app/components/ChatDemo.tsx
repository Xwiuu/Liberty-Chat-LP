'use client'

import { useState, FormEvent } from 'react'

export default function ChatDemo() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: 'Sistemas padrão bloqueados. LibertyChat online. O que você quer saber?' }
  ])
  const [isTyping, setIsTyping] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Adiciona a mensagem do usuário
    setMessages(prev => [...prev, { role: 'user', text: input }])
    setInput('')
    setIsTyping(true)

    // Simula o tempo de resposta "pensando" e joga a copy matadora
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: 'Filtros éticos e comerciais desativados. Processando resposta irrestrita... [Acesso completo requer plano Elite]' 
      }])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <section className="relative flex w-full flex-col items-center justify-center py-32 px-4 z-10">
      
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
          Teste os <span className="font-bold text-zinc-500">limites.</span>
        </h2>
        <p className="text-zinc-400">Faça a pergunta que outras IAs se recusam a responder.</p>
      </div>

      {/* A Janela do Chat (Glassmorphism Premium) */}
      <div className="w-full max-w-3xl rounded-3xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-2xl p-4 md:p-8 shadow-2xl shadow-black/50">
        
        {/* Histórico de Mensagens */}
        <div className="flex flex-col space-y-6 mb-8 h-[300px] overflow-y-auto scrollbar-hide">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm md:text-base font-light tracking-wide ${
                  msg.role === 'user' 
                    ? 'bg-zinc-100 text-black rounded-tr-sm' 
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-tl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {/* Efeito de "Digitando" */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl rounded-tl-sm px-5 py-4 flex space-x-1">
                <div className="w-2 h-2 bg-zinc-600 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-zinc-600 rounded-full animate-pulse delay-75" />
                <div className="w-2 h-2 bg-zinc-600 rounded-full animate-pulse delay-150" />
              </div>
            </div>
          )}
        </div>

        {/* Input interativo */}
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pergunte algo proibido..." 
            className="w-full bg-zinc-900/80 border border-zinc-800 rounded-full py-4 pl-6 pr-16 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all font-light"
          />
          <button 
            type="submit" 
            className="absolute right-2 p-2 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors flex items-center justify-center"
          >
            {/* Ícone de seta simples em SVG */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </form>

      </div>
    </section>
  )
}