document.addEventListener("DOMContentLoaded", function () {
  fetch("/api/repos")
    .then((response) => response.json())
    .then((data) => {
      const jsonOutput = document.getElementById("json-output");
      jsonOutput.textContent = JSON.stringify(data, null, 2);
      Prism.highlightElement(jsonOutput);
    })
    .catch((error) => console.error("Erro ao buscar os dados dos repositórios:", error));
});
