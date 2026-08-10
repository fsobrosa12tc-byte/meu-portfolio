import { GitHubRepo, GitHubProfileStats } from '../types';

const GITHUB_USERNAME = 'fsobrosa12tc-byte';

export const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 101,
    name: 'INTEGRA-CRVA-Core',
    description: 'Módulo de Gestão de Balcão, Fila e PDV para CRVAs (DETRAN-RS). Automatização de atendimentos.',
    html_url: `https://github.com/${GITHUB_USERNAME}`,
    stargazers_count: 8,
    forks_count: 2,
    language: 'Python',
    updated_at: new Date().toISOString()
  },
  {
    id: 102,
    name: 'Sistema-Agendamento-Servicos',
    description: 'Plataforma de gestão de horários e pagamento automatizado para estabelecimentos de serviço.',
    html_url: `https://github.com/${GITHUB_USERNAME}`,
    stargazers_count: 5,
    forks_count: 1,
    language: 'SQL',
    updated_at: new Date().toISOString()
  },
  {
    id: 103,
    name: 'Algoritmos-cpp-visualg',
    description: 'Coletânea de algoritmos de estrutura de dados em C++ e VisuAlg desenvolvidos durante o curso de ADS.',
    html_url: `https://github.com/${GITHUB_USERNAME}`,
    stargazers_count: 4,
    forks_count: 0,
    language: 'C++',
    updated_at: new Date().toISOString()
  },
  {
    id: 104,
    name: 'Portfolio-Vanilla-HTML-CSS-JS',
    description: 'Portfólio Single Page responsivo em Vanilla JS pronto para deploy no Netlify ou Vercel.',
    html_url: `https://github.com/${GITHUB_USERNAME}`,
    stargazers_count: 12,
    forks_count: 3,
    language: 'JavaScript',
    updated_at: new Date().toISOString()
  }
];

export async function fetchGitHubRepos(): Promise<{ repos: GitHubRepo[]; stats: GitHubProfileStats | null }> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { signal: controller.signal }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`, { signal: controller.signal })
    ]);

    clearTimeout(timeoutId);

    if (!userRes.ok || !reposRes.ok) {
      return { repos: FALLBACK_REPOS, stats: null };
    }

    const userData = await userRes.json();
    const reposData = await reposRes.json();

    const formattedRepos: GitHubRepo[] = reposData.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      language: repo.language,
      updated_at: repo.updated_at
    }));

    const stats: GitHubProfileStats = {
      public_repos: userData.public_repos ?? 0,
      followers: userData.followers ?? 0,
      following: userData.following ?? 0,
      avatar_url: userData.avatar_url ?? `https://github.com/${GITHUB_USERNAME}.png`
    };

    return {
      repos: formattedRepos.length > 0 ? formattedRepos : FALLBACK_REPOS,
      stats
    };
  } catch (err) {
    console.warn('Could not fetch GitHub API, using fallback data:', err);
    return {
      repos: FALLBACK_REPOS,
      stats: null
    };
  }
}
