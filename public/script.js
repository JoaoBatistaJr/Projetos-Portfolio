async function carregarRepositorios() {
  try {
      const response = await fetch("/api/repos");
      if (!response.ok) throw new Error("Erro ao buscar repositórios");

      const repos = await response.json();
      const lista = document.getElementById("repos-list");

      lista.innerHTML = repos
          .map(repo => `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)
          .join("");

  } catch (error) {
      console.error("Erro ao carregar os repositórios:", error);
  }
}

// Chama a função ao carregar a página
window.onload = carregarRepositorios;
