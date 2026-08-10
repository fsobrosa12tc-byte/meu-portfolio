import React from 'react';
import { Briefcase, GraduationCap, Building, Award, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experiencia" className="py-20 bg-slate-100/70 dark:bg-slate-950/40 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Linha do Tempo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
            💼 Experiência & Formação
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            A jornada profissional e acadêmica que fundamenta as soluções de engenharia de software da Marks Systems.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10 text-left">
          {EXPERIENCES.map((exp, idx) => {
            const isEmpreendedorismo = exp.type === 'Empreendedorismo';
            const isEducacao = exp.type === 'Educação';

            return (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-4 border-white dark:border-slate-950 flex items-center justify-center transition-transform group-hover:scale-125 ${
                    isEmpreendedorismo
                      ? 'bg-blue-600'
                      : isEducacao
                      ? 'bg-indigo-600'
                      : 'bg-amber-500'
                  }`}
                />

                {/* Content Box */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 shadow-md group-hover:border-blue-500/50 transition-all">
                  
                  {/* Badge & Period */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {exp.period}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        isEmpreendedorismo
                          ? 'bg-blue-500/10 text-blue-500'
                          : isEducacao
                          ? 'bg-indigo-500/10 text-indigo-500'
                          : 'bg-amber-500/10 text-amber-500'
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>

                  {/* Organization & Location */}
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3">
                    {exp.organization} • {exp.location}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 font-medium">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
