import fetch from "node-fetch";
import { kv } from "@vercel/kv"; // Banco de dados da Vercel

const GITHUB_API_URL = "https://api.github.com/users/joaobatistajr/repos";
const CACHE_KEY = "github_repos";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 horas

export default async function handler(req, res) {
  try {
    // Verifica se temos dados salvos no banco da Vercel
    const cachedData = await kv.get(CACHE_KEY);

    if (cachedData) {
      const { timestamp, repos } = cachedData;
      const now = Date.now();

      // Se os dados têm menos de 24h, retorna o cache
      if (now - timestamp < CACHE_DURATION) {
        console.log("✅ Servindo dados do cache.");
        return res.status(200).json(repos);
      }
    }

    // Se os dados estão antigos, busca novos do GitHub
    console.log("🔄 Buscando repositórios do GitHub...");
    const response = await fetch(GITHUB_API_URL);

    if (!response.ok) {
      throw new Error(`Erro ao buscar repositórios: ${response.status}`);
    }

    const repos = await response.json();

    // Salva os novos dados no banco da Vercel
    await kv.set(CACHE_KEY, { timestamp: Date.now(), repos });

    console.log("✅ Dados atualizados com sucesso!");
    return res.status(200).json(repos);

  } catch (error) {
    console.error("❌ Erro ao obter repositórios:", error);
    return res.status(500).json({ error: "Erro ao obter repositórios." });
  }
}
