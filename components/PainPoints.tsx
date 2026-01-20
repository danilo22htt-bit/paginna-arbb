
import React from 'react';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 font-semibold">O Custo da Estagnação</h2>
            <h3 className="text-3xl md:text-4xl font-serif leading-snug">
              Você sabe exatamente o que precisa fazer, mas o abismo entre a intenção e a ação continua se expandindo.
            </h3>
          </div>
          
          <div className="space-y-10 text-gray-400 font-light text-lg leading-relaxed">
            <p>
              A distração constante não é apenas um mau hábito; é um sintoma de uma identidade fragilizada. Se você se sente perdido, sem uma direção clara e preso em ciclos de produtividade rasa, o problema não é falta de vontade.
            </p>
            <p>
              É a ausência de um método estratégico que transforme suas intenções em realidade concreta. Viver sem uma rotina pensada é aceitar o papel de espectador da própria vida.
            </p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20">
          <div className="space-y-4">
            <span className="text-white font-serif text-2xl">Caos Mental</span>
            <p className="text-gray-500 font-light">Muitas abas abertas, nenhuma tarefa concluída. O peso de saber que poderia estar fazendo mais.</p>
          </div>
          <div className="space-y-4">
            <span className="text-white font-serif text-2xl">Ciclos de Distração</span>
            <p className="text-gray-500 font-light">O vício em estímulos rápidos que rouba sua energia e sua visão de longo prazo.</p>
          </div>
          <div className="space-y-4">
            <span className="text-white font-serif text-2xl">Deriva Estratégica</span>
            <p className="text-gray-500 font-light">Acordar sem saber o porquê, reagindo ao mundo em vez de ditar o próprio ritmo.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
