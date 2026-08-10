import React, { useEffect, useState } from 'react';
import { Github, Star, GitFork, ExternalLink, RefreshCw, Code2, AlertCircle } from 'lucide-react';
import { fetchGitHubRepos } from '../utils/github';
import { GitHubRepo, GitHubProfileStats } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [stats, setStats] = useState<GitHubProfileStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const res = await fetchGitHubRepos();
      setRepos(res.repos);
      setStats(res.stats);
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <section id="github" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-300 dark:border-slate-700">
            Open Source & Repositórios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3 flex items-center gap-3">
            <Github className="w-8 h-8 text-blue-500" />
            <span>📊 Estatísticas no GitHub</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Acompanhe a atividade do perfil <strong>fsobrosa12tc-byte</strong> no GitHub, repositórios mais recentes e linguagens utilizadas.
          </p>
        </div>

        {/* Live Repositories */}
        <div className="space-y-6 text-left">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-500" />
              <span>Repositórios em Destaque</span>
            </h3>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-blue-500 hover:text-blue-400 flex items-center gap-1"
            >
              <span>Ver Todos no GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {loading ? (
            <div className="p-8 text-center text-slate-400 flex items-center justify-center gap-2">
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>Carregando dados diretamente da API do GitHub...</span>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {repos
                .filter((_, idx) => idx !== 2 && idx !== 4)
                .map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition-all shadow-md group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors font-mono">
                        {repo.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                      {repo.description || 'Repositório de código-fonte e projetos de desenvolvimento.'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
                    <span className="font-bold text-blue-500">
                      {repo.language || 'Code'}
                    </span>

                    <div className="flex items-center gap-3 font-semibold">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-slate-400" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
