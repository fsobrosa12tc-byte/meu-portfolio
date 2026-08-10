import { PERSONAL_INFO } from '../data/portfolioData';

export function generateVanillaHTMLCode(): string {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfólio - Antônio Fagner Sobrosa Marques | Marks Systems</title>
  <meta name="description" content="Portfólio Profissional de Antônio Fagner Sobrosa Marques - Desenvolvedor Marks Systems, Vistoriador Veicular DETRAN-RS e Desenvolvedor de Software.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
  <style>
    :root {
      --bg-main: #0B0F19;
      --bg-card: #111827;
      --bg-card-hover: #1F2937;
      --border-color: #1F2937;
      --accent-primary: #2563EB;
      --accent-hover: #1D4ED8;
      --accent-cyan: #0EA5E9;
      --text-main: #F9FAFB;
      --text-muted: #9CA3AF;
      --text-dim: #6B7280;
      --radius-sm: 8px;
      --radius-md: 12px;
      --radius-lg: 16px;
      --shadow-glow: 0 0 25px rgba(37, 99, 235, 0.15);
    }

    [data-theme="light"] {
      --bg-main: #F8FAFC;
      --bg-card: #FFFFFF;
      --bg-card-hover: #F1F5F9;
      --border-color: #E2E8F0;
      --accent-primary: #2563EB;
      --accent-hover: #1D4ED8;
      --accent-cyan: #0284C7;
      --text-main: #0F172A;
      --text-muted: #475569;
      --text-dim: #64748B;
      --shadow-glow: 0 4px 20px rgba(37, 99, 235, 0.1);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background-color: var(--bg-main);
      color: var(--text-main);
      line-height: 1.6;
      transition: background-color 0.3s ease, color 0.3s ease;
      overflow-x: hidden;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    /* HEADER & NAV */
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
      background: rgba(11, 15, 25, 0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-color);
      transition: background 0.3s ease;
    }

    [data-theme="light"] header {
      background: rgba(248, 250, 252, 0.85);
    }

    .nav-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      color: var(--text-main);
      font-weight: 800;
      font-size: 1.25rem;
    }

    .logo-badge {
      background: linear-gradient(135deg, #2563EB, #0052CC);
      color: #fff;
      padding: 0.25rem 0.6rem;
      border-radius: var(--radius-sm);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 1.75rem;
      list-style: none;
    }

    .nav-links a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 500;
      transition: color 0.2s;
    }

    .nav-links a:hover, .nav-links a.active {
      color: var(--accent-primary);
    }

    .theme-toggle-btn {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      color: var(--text-main);
      padding: 0.5rem 0.85rem;
      border-radius: var(--radius-sm);
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    /* HERO */
    .hero {
      padding: 9rem 0 5rem 0;
      position: relative;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 3rem;
      align-items: center;
    }

    .hero-title {
      font-size: 2.75rem;
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, var(--text-main) 60%, var(--accent-primary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-subtitle {
      font-size: 1.15rem;
      color: var(--accent-cyan);
      font-weight: 600;
      margin-bottom: 1.25rem;
    }

    .hero-bio {
      color: var(--text-muted);
      font-size: 1.05rem;
      margin-bottom: 2rem;
    }

    .badges-group {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 2rem;
    }

    .badges-group img {
      height: 28px;
      border-radius: 4px;
    }

    .btn-group {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border-radius: var(--radius-md);
      font-weight: 600;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
      border: none;
    }

    .btn-primary {
      background: var(--accent-primary);
      color: #FFFFFF;
    }

    .btn-primary:hover {
      background: var(--accent-hover);
      transform: translateY(-2px);
    }

    .btn-outline {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      color: var(--text-main);
    }

    .btn-outline:hover {
      border-color: var(--accent-primary);
      color: var(--accent-primary);
      transform: translateY(-2px);
    }

    .avatar-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 2rem;
      text-align: center;
      box-shadow: var(--shadow-glow);
    }

    .avatar-circle {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: linear-gradient(135deg, #2563EB, #0EA5E9);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      font-weight: 800;
      color: #FFF;
      margin: 0 auto 1.25rem auto;
      border: 4px solid var(--bg-main);
    }

    /* SECTIONS */
    section {
      padding: 5rem 0;
      border-bottom: 1px solid var(--border-color);
    }

    .section-header {
      margin-bottom: 3rem;
    }

    .section-tag {
      color: var(--accent-primary);
      text-transform: uppercase;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 1.5px;
      margin-bottom: 0.5rem;
      display: block;
    }

    .section-title {
      font-size: 2.25rem;
      font-weight: 800;
    }

    /* CARDS GRID */
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.75rem;
    }

    .card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 2rem;
      transition: transform 0.25s ease, border-color 0.25s ease;
    }

    .card:hover {
      transform: translateY(-4px);
      border-color: var(--accent-primary);
    }

    .tag-pill {
      background: rgba(37, 99, 235, 0.12);
      color: var(--accent-primary);
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      font-size: 0.8rem;
      font-weight: 600;
      display: inline-block;
      margin-bottom: 0.75rem;
    }

    .tech-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1.25rem;
    }

    .tech-chip {
      background: var(--bg-card-hover);
      color: var(--text-muted);
      padding: 0.2rem 0.6rem;
      border-radius: var(--radius-sm);
      font-size: 0.8rem;
      font-weight: 500;
      border: 1px solid var(--border-color);
    }

    .tech-badge {
      display: inline-block;
      background-color: #1e293b;
      color: #38bdf8;
      border: 1px solid #334155;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      margin: 4px;
    }

    /* SKILLS BAR */
    .skill-bar-wrapper {
      margin-bottom: 1.25rem;
    }

    .skill-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.35rem;
      font-size: 0.9rem;
      font-weight: 600;
    }

    .skill-track {
      height: 8px;
      background: var(--bg-card-hover);
      border-radius: 999px;
      overflow: hidden;
    }

    .skill-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--accent-primary), var(--accent-cyan));
      border-radius: 999px;
    }

    /* TIMELINE */
    .timeline {
      position: relative;
      padding-left: 2rem;
    }

    .timeline::before {
      content: '';
      position: absolute;
      top: 0;
      left: 7px;
      bottom: 0;
      width: 2px;
      background: var(--border-color);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 2.5rem;
    }

    .timeline-dot {
      position: absolute;
      left: -2rem;
      top: 4px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--accent-primary);
      border: 3px solid var(--bg-main);
    }

    /* FOOTER */
    footer {
      padding: 3rem 0;
      text-align: center;
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    @media (max-width: 868px) {
      .hero-content {
        grid-template-columns: 1fr;
      }
      .grid-2, .grid-3 {
        grid-template-columns: 1fr;
      }
      .nav-links {
        display: none;
      }
      .hero-title {
        font-size: 2.15rem;
      }
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <header>
    <div class="container nav-wrapper">
      <a href="#" class="logo">
        <span class="logo-badge">MARKS</span>
        Antônio Marques
      </a>
      <ul class="nav-links">
        <li><a href="#sobre">Sobre Mim</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#experiencia">Experiência</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
      <button class="theme-toggle-btn" id="themeToggle">
        🌙 Alternar Tema
      </button>
    </div>
  </header>

  <!-- HERO -->
  <section class="hero" id="home">
    <div class="container hero-content">
      <div>
        <h1 class="hero-title">${PERSONAL_INFO.name}</h1>
        <div class="hero-subtitle">${PERSONAL_INFO.title}</div>
        <p class="hero-bio">${PERSONAL_INFO.bio}</p>

        <div class="badges-group">
          <a href="${PERSONAL_INFO.linkedinUrl}" target="_blank" rel="noopener">
            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
          </a>
          <a href="${PERSONAL_INFO.githubUrl}" target="_blank" rel="noopener">
            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
          </a>
          <a href="#projetos">
            <img src="https://img.shields.io/badge/CEO-Marks_Systems-0052CC?style=for-the-badge&logo=rocket&logoColor=white" alt="Marks Systems">
          </a>
        </div>

        <div class="btn-group">
          <a href="#contato" class="btn btn-primary">✉️ Entrar em Contato</a>
          <a href="#projetos" class="btn btn-outline">🚀 Ver Projetos</a>
        </div>
      </div>

      <div class="avatar-card">
        <div class="avatar-circle">AM</div>
        <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.25rem;">Passo Fundo, RS - Brasil</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Senac RS • ADS | DETRAN-RS/CRVA</p>
      </div>
    </div>
  </section>

  <!-- SOBRE MIM -->
  <section id="sobre">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Trajetória Profissional</span>
        <h2 class="section-title">Sobre Mim</h2>
      </div>

      <div class="card" style="margin-bottom: 2rem;">
        <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-muted);">
          Minha trajetória profissional combina mais de <strong>10 anos de experiência operacional direta no DETRAN-RS/CRVA</strong> como Vistoriador Veicular (IVD) com a liderança da <strong>Marks Systems</strong> e formação acadêmica em Análise e Desenvolvimento de Sistemas pelo Senac RS.
        </p>
        <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-muted); margin-top: 1rem;">
          Conheço em profundidade os desafios operacionais do atendimento de balcão, rotinas de vistoria e exigências legais, traduzindo essa experiência em softwares eficientes para simplificar rotinas e acelerar negócios.
        </p>
      </div>

      <div class="grid-3">
        <div class="card">
          <h3 style="color: var(--accent-primary); margin-bottom: 0.5rem;">🎓 Educação</h3>
          <p style="color: var(--text-muted);">ADS no Senac RS (Em andamento)</p>
          <p style="color: var(--text-dim); font-size: 0.85rem; margin-top: 0.25rem;">Histórico em Sistemas de Informação, TI e Contabilidade.</p>
        </div>
        <div class="card">
          <h3 style="color: var(--accent-cyan); margin-bottom: 0.5rem;">🏢 Empresa</h3>
          <p style="color: var(--text-muted);">Marks Systems</p>
          <p style="color: var(--text-dim); font-size: 0.85rem; margin-top: 0.25rem;">Desenvolvimento de Software e Integração Tecnológica.</p>
        </div>
        <div class="card">
          <h3 style="color: #F59E0B; margin-bottom: 0.5rem;">📍 Localização</h3>
          <p style="color: var(--text-muted);">Passo Fundo - RS</p>
          <p style="color: var(--text-dim); font-size: 0.85rem; margin-top: 0.25rem;">Atuação e atendimento regional e nacional.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PROJETOS -->
  <section id="projetos">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Soluções Desenvolvidas</span>
        <h2 class="section-title">Projetos em Destaque</h2>
      </div>

      <div class="grid-2">
        <div class="card">
          <span class="tag-pill">Marks Systems • Operante</span>
          <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">🚘 INTEGRA CRVA</h3>
          <p style="color: var(--text-muted); margin-bottom: 1rem;">
            Sistema Integrado de Atendimento de Balcão e PDV para Centros de Registro de Veículos Automotores (CRVA/DETRAN-RS). Reduz filas e automatiza rotinas de recepção e emissão de taxas.
          </p>
          <div class="tech-badges">
            <span class="tech-chip">Python</span>
            <span class="tech-chip">SQL</span>
            <span class="tech-chip">Arquitetura de Software</span>
            <span class="tech-chip">DETRAN-RS</span>
          </div>
        </div>

        <div class="card">
          <span class="tag-pill">Gestão & Finanças</span>
          <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">📅 Sistema de Agendamento</h3>
          <p style="color: var(--text-muted); margin-bottom: 1rem;">
            Plataforma de gestão de horários e automação financeira voltada para estabelecimentos de serviços (salões, estéticas e nail designers).
          </p>
          <div class="tech-badges">
            <span class="tech-chip">Lógica de Agendamento</span>
            <span class="tech-chip">Modelagem SQL</span>
            <span class="tech-chip">Pagamentos PIX</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- HABILIDADES -->
  <section id="habilidades">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Competências Técnicas</span>
        <h2 class="section-title">Tecnologias e Habilidades</h2>
      </div>

      <div class="grid-2">
        <div class="card">
          <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem;">💻 Desenvolvimento & Banco de Dados</h3>
          
          <div class="skill-bar-wrapper">
            <div class="skill-info"><span>Python</span><span>88%</span></div>
            <div class="skill-track"><div class="skill-fill" style="width: 88%;"></div></div>
          </div>
          <div class="skill-bar-wrapper">
            <div class="skill-info"><span>SQL & PostgreSQL</span><span>85%</span></div>
            <div class="skill-track"><div class="skill-fill" style="width: 85%;"></div></div>
          </div>
          <div class="skill-bar-wrapper">
            <div class="skill-info"><span>C++</span><span>75%</span></div>
            <div class="skill-track"><div class="skill-fill" style="width: 75%;"></div></div>
          </div>
          <div class="skill-bar-wrapper">
            <div class="skill-info"><span>VisuAlg & Lógica</span><span>90%</span></div>
            <div class="skill-track"><div class="skill-fill" style="width: 90%;"></div></div>
          </div>
        </div>

        <div class="card">
          <h3 style="margin-bottom: 1.5rem; font-size: 1.25rem;">🛠️ Infraestrutura & Regras de Negócio</h3>
          
          <div class="skill-bar-wrapper">
            <div class="skill-info"><span>Vistoria Veicular (IVD DETRAN-RS)</span><span>98%</span></div>
            <div class="skill-track"><div class="skill-fill" style="width: 98%;"></div></div>
          </div>
          <div class="skill-bar-wrapper">
            <div class="skill-info"><span>Hardware, Redes & TI</span><span>92%</span></div>
            <div class="skill-track"><div class="skill-fill" style="width: 92%;"></div></div>
          </div>
          <div class="skill-bar-wrapper">
            <div class="skill-info"><span>Gestão Contábil & PDV</span><span>88%</span></div>
            <div class="skill-track"><div class="skill-fill" style="width: 88%;"></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- EXPERIÊNCIA -->
  <section id="experiencia">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Histórico e Marcos</span>
        <h2 class="section-title">Experiência Profissional</h2>
      </div>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <span style="color: var(--accent-primary); font-weight: 700; font-size: 0.9rem;">2024 - Presente</span>
          <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0.25rem 0;">Idealizador e Desenvolvedor - Marks Systems</h3>
          <p style="color: var(--text-muted);">Liderança no desenvolvimento de ecossistemas de software para automação de atendimento, PDV e soluções sob medida.</p>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <span style="color: var(--accent-primary); font-weight: 700; font-size: 0.9rem;">Em Andamento</span>
          <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0.25rem 0;">Graduando em Análise e Desenvolvimento de Sistemas (Senac RS)</h3>
          <p style="color: var(--text-muted);">Formação superior técnica em desenvolvimento fullstack, engenharia de software e banco de dados em Passo Fundo/RS.</p>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <span style="color: var(--accent-primary); font-weight: 700; font-size: 0.9rem;">Mais de 10 Anos</span>
          <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0.25rem 0;">Vistoriador Veicular IVD (DETRAN-RS / CRVA)</h3>
          <p style="color: var(--text-muted);">Atuação contínua em identificação veicular, auditoria de chassi/motor e regras operacionais de trânsito.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTATO -->
  <section id="contato">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Vamos conversar?</span>
        <h2 class="section-title">Entre em Contato</h2>
      </div>

      <div class="grid-2">
        <div class="card">
          <h3 style="margin-bottom: 1rem; font-size: 1.25rem;">Informações de Contato</h3>
          <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
            Entre em contato para parcerias, soluções de software ou consultoria tecnológica.
          </p>
          <p style="margin-bottom: 0.75rem;"><strong>E-mail:</strong> ${PERSONAL_INFO.email}</p>
          <p style="margin-bottom: 0.75rem;"><strong>GitHub:</strong> fsobrosa12tc-byte</p>
          <p style="margin-bottom: 0.75rem;"><strong>Localização:</strong> Passo Fundo - RS, Brasil</p>
          <p style="margin-bottom: 1.5rem;"><strong>Empresa:</strong> Marks Systems</p>

          <a href="mailto:${PERSONAL_INFO.email}" class="btn btn-primary" style="width: 100%; justify-content: center;">
            ✉️ Enviar E-mail
          </a>
        </div>

        <div class="card">
          <h3 style="margin-bottom: 1rem; font-size: 1.25rem;">Enviar Mensagem Direta</h3>
          <form id="contactForm" onsubmit="handleForm(event)">
            <input type="text" name="user_name" placeholder="Seu Nome" required style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: var(--bg-card-hover); border: 1px solid var(--border-color); color: var(--text-main); border-radius: var(--radius-sm);">
            <input type="email" name="user_email" placeholder="Seu E-mail" required style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: var(--bg-card-hover); border: 1px solid var(--border-color); color: var(--text-main); border-radius: var(--radius-sm);">
            <textarea name="message" placeholder="Sua Mensagem..." rows="4" required style="width: 100%; padding: 0.75rem; margin-bottom: 1rem; background: var(--bg-card-hover); border: 1px solid var(--border-color); color: var(--text-main); border-radius: var(--radius-sm);"></textarea>
            <button type="submit" id="btnSubmitVanilla" class="btn btn-primary" style="width: 100%; justify-content: center;">
              🚀 Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="container">
      <p>© ${new Date().getFullYear()} ${PERSONAL_INFO.name} • Marks Systems. Todos os direitos reservados.</p>
      <p style="font-size: 0.8rem; color: var(--text-dim); margin-top: 0.5rem;">Pronto para deploy no Netlify ou Vercel em HTML, CSS e JavaScript Vanilla.</p>
    </div>
  </footer>

  <script>
    // Theme Toggle
    const themeBtn = document.getElementById('themeToggle');
    let isDark = true;
    themeBtn.addEventListener('click', () => {
      isDark = !isDark;
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      themeBtn.textContent = isDark ? '🌙 Alternar Tema' : '☀️ Alternar Tema';
    });

    // Inicializa o EmailJS
    (function() {
      if (typeof emailjs !== "undefined") {
        emailjs.init("i39xYKUX07hgrGNx5");
      }
    })();

    // Form Handling
    function handleForm(e) {
      e.preventDefault();
      const btn = document.getElementById('btnSubmitVanilla') || e.target.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '⏳ Enviando...';
      btn.disabled = true;

      emailjs.sendForm("service_9j0h9jg", "template_brriylt", e.target)
        .then(function() {
          alert('✨ Mensagem enviada com sucesso! Em breve Antônio entrará em contato.');
          e.target.reset();
        })
        .catch(function(err) {
          console.error('Erro ao enviar e-mail:', err);
          alert('❌ Falha ao enviar a mensagem. Por favor, tente novamente mais tarde.');
        })
        .finally(function() {
          btn.innerHTML = originalText;
          btn.disabled = false;
        });
    }
  </script>
</body>
</html>`;
}
