import { useEffect, useState } from "react";
import "../styles/globals.css";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/repos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar os repositórios");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Projetos do GitHub</h1>
      {loading && <p className="loading">Carregando...</p>}
      {error && <p className="error">Erro: {error}</p>}
      {data && (
        <pre>
          <code className="language-json">{JSON.stringify(data, null, 2)}</code>
        </pre>
      )}
    </div>
  );
}
