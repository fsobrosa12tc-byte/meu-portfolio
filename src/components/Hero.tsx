import React from 'react';
import { Shield, Rocket, GraduationCap, MapPin, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Badges */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pills */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              <span>Passo Fundo - RS • Atendimento & Sistemas</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Olá, eu sou{' '}
              <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Title */}
            <p className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-cyan-400 flex flex-wrap items-center gap-2">
              <span>{PERSONAL_INFO.title}</span>
            </p>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* Shield Badges as requested in the user prompt */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
                title="LinkedIn Profile"
              >
                <img
                  src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                  alt="LinkedIn Badge"
                  className="h-8 rounded"
                />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
                title="GitHub Profile"
              >
                <img
                  src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                  alt="GitHub Badge"
                  className="h-8 rounded"
                />
              </a>

              <a
                href="#projetos"
                className="hover:scale-105 transition-transform"
                title="Marks Systems CEO"
              >
                <img
                  src="https://img.shields.io/badge/CEO-Marks_Systems-0052CC?style=for-the-badge&logo=rocket&logoColor=white"
                  alt="Marks Systems Badge"
                  className="h-8 rounded"
                />
              </a>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Falar com Antônio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 transition-all hover:-translate-y-0.5"
              >
                <Rocket className="w-4 h-4 text-blue-500" />
                <span>Ver Projetos</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 p-8 shadow-xl dark:shadow-2xl overflow-hidden text-left">
              {/* Top Glow Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl" />

              {/* Header profile info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 mb-6">
                <div className="relative shrink-0">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#007bff] shadow-[0_4px_8px_rgba(0,0,0,0.2)] dark:shadow-blue-500/20 mb-1"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 right-2 p-1.5 bg-white dark:bg-slate-950 rounded-full border border-slate-200 dark:border-slate-800 text-blue-500 dark:text-blue-400 shadow">
                    <Shield className="w-5 h-5 fill-blue-500/20" />
                  </div>
                </div>

                <div className="sm:pt-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.shortName}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{PERSONAL_INFO.companyRole}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center sm:justify-start gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80">
                  <span className="text-2xl font-black text-blue-600 dark:text-blue-400 block">+10 Anos</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Vistoriador IVD DETRAN-RS/CRVA</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80">
                  <span className="text-2xl font-black text-cyan-600 dark:text-cyan-400 block">100%</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Foco em Soluções Reais de Mercado</span>
                </div>
              </div>

              {/* Highlights Checklist */}
              <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>Graduando em ADS - Senac RS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>Idealizador do Software INTEGRA CRVA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>Domínio em Python, SQL, C++ e Infra de TI</span>
                </div>
              </div>

              {/* Bottom Quick Link */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-medium">Empresa Principal:</span>
                <a
                  href="#projetos"
                  className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 flex items-center gap-1.5"
                >
                  <img src="/assets/logo_marks_systems.svg" alt="Marks Systems Icon" style={{ height: "22px", verticalAlign: "middle", marginRight: "4px" }} className="rounded shrink-0 inline-block" />
                  <span>Marks Systems</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
