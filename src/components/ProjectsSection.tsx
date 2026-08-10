import React, { useState } from 'react';
import { Rocket, ShieldCheck, Calendar, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { IntegraCrvaDemoModal } from './IntegraCrvaDemoModal';
import { AgendamentoDemoModal } from './AgendamentoDemoModal';

export const ProjectsSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'integra-crva' | 'agendamento' | null>(null);

  return (
    <section id="projetos" className="py-20 bg-slate-100/70 dark:bg-slate-950/40 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-left mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Cases & Soluções Reais
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
            📌 Projetos em Destaque (Marks Systems & Colaborações)
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Sistemas concebidos pela <strong>Marks Systems</strong> e projetos em colaboração para otimização de atendimentos operacionais, gestão hospitalar com IA e automação comercial.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div>
                {/* Card Header Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center gap-1.5">
                      {project.company === 'Marks Systems' && (
                        <img src="/assets/logo_marks_systems.svg" alt="Marks Systems Icon" style={{ height: "16px", width: "16px", verticalAlign: "middle" }} className="rounded-sm shrink-0" />
                      )}
                      <span>{project.company || 'Marks Systems'}</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors flex items-center gap-2">
                  <span>{project.title}</span>
                </h3>

                {/* Tagline */}
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mt-1 mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6 text-xs text-slate-600 dark:text-slate-300">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Tecnologias Utilizadas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Modals */}
        <IntegraCrvaDemoModal
          isOpen={activeModal === 'integra-crva'}
          onClose={() => setActiveModal(null)}
        />

        <AgendamentoDemoModal
          isOpen={activeModal === 'agendamento'}
          onClose={() => setActiveModal(null)}
        />

      </div>
    </section>
  );
};
