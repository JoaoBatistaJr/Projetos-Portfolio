import { useEffect, useState } from "react";
import "../styles/globals.css";

export default function Home() {
  const [data, setData] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/repos')
      .then(response => {
        if (!response.ok) throw new Error("Erro ao carregar os repositórios");
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <div>
      <h1>Projetos do GitHub</h1>
      {error ? (
        <p style={{ color: 'red' }}>Erro: {error}</p>
      ) : (
        <pre>
          <code className="language-json">
            {data ? JSON.stringify(data, null, 2) : 'Carregando...'}
          </code>
        </pre>
      )}
    </div>
  );
}
