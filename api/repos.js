import { writeFile, readFile } from "fs/promises";
import path from "path";
import fetch from "node-fetch";

const JSON_FILE = path.resolve("/tmp/repos.json");
const GITHUB_API_URL = "https://api.github.com/users/joaobatistajr/repos";

export default async function handler(req, res) {
  try {
    // Tenta ler o cache salvo no arquivo
    let cache = await readFile(JSON_FILE, "utf8").catch(() => null);

    if (cache) {
      let { data, timestamp } = JSON.parse(cache);
      let umDia = 24 * 60 * 60 * 1000;
      
      // Se o cache tem menos de 1 dia, retorna os dados salvos
      if (Date.now() - timestamp < umDia) {
        return res.status(200).json(data);
      }
    }

    // Se não houver cache ou ele estiver expirado, faz a requisição
    const response = await fetch(GITHUB_API_URL);
    if (!response.ok) throw new Error("Erro ao buscar repositórios");

    const repos = await response.json();
    const dataToSave = { data: repos, timestamp: Date.now() };

    // Salva os dados no cache
    await writeFile(JSON_FILE, JSON.stringify(dataToSave, null, 2));

    return res.status(200).json(repos);

  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar os repositórios" });
  }
}
