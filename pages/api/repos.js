import { writeFile, readFile } from "fs/promises";
import path from "path";
import fetch from "node-fetch";

const JSON_FILE = path.resolve("repos.json");  // Caminho correto para o arquivo de cache
const GITHUB_API_URL = "https://api.github.com/users/joaobatistajr/repos";

export default async function handler(req, res) {
  try {
    console.log("Lendo arquivo de cache...");
    let cache = await readFile(JSON_FILE, "utf8").catch(() => null);
    
    console.log("Cache:", cache);

    if (cache) {
      let { data, timestamp } = JSON.parse(cache);
      let umDia = 24 * 60 * 60 * 1000;

      console.log("Timestamp do cache:", timestamp);
      
      if (Date.now() - timestamp < umDia) {
        console.log("Cache válido, retornando dados...");
        return res.status(200).json(data);
      }
    }

    console.log("Cache expirado ou inexistente, fazendo requisição ao GitHub...");
    const response = await fetch(GITHUB_API_URL);
    if (!response.ok) throw new Error("Erro ao buscar repositórios");

    const repos = await response.json();
    const dataToSave = { data: repos, timestamp: Date.now() };

    console.log("Repositórios recebidos, salvando no cache...");
    await writeFile(JSON_FILE, JSON.stringify(dataToSave, null, 2));

    return res.status(200).json(repos);
  } catch (error) {
    console.error("Erro na API:", error);
    return res.status(500).json({ error: "Erro ao buscar os repositórios" });
  }
}
