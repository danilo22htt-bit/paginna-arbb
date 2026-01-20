
import React from 'react';
import { Check, X } from 'lucide-react';

export const Filter: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif">Este é o seu lugar?</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Arben Evolution é um ambiente de alta performance. Escolha o seu lado.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* For Whom */}
          <div className="p-10 border border-white/10 bg-white/5 space-y-8">
            <h4 className="text-xl font-medium flex items-center gap-3">
              <Check className="text-green-500 w-5 h-5" /> Para quem é
            </h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="flex gap-3"><span>•</span> Profissionais que buscam o próximo nível de impacto.</li>
              <li className="flex gap-3"><span>•</span> Pessoas cansadas de cursos superficiais e motivação barata.</li>
              <li className="flex gap-3"><span>•</span> Quem deseja construir um legado através da disciplina.</li>
              <li className="flex gap-3"><span>•</span> Quem está pronto para encarar a verdade sobre sua produtividade.</li>
            </ul>
          </div>

          {/* Not For Whom */}
          <div className="p-10 border border-white/5 bg-transparent space-y-8 opacity-60 hover:opacity-100 transition-opacity">
            <h4 className="text-xl font-medium flex items-center gap-3">
              <X className="text-red-500 w-5 h-5" /> Para quem não é
            </h4>
            <ul className="space-y-4 text-gray-500 font-light">
              <li className="flex gap-3"><span>•</span> Quem busca hacks mágicos ou resultados sem esforço.</li>
              <li className="flex gap-3"><span>•</span> Pessoas que preferem reclamar do sistema do que dominá-lo.</li>
              <li className="flex gap-3"><span>•</span> Quem não está disposto a investir tempo em sua própria mente.</li>
              <li className="flex gap-3"><span>•</span> Curiosos que não pretendem aplicar o método.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
