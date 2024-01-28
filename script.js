// Fazer uma solicitação à API do GitHub
fetch("https://api.github.com/users/joaobatistajr/repos")
  .then((response) => response.json())
  .then((data) => {
    // Manipular os dados recebidos
    const repositories = document.getElementById("repositories");
    data.forEach((repo) => {
      const repoElement = document.createElement("div");
      repoElement.classList.add("repo-card"); // Adiciona a classe do card

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
