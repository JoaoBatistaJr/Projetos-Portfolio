import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

// Resolver __dirname no ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const JSON_FILE = path.join(__dirname, "repos.json");
const GITHUB_API_URL = "https://api.github.com/users/joaobatistajr/repos";

// Rota para servir o JSON com os repositórios
app.get("/api/repos", (req, res) => {
  fs.readFile(JSON_FILE, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao ler o arquivo JSON" });
    }
    res.json(JSON.parse(data));
  });
});

// Função para buscar os repositórios e salvar no arquivo JSON
async function updateRepos() {
  try {
    const res = await fetch(GITHUB_API_URL);
    if (!res.ok) throw new Error(`Erro ao buscar repositórios: ${res.status}`);

    const repos = await res.json();

    // Salva os dados no arquivo JSON
    fs.writeFileSync(JSON_FILE, JSON.stringify(repos, null, 2));
    console.log("✅ Dados atualizados com sucesso!");

  } catch (error) {
    console.error("❌ Erro ao atualizar repositórios:", error);
  }
}

// Atualiza os repositórios ao iniciar o servidor
updateRepos();

// Agendar atualização diária (uma vez por dia)
setInterval(updateRepos, 24 * 60 * 60 * 1000); // 24 horas em milissegundos

app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
