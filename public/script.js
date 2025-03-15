// URL da sua API
const apiUrl = "/api/repos";

// Função para carregar e exibir os repositórios
async function loadRepos() {
  try {
    const response = await fetch(apiUrl);
    const repos = await response.json();

    // Referência para o container onde os repositórios serão listados
    const reposContainer = document.getElementById("repos-container");

    // Verifica se há repositórios e exibe no HTML
    if (repos.length > 0) {
      repos.forEach(repo => {
        const repoCard = document.createElement("div");
        repoCard.classList.add("repo-card");

        repoCard.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description ? repo.description : "Sem descrição"}</p>
          <a href="${repo.html_url}" target="_blank">Ver Repositório</a>
        `;

        // Adiciona o repositório à lista
        reposContainer.appendChild(repoCard);
      });
    } else {
      reposContainer.innerHTML = "<p>Não há repositórios disponíveis no momento.</p>";
    }
  } catch (error) {
    console.error("Erro ao carregar os repositórios:", error);
  }
}

// Carrega os repositórios quando a página for carregada
window.onload = loadRepos;
