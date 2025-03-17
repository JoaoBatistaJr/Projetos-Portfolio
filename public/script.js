document.addEventListener("DOMContentLoaded", () => {
  fetch('/api/repos')
    .then(response => {
      if (!response.ok) throw new Error("Erro ao carregar os repositórios");
      return response.json();
    })
    .then(data => {
      const jsonOutput = document.getElementById("json-output");

      if (!data || data.length === 0) {
        jsonOutput.textContent = "Nenhum repositório encontrado.";
        return;
      }

      jsonOutput.textContent = JSON.stringify(data, null, 2);
      Prism.highlightElement(jsonOutput);
    })
    .catch(error => {
      console.error('Erro ao buscar os dados:', error);
      document.getElementById("json-output").textContent = "Erro ao carregar os repositórios.";
    });
});
