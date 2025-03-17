export default async function handler(req, res) {
  try {
    console.log("Buscando dados do GitHub...");
    const response = await fetch("https://api.github.com/users/joaobatistajr/repos");

    if (!response.ok) throw new Error("Erro ao buscar repositórios");

    const repos = await response.json();

    // Adiciona cache para evitar múltiplas chamadas seguidas
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

    return res.status(200).json(repos);
  } catch (error) {
    console.error("Erro na API:", error);
    return res.status(500).json({ error: "Erro ao buscar os repositórios" });
  }
}
