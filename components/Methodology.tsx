
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Auditoria de Realidade",
    desc: "Mapeamento completo do seu estado atual, vícios de rotina e vazamentos de energia."
  },
  {
    number: "02",
    title: "Arquitetura de Identidade",
    desc: "Definição dos pilares inegociáveis de quem você deseja se tornar."
  },
  {
    number: "03",
    title: "Sistemas de Execução",
    desc: "Implementação de ferramentas práticas para manter o foco e a disciplina constante."
  },
  {
    number: "04",
    title: "Ajuste de Rota",
    desc: "Análise periódica de performance para garantir que a visão de longo prazo está sendo alcançada."
  }
];

export const Methodology: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 font-semibold">A Metodologia</h2>
          <h3 className="text-4xl font-serif">Simples. Prático. Inevitável.</h3>
        </div>

        <div className="space-y-12">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-8 md:gap-16 items-start group">
              <span className="text-3xl font-serif text-white/20 group-hover:text-white transition-colors duration-500">{step.number}</span>
              <div className="pb-12 border-b border-white/5 w-full space-y-3">
                <h4 className="text-2xl font-medium">{step.title}</h4>
                <p className="text-gray-500 font-light text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
