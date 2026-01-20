
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 bg-[#050505] border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-serif tracking-tight">ARBEN EVOLUTION</h2>
          <p className="text-sm text-gray-600 font-light">Estratégia, Identidade e Alta Performance.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-xs uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Suporte</a>
        </div>
        
        <div className="text-xs text-gray-600 uppercase tracking-widest">
          © 2024 Arben Evolution. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
