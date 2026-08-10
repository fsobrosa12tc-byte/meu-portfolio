import React from 'react';
import { GraduationCap, Briefcase, Building2, MapPin, Award, CheckCircle, ShieldAlert, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Trajetória & Filosofia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
            🚀 Sobre Mim
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Desenvolvimento de software e automação de processos impulsionados por mais de uma década de vivência operacional.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Box */}
          <div className="lg:col-span-7 bg-[#161e2e] border border-white/5 rounded-xl p-8 shadow-md text-left space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#e2e8f0] flex items-center gap-2.5 mb-4">
                <Building2 className="w-6 h-6 text-blue-500" />
                <span>Perfil Profissional & Atuação</span>
              </h3>

              <p className="text-[15px] leading-relaxed text-slate-300">
                Com vasta bagagem operacional em rotinas regulatórias, atendimento e trâmites de trânsito, associo a vivência prática do setor ao desenvolvimento de software. Meu foco está em projetar arquiteturas eficientes, automação de fluxos e ecossistemas digitais que resolvem gargalos reais de gestão e atendimento.
              </p>
            </div>

            <div className="pt-5 grid sm:grid-cols-2 gap-4 border-t border-white/5">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 mt-1">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#e2e8f0] text-sm">Vistoriador IVD DETRAN-RS</h4>
                  <p className="text-xs text-slate-400">Domínio técnico de normas, laudos e fluxo do CRVA</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 mt-1">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#e2e8f0] text-sm">Arquitetura & Código</h4>
                  <p className="text-xs text-slate-400">Desenvolvimento com Python, SQL, C++ e Web</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Info Highlights */}
          <div className="lg:col-span-5 text-left flex flex-col">
            
            {/* Quick Details Box */}
            <div className="bg-[#161e2e] text-[#e2e8f0] rounded-xl p-8 border border-white/5 shadow-md flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-[#e2e8f0] flex items-center gap-2.5 mb-6">
                  <Award className="w-6 h-6 text-blue-500" />
                  <span>Fatos Rápidos</span>
                </h4>
                
                <div className="space-y-4 text-[15px] leading-relaxed text-slate-300">
                  <div className="flex justify-between border-b border-white/5 pb-2.5">
                    <span className="text-slate-400 font-medium">Empresa Principal:</span>
                    <span className="font-semibold text-[#e2e8f0]">CRVA 0018 - Passo Fundo RS</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2.5">
                    <span className="text-slate-400 font-medium">Localização:</span>
                    <span className="font-semibold text-[#e2e8f0]">Passo Fundo - RS</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2.5">
                    <span className="text-slate-400 font-medium">Atuação DETRAN:</span>
                    <span className="font-semibold text-[#e2e8f0]">10+ Anos IVD Credenciado</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">E-mail:</span>
                    <span className="font-semibold text-blue-400 text-xs sm:text-sm">contato.antoniomarques.ads@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
