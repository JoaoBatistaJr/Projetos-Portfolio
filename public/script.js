fetch('/api/repos')
  .then(response => response.json())
  .then(data => {
    const jsonOutput = document.getElementById("json-output");

    // Converte o JSON para uma string formatada
    const prettyJson = JSON.stringify(data, null, 2);

    // Exibe o JSON formatado no HTML
    jsonOutput.textContent = prettyJson;

    // Depois que o conteúdo for inserido, o PrismJS vai formatar automaticamente
    Prism.highlightElement(jsonOutput);
  })
  .catch(error => console.error('Erro ao buscar os dados dos repositórios:', error));
