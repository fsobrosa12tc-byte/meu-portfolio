// ==========================================
// PORTFÓLIO PESSOAL DINÂMICO (VANILLA JS)
// ==========================================

// Configurações do Desenvolvedor
const CONFIG = {
  GITHUB_USERNAME: "fsobrosa12tc-byte", // Seu usuário do GitHub
  EMAILJS_PUBLIC_KEY: "i39xYKUX07hgrGNx5", // Sua Public Key do EmailJS
  EMAILJS_SERVICE_ID: "service_9j0h9jg",  // Seu Service ID do EmailJS
  EMAILJS_TEMPLATE_ID: "template_brriylt"  // Seu Template ID do EmailJS
};

// 1. Inicializa o SDK do EmailJS
(function initEmailJS() {
  if (typeof emailjs !== "undefined") {
    // Inicializado via tag script no index.html
    console.log("EmailJS carregado.");
  } else {
    console.warn("SDK do EmailJS não encontrado. Verifique a inclusão da CDN no HTML.");
  }
})();

// 2. Função para Buscar e Exibir Repositórios do GitHub
async function carregarProjetosGitHub() {
  const containerProjetos = document.getElementById("lista-projetos");
  if (!containerProjetos) return;

  // Feedback visual de carregamento
  containerProjetos.innerHTML = `
    <div class="carregando">
      <p>⏳ Buscando repositórios diretamente do GitHub...</p>
    </div>
  `;

  try {
    const url = `https://api.github.com/users/${CONFIG.GITHUB_USERNAME}/repos?sort=updated&per_page=12`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro na API do GitHub: Status ${response.status}`);
    }

    const repositorios = await response.json();
    containerProjetos.innerHTML = ""; // Limpa a mensagem de carregando

    if (!Array.isArray(repositorios) || repositorios.length === 0) {
      containerProjetos.innerHTML = `
        <div class="carregando">
          <p>Nenhum repositório público encontrado no perfil.</p>
        </div>
      `;
      return;
    }

    // Filtra forks se desejar apenas originais ou renderiza todos
    repositorios.forEach(repo => {
      const card = document.createElement("div");
      card.className = "card-projeto";

      // Trata a descrição caso venha nula ou vazia
      const descricaoFormatada = repo.description && repo.description.trim() !== ""
        ? repo.description
        : "Repositório de código sem descrição cadastrada no GitHub.";

      // Trata a linguagem principal do repositório
      const badgeLinguagem = repo.language
        ? `<span class="badge-linguagem">${repo.language}</span>`
        : "";

      card.innerHTML = `
        <div>
          <div class="card-header">
            <h3>${repo.name}</h3>
            ${badgeLinguagem}
          </div>
          <p>${descricaoFormatada}</p>
        </div>
        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn-github">
          Ver no GitHub ↗
        </a>
      `;

      containerProjetos.appendChild(card);
    });

  } catch (error) {
    console.error("Falha ao carregar projetos do GitHub:", error);
    containerProjetos.innerHTML = `
      <div class="erro-carregamento">
        <p>⚠️ Não foi possível carregar os repositórios do GitHub automaticamente.</p>
        <small>Verifique a conexão ou a URL da API.</small>
      </div>
    `;
  }
}

// 3. Função para Tratar o Envio do Formulário de Contato via EmailJS
function configurarFormularioContato() {
  const formulario = document.getElementById("meu-formulario");
  const btnEnviar = document.getElementById("btn-enviar");

  if (!formulario || !btnEnviar) return;

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    const textoOriginal = btnEnviar.innerText;
    
    // Altera o estado do botão durante o envio
    btnEnviar.innerText = "Enviando...";
    btnEnviar.disabled = true;

    // Dispara a mensagem usando o SDK do EmailJS
    emailjs.sendForm(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_TEMPLATE_ID, this)
      .then(function (response) {
        console.log("Email enviado com sucesso!", response.status, response.text);
        alert("✨ Mensagem enviada com sucesso! Em breve entrarei em contato.");
        formulario.reset(); // Limpa os campos do formulário
      })
      .catch(function (error) {
        console.error("Erro ao enviar mensagem via EmailJS:", error);
        alert("❌ Falha ao enviar a mensagem. Por favor, verifique se todos os campos estão corretos e tente novamente.");
      })
      .finally(function () {
        // Restaura o botão ao estado inicial
        btnEnviar.innerText = textoOriginal;
        btnEnviar.disabled = false;
      });
  });
}

// 4. Inicializa os scripts assim que o DOM estiver completamente carregado
document.addEventListener("DOMContentLoaded", function () {
  carregarProjetosGitHub();
  configurarFormularioContato();
});
