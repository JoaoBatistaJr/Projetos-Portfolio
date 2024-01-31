// Fazer uma solicitação à API do GitHub para buscar os repositórios
fetch("https://api.github.com/users/joaobatistajr/repos")
  .then((response) => response.json())
  .then((data) => {
    const repositories = document.getElementById("repositories");
    const filteredRepos = data.filter((repo) => {
      // Exemplo de filtro: exibir apenas repositórios JavaScript
      return repo.language === "CSS";
    });

    filteredRepos.forEach((repo) => {
      const repoElement = document.createElement("div");
      repoElement.classList.add("repo-card");

      repoElement.innerHTML = `
                <h2 class="repo-name">${repo.name}</h2>
                <p class="repo-description">${
                  repo.description
                    ? repo.description
                    : "Nenhuma descrição disponível"
                }</p>
                <p class="repo-language"><strong>Linguagem:</strong> ${
                  repo.language ? repo.language : "Não especificada"
                }</p>
                <p class="repo-link"><strong>URL:</strong> <a href="${
                  repo.html_url
                }" target="_blank">${repo.html_url}</a></p>
            `;
      repositories.appendChild(repoElement);
    });
  })
  .catch((error) => console.error("Erro ao recuperar os repositórios:", error));
