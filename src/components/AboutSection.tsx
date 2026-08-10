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
            A união entre mais de uma década de prática em trânsito e vistorias veiculares com a inovação em desenvolvimento de software e gestão de TI.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Box */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-md text-left space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Building2 className="w-6 h-6 text-blue-500" />
              <span>Idealizador e Desenvolvedor da Marks Systems</span>
            </h3>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Sou profissional com mais de <strong>10 anos de experiência como Vistoriador Veicular (IVD)</strong> credenciado pelo <strong>DETRAN-RS/CRVA</strong>. Atualmente, resido em Passo Fundo (RS) e estou cursando <strong>Análise e Desenvolvimento de Sistemas (ADS) pelo Senac RS</strong>.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Minha trajetória une o profundo conhecimento prático das rotinas operacionais de trânsito, atendimento ao público e trâmites documentais com a paixão pela Tecnologia da Informação. Desenvolvo ecossistemas de software voltados para resolver problemas reais de mercado, automatizar atendimentos e modernizar a gestão de empresas.
            </p>

            <div className="pt-4 grid sm:grid-cols-2 gap-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 mt-1">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Vistoriador IVD DETRAN-RS</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Domínio técnico de normas, laudos e fluxo do CRVA</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 mt-1">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Arquitetura & Código</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Desenvolvimento com Python, SQL, C++ e Web</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Info Highlights */}
          <div className="lg:col-span-5 space-y-4 text-left">
            
            {/* Education Box */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white">Formação Acadêmica</h4>
                  <p className="text-xs text-slate-500">Senac RS & Histórico Acadêmico</p>
                </div>
              </div>

              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {PERSONAL_INFO.education.map((edu, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Details Box */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 border border-slate-800 shadow-md">
              <h4 className="font-bold text-blue-400 text-sm uppercase tracking-wider mb-3">
                Fatos Rápidos
              </h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Empresa Principal:</span>
                  <span className="font-semibold text-white">Marks Systems</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Localização:</span>
                  <span className="font-semibold text-white">Passo Fundo - RS</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Atuação DETRAN:</span>
                  <span className="font-semibold text-white">10+ Anos IVD Credenciado</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">E-mail:</span>
                  <span className="font-semibold text-blue-300 text-xs sm:text-sm">contato.antoniomarques.ads@gmail.com</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
