import React, { useState } from 'react';
import { Code, Database, Wrench, Shield, Palette, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);

  const displayedCategories = activeCategoryIndex !== null
    ? [SKILL_CATEGORIES[activeCategoryIndex]]
    : SKILL_CATEGORIES;

  return (
    <section id="habilidades" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Hard & Soft Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
            🛠️ Tecnologias e Habilidades
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Domínio técnico multidisciplinar unindo lógica de programação, banco de dados, legislação de trânsito DETRAN-RS e suporte de infraestrutura.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 text-left">
          <button
            onClick={() => setActiveCategoryIndex(null)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategoryIndex === null
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Todas as Áreas ({SKILL_CATEGORIES.length})
          </button>

          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategoryIndex === idx
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 text-left">
          {displayedCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-500" />
                  <span>{category.title}</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  {category.description}
                </p>

                {/* Skills Progress Bars */}
                <div className="space-y-5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-slate-800 dark:text-slate-200 flex items-center gap-2">
                          {skill.badge && (
                            <img
                              src={skill.badge}
                              alt={skill.name}
                              className="h-5 rounded"
                            />
                          )}
                          <span>{skill.name}</span>
                        </span>
                        <span className="text-blue-500">{skill.level}%</span>
                      </div>

                      {/* Progress Track */}
                      <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-0.5">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
