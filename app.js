/**
 * ==========================================================================
 * MARKS AI — PLATAFORMA INSTITUCIONAL VANILLA JS (ES6+)
 * Integrações Oficiais: GitHub REST API & EmailJS SDK
 * ==========================================================================
 */

// 1. CONFIGURAÇÕES INSTITUCIONAIS
const CONFIG = {
  GITHUB_USERNAME: "fsobrosa12tc-byte",
  EMAILJS_PUBLIC_KEY: "i39xYKUX07hgrGNx5",
  EMAILJS_SERVICE_ID: "service_9j0h9jg",
  EMAILJS_TEMPLATE_ID: "template_brriylt"
};

// 2. VERIFICAÇÃO DO SDK EMAILJS
(function verificarEmailJS() {
  if (typeof emailjs !== "undefined") {
    console.log("Marks AI: SDK EmailJS inicializado com sucesso.");
  } else {
    console.warn("Marks AI: SDK EmailJS não detectado globalmente.");
  }
})();

// 3. CARREGAMENTO DOS REPOSITÓRIOS GITHUB (RF-01 E RF-02)
async function carregarProjetosGitHub() {
  const containerProjetos = document.getElementById("lista-projetos");
  if (!containerProjetos) return;

  // Estado visual de carregamento
  containerProjetos.innerHTML = `
    <div class="carregando">
      <p>⏳ Sincronizando repositórios de engenharia diretamente do GitHub...</p>
    </div>
  `;

  try {
    const url = `https://api.github.com/users/${CONFIG.GITHUB_USERNAME}/repos?sort=updated&per_page=12`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Falha na API GitHub: Status ${response.status}`);
    }

    const repositorios = await response.json();
    containerProjetos.innerHTML = "";

    if (!Array.isArray(repositorios) || repositorios.length === 0) {
      containerProjetos.innerHTML = `
        <div class="carregando">
          <p>Nenhum repositório público encontrado no perfil oficial.</p>
        </div>
      `;
      return;
    }

    // Renderiza cards no padrão Glassmorphism Marks AI
    repositorios.forEach(repo => {
      const card = document.createElement("article");
      card.className = "card-projeto";

      const descricao = repo.description && repo.description.trim() !== ""
        ? repo.description
        : "Repositório de código e infraestrutura técnica no GitHub.";

      const badgeLinguagem = repo.language
        ? `<span class="badge-linguagem">${repo.language}</span>`
        : `<span class="badge-linguagem">Código</span>`;

      card.innerHTML = `
        <div>
          <div class="card-header">
            <h3>${repo.name}</h3>
            ${badgeLinguagem}
          </div>
          <p>${descricao}</p>
        </div>
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn-github">
          <span>Ver no GitHub</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      `;

      containerProjetos.appendChild(card);
    });

  } catch (error) {
    console.error("Marks AI: Erro ao carregar repositórios do GitHub:", error);
    containerProjetos.innerHTML = `
      <div class="erro-carregamento">
        <p>⚠️ Não foi possível carregar os repositórios dinâmicos no momento.</p>
        <small>Você pode consultar nossos códigos diretamente em <a href="https://github.com/${CONFIG.GITHUB_USERNAME}" target="_blank" style="color: var(--color-cyan); text-decoration: underline;">github.com/${CONFIG.GITHUB_USERNAME}</a></small>
      </div>
    `;
  }
}

// 4. CONFIGURAÇÃO DO FORMULÁRIO DE CONTATO VIA EMAILJS (RF-03 E RF-04)
function configurarFormularioContato() {
  const formulario = document.getElementById("meu-formulario");
  const btnEnviar = document.getElementById("btn-enviar");
  const statusEnvio = document.getElementById("status-envio");

  if (!formulario || !btnEnviar) return;

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const originalBtnText = btnEnviar.innerHTML;

    // Estado de Envio
    btnEnviar.innerHTML = `Enviando...`;
    btnEnviar.disabled = true;

    if (statusEnvio) {
      statusEnvio.className = "status-envio-area loading";
      statusEnvio.textContent = "Processando sua solicitação de diagnóstico...";
    }

    // Disparo oficial através do SDK EmailJS
    emailjs.sendForm(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_TEMPLATE_ID, this)
      .then(function (response) {
        console.log("Marks AI: Solicitação enviada com sucesso!", response.status, response.text);

        if (statusEnvio) {
          statusEnvio.className = "status-envio-area success";
          statusEnvio.textContent = "✨ Solicitação enviada com sucesso! Nossa equipe técnica retornará em breve.";
        }
        formulario.reset();
      })
      .catch(function (error) {
        console.error("Marks AI: Falha no envio via EmailJS:", error);

        if (statusEnvio) {
          statusEnvio.className = "status-envio-area error";
          statusEnvio.innerHTML = "❌ Não foi possível transmitir a mensagem. Por favor, envie diretamente para <a href='mailto:contato@marksai.com.br' style='color: inherit; text-decoration: underline;'>contato@marksai.com.br</a>.";
        }
      })
      .finally(function () {
        btnEnviar.innerHTML = originalBtnText;
        btnEnviar.disabled = false;
      });
  });
}

// 5. INTERATIVIDADE DA NAVBAR E MENU MOBILE
function configurarNavegacao() {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Fecha o menu ao clicar em qualquer item de navegação
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
}

// 6. INICIALIZAÇÃO NO CARREGAMENTO DO DOM
document.addEventListener("DOMContentLoaded", () => {
  carregarProjetosGitHub();
  configurarFormularioContato();
  configurarNavegacao();
});
