import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/repos')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erro ao buscar os dados dos repositórios:', error));
  }, []);

  return (
    <div>
      <h1>Projetos do GitHub</h1>
      <pre>
        <code className="language-json">
          {data ? JSON.stringify(data, null, 2) : 'Carregando...'}
        </code>
      </pre>
    </div>
  );
}
