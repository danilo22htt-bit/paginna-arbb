
import React from 'react';
import { LayoutDashboard, Target, BookOpen, Moon, Calendar, ChevronRight, Zap, Cloud, LogOut } from 'lucide-react';

const DashboardMockup = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-20 rounded-xl overflow-hidden border border-white/10 bg-[#050505] shadow-2xl flex text-left font-sans h-[600px] group transition-all duration-500 hover:border-white/20">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/5 flex flex-col p-6 space-y-8 hidden md:flex">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white flex items-center justify-center transform rotate-45">
            <div className="w-4 h-4 bg-black transform -rotate-45"></div>
          </div>
          <span className="font-bold tracking-tighter text-xl">ARBEN</span>
        </div>

        <nav className="flex-1 space-y-2">
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg text-white">
            <LayoutDashboard size={18} />
            <span className="text-sm font-medium">Visão Geral</span>
          </div>
          <div className="flex items-center gap-3 p-3 text-gray-500 hover:text-white transition-colors cursor-pointer">
            <Target size={18} />
            <span className="text-sm font-medium">Foco de Hoje</span>
          </div>
          <div className="flex items-center gap-3 p-3 text-gray-500 hover:text-white transition-colors cursor-pointer">
            <BookOpen size={18} />
            <span className="text-sm font-medium">O Manifesto</span>
          </div>
          <div className="flex items-center gap-3 p-3 text-gray-500 hover:text-white transition-colors cursor-pointer">
            <Moon size={18} />
            <span className="text-sm font-medium">Modo Caverna</span>
          </div>
          <div className="flex items-center gap-3 p-3 text-gray-500 hover:text-white transition-colors cursor-pointer">
            <Calendar size={18} />
            <span className="text-sm font-medium">Rotina Diária</span>
          </div>
        </nav>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[10px] text-emerald-500 uppercase tracking-widest font-bold">
            <Cloud size={12} />
            Cloud Ativa
          </div>
          <div className="p-3 bg-white/2 border border-white/5 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-[10px] text-gray-500 uppercase">Logado como</p>
              <p className="text-xs font-bold">DANILO VALENTIM</p>
            </div>
            <LogOut size={14} className="text-gray-500" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 md:p-12 overflow-y-auto bg-gradient-to-br from-black to-[#0a0a0a]">
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-gray-500 font-bold uppercase mb-2 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
               Estado: Operação Ativa
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-none tracking-tight">
              FOCO TOTAL,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700">OPERADOR.</span>
            </h1>
          </div>
          <div className="p-3 bg-white/5 border border-white/10 rounded-full flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
              <Calendar size={20} />
            </div>
            <div className="pr-4">
              <p className="text-[10px] text-gray-500 uppercase font-bold">Dia do Ciclo</p>
              <p className="text-xl font-bold">1 <span className="text-gray-600 text-sm">/ 90</span></p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-6 bg-white/2 border border-white/5 rounded-2xl relative group/card cursor-pointer">
             <p className="text-[10px] text-gray-500 uppercase font-bold mb-4 tracking-widest">Ciclo de Evolução</p>
             <div className="flex items-baseline gap-2">
               <span className="text-4xl font-bold">90</span>
               <span className="text-[10px] text-gray-500 uppercase">Dias Restantes</span>
             </div>
             <ChevronRight className="absolute bottom-6 right-6 text-gray-700 group-hover/card:text-white transition-colors" size={20} />
          </div>
          
          <div className="p-6 bg-white/2 border border-white/5 rounded-2xl">
             <p className="text-[10px] text-gray-500 uppercase font-bold mb-4 tracking-widest">Integridade Hoje</p>
             <div className="flex items-baseline gap-2">
               <span className="text-4xl font-bold">0%</span>
               <span className="text-[10px] text-gray-500 uppercase">0/6 Blocos</span>
             </div>
             <div className="w-full h-1 bg-white/5 mt-4 rounded-full overflow-hidden">
                <div className="w-0 h-full bg-white"></div>
             </div>
          </div>

          <div className="p-6 bg-white/2 border border-white/5 rounded-2xl">
             <p className="text-[10px] text-gray-500 uppercase font-bold mb-4 tracking-widest">Momentum</p>
             <div className="flex items-center gap-3">
               <span className="text-4xl font-bold">0</span>
               <div className="p-1 bg-orange-500/20 rounded text-orange-500">
                  <Zap size={16} fill="currentColor" />
               </div>
             </div>
             <p className="text-[10px] text-gray-600 uppercase mt-4">Dias em alta performance</p>
          </div>
        </div>

        {/* Objectives */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-white/5"></div>
            <span className="text-[10px] text-gray-600 uppercase tracking-[0.4em] font-bold">Objetivos Principais</span>
            <div className="h-px flex-1 bg-white/5"></div>
          </div>

          <div className="p-6 bg-white/2 border border-white/5 rounded-3xl flex items-center gap-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black font-bold text-xl">
              01
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight">MELHORAR SHAPE</h3>
              <p className="text-[10px] text-emerald-500 uppercase tracking-widest font-bold mt-1">Em execução</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Solution: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 font-semibold">A Solução Definitiva</h2>
          <h3 className="text-4xl md:text-6xl font-serif leading-[1.1]">
            Arben Evolution não é motivação passageira. <br />
            <span className="italic">É Arquitetura de Vida.</span>
          </h3>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Uma plataforma desenhada para reconstruir sua identidade do zero através de um método pragmático de performance, consistência e visão.
          </p>
        </div>

        <DashboardMockup />
        
        <p className="text-sm text-gray-600 uppercase tracking-widest mt-8">Visualize seu progresso, domine sua rotina.</p>
      </div>
    </section>
  );
};
