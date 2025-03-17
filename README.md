
# Projetos Portfolio

Este projeto é um portfólio pessoal desenvolvido para exibir os meus projetos utilizando a API do GitHub. O objetivo é listar meus repositórios de forma interativa, com cache de dados para evitar limitações de requisições da API pública do GitHub.

## Funcionalidades

- Exibe uma lista de repositórios públicos do GitHub.
- Armazena dados localmente em um arquivo JSON para cache.
- Usa a API do GitHub para obter e atualizar os dados do portfólio.
- Implementação em Next.js, com renderização de dados no front-end e back-end.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React para desenvolvimento full-stack.
- [GitHub API](https://developer.github.com/v3/) - API pública do GitHub para acessar dados dos repositórios.
- [PrismJS](https://prismjs.com/) - Para formatação de código no front-end.
- [Node.js](https://nodejs.org/) - Ambiente de execução do JavaScript no back-end.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/Projetos-Portfolio.git
   cd Projetos-Portfolio
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse o projeto em `http://localhost:3000`.

## Estrutura do Projeto

- **pages/**
  - `index.js`: Página principal que exibe os projetos.
  - `api/repos.js`: API para buscar os repositórios do GitHub e salvar em cache.
- **public/**: Arquivos estáticos, como o `index.html`, `style.css` e `script.js`.
- **.next/**: Diretório gerado pelo Next.js para armazenamento de arquivos de build.
- **package.json**: Gerenciador de pacotes do projeto.

## Como Atualizar os Projetos

A API do GitHub tem um limite de requisições diárias para usuários não autenticados. Para evitar alcançar esse limite, os dados são armazenados em cache localmente em um arquivo JSON. Para atualizar os dados do portfólio, basta fazer uma requisição manual à API, e os dados serão atualizados automaticamente.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Se você tiver algum feedback ou dúvida, entre em contato comigo através das minhas redes abaixo ou abra um issue no repositório.

<div>
    <a href="https://www.linkedin.com/in/jbjunior03/" target="_blank"><img src="https://img.shields.io/badge/linkedin-%2300acee.svg?color=405DE6&style=for-the-badge&logo=linkedin&logoColor=white" /></a>
    <a href="mailto:joaob.dev@gmail.com"><img src="https://img.shields.io/badge/-Gmail-405DE6?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
    <a href="https://instagram.com/joaob.dev" target="_blank"><img src="https://img.shields.io/badge/instagram-%ff5851db.svg?color=405DE6&style=for-the-badge&logo=instagram&logoColor=white" /></a>
</div>

