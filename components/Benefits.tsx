
import React from 'react';
import { Target, Shield, Compass, Zap, Layers } from 'lucide-react';

const benefitList = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Clareza Mental",
    desc: "Elimine o ruído e foque no que realmente move o ponteiro da sua vida."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Identidade Forte",
    desc: "Pare de negociar com sua mediocridade e torne-se a pessoa que cumpre o que promete."
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "Direção de Longo Prazo",
    desc: "Substitua a ansiedade do 'agora' por uma visão estratégica de onde você estará em 5 anos."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Rotina Estratégica",
    desc: "Um sistema de execução que protege sua energia e maximiza seus resultados diários."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Consistência no Foco",
    desc: "Aprenda a entrar e permanecer em estado de flow, blindando-se contra distrações."
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center md:text-left">
           <h2 className="text-3xl md:text-4xl font-serif">O que você vai desenvolver</h2>
           <div className="w-20 h-1 bg-white mt-6 mx-auto md:mx-0"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitList.map((b, i) => (
            <div key={i} className="p-8 border border-white/5 bg-white/2 hover:bg-white/5 transition-colors duration-300 space-y-6">
              <div className="text-gray-400">{b.icon}</div>
              <h4 className="text-xl font-medium">{b.title}</h4>
              <p className="text-gray-500 font-light leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
