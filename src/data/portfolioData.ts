import { Project, SkillCategory, Experience, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: 'Antônio Fagner Sobrosa Marques',
  shortName: 'Antônio Marques',
  avatarUrl: 'https://github.com/fsobrosa12tc-byte.png',
  title: 'Idealizador e Desenvolvedor da Marks Systems',
  subTitle: 'Vistoriador Veicular (IVD DETRAN-RS/CRVA) & Acadêmico de ADS (Senac RS)',
  bio: 'Profissional com mais de 10 anos de experiência como Vistoriador Veicular (IVD) credenciado pelo DETRAN-RS/CRVA. Morando em Passo Fundo (RS) e graduando em Análise e Desenvolvimento de Sistemas pelo Senac RS. Minha trajetória combina vasta bagagem prática das rotinas operacionais de trânsito e legislação com a paixão por arquitetura de software. Atualmente, foco meus estudos no desenvolvimento da Marks Systems, uma solução de alto impacto para automação e otimização de processos no setor.',
  location: 'Passo Fundo, Rio Grande do Sul - Brasil',
  company: 'Marks Systems',
  companyRole: 'Idealizador & Desenvolvedor',
  email: 'contato.antoniomarques.ads@gmail.com',
  githubUsername: 'fsobrosa12tc-byte',
  githubUrl: 'https://github.com/fsobrosa12tc-byte',
  linkedinUrl: 'https://www.linkedin.com/in/fagner-sobrosa-088765215?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  education: [
    'Análise e Desenvolvimento de Sistemas - Senac RS (Em andamento)',
    'Sistemas de Informação (Histórico acadêmico)',
    'Técnico em Tecnologia da Informação',
    'Técnico em Contabilidade'
  ]
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    url: PERSONAL_INFO.linkedinUrl,
    icon: 'Linkedin',
    color: '#0077B5',
    badgeUrl: 'https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white'
  },
  {
    label: 'GitHub',
    url: PERSONAL_INFO.githubUrl,
    icon: 'Github',
    color: '#181717',
    badgeUrl: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white'
  },
  {
    label: 'CEO - Marks Systems',
    url: '#projects',
    icon: 'Rocket',
    color: '#0052CC',
    badgeUrl: 'https://img.shields.io/badge/CEO-Marks_Systems-0052CC?style=for-the-badge&logo=rocket&logoColor=white'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'integra-crva',
    title: 'INTEGRA CRVA',
    company: 'Marks Systems',
    tagline: 'Plataforma de Atendimento de Balcão & PDV Integrado',
    description: 'Projetado sob medida para resolver gargalos operacionais em Centros de Registro de Veículos Automotores (CRVA/DETRAN-RS), unindo atendimento e Ponto de Venda.',
    highlights: [
      'Otimização do fluxo de atendimento de balcão e triagem documental',
      'Módulo Ponto de Venda (PDV) para conciliação de taxas e emissão de protocolos',
      'Fluxo operacional alinhado às diretrizes técnicas e normas do DETRAN-RS'
    ],
    status: 'Operante',
    technologies: ['Python', 'SQL', 'Arquitetura de Software'],
    category: 'Sistemas Integrados',
    featured: true,
    demoType: 'integra-crva'
  },
  {
    id: 'stellarcare',
    title: 'StellarCare',
    company: 'Colaboração',
    tagline: 'Sistema Web Offline-First para Gestão Hospitalar & Assistente IA',
    description: 'Aplicação de monitoramento de leitos e evolução de enfermagem com inteligência artificial (Google Gemini) para auxílio em diagnósticos clínicos e suporte a operação offline.',
    highlights: [
      'Co-desenvolvedor: Sincronização offline-first, arquitetura de dados e lógica de aplicação',
      'Monitoramento de leitos e evolução de enfermagem em tempo real',
      'Suporte a diagnóstico clínico via inteligência artificial com Gemini API'
    ],
    status: 'Concluído',
    technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase', 'Gemini API'],
    category: 'Saúde & IA',
    featured: true,
    demoType: 'generic'
  },
  {
    id: 'agendamento-servicos',
    title: 'Gestão Integrada de Serviços',
    company: 'Marks Systems',
    tagline: 'Sistema de Agendamento e Controle Financeiro',
    description: 'Software voltado a prestadores de serviços (salões e nail designers) focado em organização de agenda, automação de agendamentos e métodos de pagamento.',
    highlights: [
      'Organização de agenda e controle dinâmico de horários',
      'Automação de agendamentos e lembretes para clientes',
      'Gestão de pagamentos e cálculo de comissões integrados'
    ],
    status: 'Concluído',
    technologies: ['Lógica de Agendamento', 'Modelagem SQL', 'JavaScript / Python'],
    category: 'Gestão & Agendamento',
    featured: true,
    demoType: 'agendamento'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Desenvolvimento & Banco de Dados',
    description: 'Linguagens, lógica de programação e gerenciamento de banco de dados.',
    skills: [
      {
        name: 'Python',
        level: 88,
        badge: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
        color: '#3776AB',
        description: 'Automação, scripts operacionais, backend e integração de dados.'
      },
      {
        name: 'SQL & Banco de Dados',
        level: 85,
        badge: 'https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white',
        color: '#4479A1',
        description: 'Modelagem relacional, consultas complexas, procedimentos e consultas operacionais.'
      },
      {
        name: 'C++',
        level: 75,
        badge: 'https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white',
        color: '#00599C',
        description: 'Lógica estruturada, desempenho de baixo nível e manipulação de memória.'
      },
      {
        name: 'VisuAlg & Algoritmos',
        level: 90,
        badge: 'https://img.shields.io/badge/VisuAlg-008080?style=for-the-badge&logo=algorithm&logoColor=white',
        color: '#008080',
        description: 'Construção rigorosa de pseudocódigo e raciocínio lógico estruturado.'
      },
      {
        name: 'HTML5, CSS3 & JavaScript Vanilla',
        level: 86,
        badge: 'https://img.shields.io/badge/Web_Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
        color: '#F7DF1E',
        description: 'Desenvolvimento de interfaces modernas, responsivas e sem dependências pesadas.'
      }
    ]
  },
  {
    title: 'Infraestrutura & Tecnologia da Informação',
    description: 'Manutenção de hardware, diagnóstico e suporte de infraestrutura empresarial.',
    skills: [
      {
        name: 'Hardware & Arquitetura de Redes',
        level: 92,
        color: '#3B82F6',
        description: 'Montagem, diagnóstico avançado, manutenção preventiva e corretiva de computadores e servidores.'
      },
      {
        name: 'Suporte de Infraestrutura & TI',
        level: 90,
        color: '#10B981',
        description: 'Configuração de periféricos, leitores de código de barra, impressoras térmicas e redes para balcão.'
      }
    ]
  },
  {
    title: 'Gestão, Regras de Negócio & Legislação DETRAN-RS',
    description: 'Domínio prático de legislação de trânsito, vistorias e rotinas administrativas.',
    skills: [
      {
        name: 'Vistoria Veicular (IVD DETRAN-RS/CRVA)',
        level: 98,
        color: '#F59E0B',
        description: 'Mais de 10 anos de identificação veicular, checagem de chassi/motor e normas operacionais.'
      },
      {
        name: 'Rotinas Contábeis & Gestão de PDV',
        level: 88,
        color: '#8B5CF6',
        description: 'Formação em Técnico em Contabilidade, conciliação de caixa, emissão de comprovantes e fluxo diário.'
      },
      {
        name: 'Engenharia de Requisitos & Regras de Negócio',
        level: 90,
        color: '#EC4899',
        description: 'Mapeamento de gargalos operacionais e tradução em especificação técnica de software.'
      }
    ]
  },
  {
    title: 'Design & Identidade de Marca',
    description: 'Criação de marcas, design visual e produção de materiais promocionais.',
    skills: [
      {
        name: 'Identidade Visual & Logos',
        level: 82,
        color: '#6366F1',
        description: 'Criação de branding para Marks Systems e parceiros comerciais.'
      },
      {
        name: 'Animação Digital & Mídia',
        level: 78,
        color: '#14B8A6',
        description: 'Apresentações animadas, prototipagem de telas e recursos gráficos para web.'
      }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    period: '2024 - Presente',
    role: 'Idealizador & Desenvolvedor',
    organization: 'Marks Systems',
    location: 'Passo Fundo - RS',
    type: 'Empreendedorismo',
    description: 'Liderança do desenvolvimento de ecossistemas de software focados em automação comercial, integração com balcão de atendimento e soluções personalizadas para prestadores de serviços.',
    highlights: [
      'Concepção e arquitetura do software INTEGRA CRVA para otimização de atendimentos',
      'Desenvolvimento do Sistema de Agendamentos e controle financeiro para salões e estéticas',
      'Consultoria em infraestrutura de TI e alinhamento de processos operacionais com tecnologia'
    ]
  },
  {
    period: 'Em Andamento',
    role: 'Graduando em Análise e Desenvolvimento de Sistemas',
    organization: 'Senac RS',
    location: 'Passo Fundo - RS',
    type: 'Educação',
    description: 'Formação superior voltada para desenvolvimento fullstack, engenharia de software, modelagem de banco de dados e arquitetura de sistemas.',
    highlights: [
      'Construção de projetos práticos em Python, SQL, C++ e desenvolvimento Web',
      'Aplicação de metodologias ágeis e padrões de projeto em soluções reais'
    ]
  },
  {
    period: 'Mais de 10 Anos de Atuação',
    role: 'Vistoriador Veicular (IVD Credenciado)',
    organization: 'DETRAN-RS / CRVA',
    location: 'Passo Fundo / Rio Grande do Sul',
    type: 'Trabalho',
    description: 'Atuação especializada em identificação veicular, auditoria de numerações de chassi, motor, etiquetas de segurança e verificação física e documental.',
    highlights: [
      'Domínio profundo das portarias e legislações do DETRAN-RS e SENATRAN',
      'Reconhecimento da necessidade de modernização tecnológica no balcão de CRVAs',
      'Aplicações práticas de melhoria de processos para agilizar o atendimento aos proprietários de veículos'
    ]
  },
  {
    period: 'Formações Anteriores',
    role: 'Técnico em TI & Técnico em Contabilidade',
    organization: 'Instituições de Ensino Técnico / SI',
    location: 'Passo Fundo - RS',
    type: 'Educação',
    description: 'Aprimoramento técnico multidisciplinar combinando suporte de informática com fundamentos de contabilidade e gestão de negócios.',
    highlights: [
      'Suporte a hardware, arquitetura de microcomputadores e redes de computadores',
      'Contabilidade prática, conciliação fiscal, controle de estoque e fluxo de caixa de PDV'
    ]
  }
];
