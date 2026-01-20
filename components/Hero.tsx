
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#050505] overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-white/5 to-transparent blur-3xl rounded-full opacity-30"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <div className="inline-block px-4 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm animate-fade-in">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-gray-400">Arben Evolution</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] tracking-tight">
          Construa a Identidade que <br />
          <span className="italic text-gray-400">Sustenta</span> o seu Futuro.
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed">
          O método estratégico de desenvolvimento pessoal para quem decidiu abandonar a deriva, dominar a própria rotina e executar com clareza absoluta.
        </p>
        
        <div className="pt-6">
          <button 
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-white text-black font-medium tracking-wide hover:bg-gray-200 transition-all duration-300 rounded-sm"
          >
            ASSUMIR O CONTROLE AGORA
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 animate-bounce opacity-40">
        <div className="w-[1px] h-12 bg-white mx-auto"></div>
      </div>
    </header>
  );
};
