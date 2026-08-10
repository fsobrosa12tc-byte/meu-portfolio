export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  badgeUrl?: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  company?: string;
  tagline: string;
  description: string;
  highlights: string[];
  status: 'Operante' | 'Em Desenvolvimento' | 'Concluído';
  technologies: string[];
  category: 'Sistemas Integrados' | 'Gestão & Agendamento' | 'Utilitários' | 'Saúde & IA' | string;
  featured: boolean;
  demoType: 'integra-crva' | 'agendamento' | 'generic';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    badge?: string;
    color: string;
    description: string;
  }[];
}

export interface Experience {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'Trabalho' | 'Educação' | 'Empreendedorismo';
  description: string;
  highlights: string[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export interface GitHubProfileStats {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}
