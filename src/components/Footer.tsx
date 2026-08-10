import React from 'react';
import { ArrowUp, Rocket, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo_marks_systems.svg"
              alt="Marks Systems Icon"
              style={{ height: "36px", width: "36px", verticalAlign: "middle" }}
              className="rounded-xl shadow-md shrink-0"
            />
            <div>
              <span className="font-extrabold text-white text-base block flex items-center gap-1.5">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-blue-400 font-semibold block flex items-center gap-1">
                <img src="/assets/logo_marks_systems.svg" alt="Marks Systems Icon" style={{ height: "16px", verticalAlign: "middle", marginRight: "2px" }} className="inline-block rounded-sm" />
                CEO {PERSONAL_INFO.company} • Passo Fundo / RS
              </span>
            </div>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="text-center md:text-right text-xs text-slate-400 space-y-1">
            <p>© {new Date().getFullYear()} Marks Systems. Todos os direitos reservados.</p>
            <p className="text-slate-400">
              Desenvolvido para alta performance • HTML, CSS e JavaScript Vanilla
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-colors shadow-md"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

        </div>

        {/* Footer Subtext */}
        <div className="pt-6 text-center text-xs text-slate-400 flex flex-wrap justify-center gap-6">
          <a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre Mim</a>
          <a href="#projetos" className="hover:text-blue-400 transition-colors">Projetos</a>
          <a href="#habilidades" className="hover:text-blue-400 transition-colors">Habilidades</a>
          <a href="#experiencia" className="hover:text-blue-400 transition-colors">Experiência</a>
          <a href="#github" className="hover:text-blue-400 transition-colors">GitHub</a>
          <a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a>
        </div>

      </div>
    </footer>
  );
};
