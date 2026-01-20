
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-40 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-serif">O Amanhã Começa na <br /> Decisão de Hoje.</h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Permanecer onde você está é uma escolha. Evoluir sua identidade também é. Qual o preço da sua inércia nos próximos 12 meses?
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-12 inline-block rounded-sm space-y-8 w-full max-w-lg shadow-2xl">
          <div className="space-y-2">
            <span className="text-sm uppercase tracking-widest text-gray-500">Acesso ao Arben Evolution</span>
            <div className="flex items-center justify-center gap-3">
              <span className="text-gray-500 line-through text-lg">R$ 197,00</span>
              <span className="text-4xl md:text-6xl font-serif tracking-tight">R$ 39,90</span>
            </div>
            <p className="text-xs text-gray-500">Pagamento único. Acesso imediato à plataforma.</p>
          </div>

          <button className="w-full py-5 bg-white text-black font-semibold tracking-widest hover:bg-gray-200 transition-all rounded-sm uppercase">
            GARANTIR MEU ACESSO AGORA
          </button>
          
          <div className="flex justify-center gap-6 pt-4 text-xs text-gray-500 uppercase tracking-widest font-medium">
             <span>7 dias de garantia</span>
             <span>Acesso imediato</span>
             <span>Ambiente seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
};
