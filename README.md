# Frontend Mytia

Frontend Mytia é uma aplicação React para explorar e buscar filmes populares. O projeto utiliza **React**, **TypeScript**, **PrimeReact** e está configurado para ser executado em um ambiente Docker.

---

## 📋 Índice
- [Recursos](#recursos)
- [Pré-requisitos](#pré-requisitos)
- [Configuração do Projeto](#configuração-do-projeto)
- [Executando o Projeto](#executando-o-projeto)
  - [Com Docker](#com-docker)
  - [Sem Docker](#sem-docker)
- [Rotas da Aplicação](#rotas-da-aplicação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Testes](#testes)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## ✨ Recursos
- Listagem de filmes populares.
- Busca de filmes por título.
- Paginação para explorar resultados.
- Interface responsiva com **PrimeReact** e **PrimeFlex**.
- Configuração de ambiente com variáveis no `.env`.
- Dockerizado para fácil implantação.

---

## 🛠️ Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:
- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Yarn](https://yarnpkg.com/) (opcional, mas recomendado)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## ⚙️ Configuração do Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/frontend-mytia.git
   cd frontend-mytia

2. Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
    VITE_API_KEY=your_api_key
    VITE_API_BASE=https://api.themoviedb.org/3
    VITE_API_IMG=https://image.tmdb.org/t/p/w500/

3. Instale as dependências:

    yarn install

🚀 Executando o Projeto

Com Docker

1. Construa e inicie o container:
    docker-compose up --build

2. Acesse a aplicação no navegador:
    http://localhost:3000

Sem Docker

1. Inicie o servidor de desenvolvimento:
    http://localhost:5173

🌐 Rotas da Aplicação
    Rota	               Descrição
    /	                   Página inicial com filmes populares.
    /search?q=	         Página de busca de filmes.
    *	                   Página de erro 404 (não encontrada).


📂 Estrutura do Projeto
    frontend-mytia/
    ├── src/
    │   ├── components/       # Componentes reutilizáveis (e.g., Main_Menu, Filme_Card)
    │   ├── hooks/            # Hooks customizados (e.g., useServiceAPI)
    │   ├── pages/            # Páginas principais (e.g., Home, Search_Filmes)
    │   ├── routes/           # Configuração centralizada de rotas
    │   ├── services/         # Funções para chamadas de API
    │   ├── types/            # Definições de tipos TypeScript
    │   ├── utils/            # Funções utilitárias
    │   └── App.tsx           # Componente principal da aplicação
    ├── public/               # Arquivos estáticos
    ├── Dockerfile            # Configuração do Docker
    ├── [docker-compose.yml](http://_vscodecontentref_/1)    # Configuração do Docker Compose
    ├── [package.json](http://_vscodecontentref_/2)          # Dependências e scripts do projeto
    ├── [tsconfig.json](http://_vscodecontentref_/3)         # Configuração do TypeScript
    └── [README.md](http://_vscodecontentref_/4)             # Documentação do projeto