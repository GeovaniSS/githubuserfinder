# Github User Finder
![Github repo size](https://img.shields.io/github/repo-size/GeovaniSS/githubuserfinder?style=for-the-badge)
![Github language count](https://img.shields.io/github/languages/count/GeovaniSS/githubuserfinder?style=for-the-badge)
![Github forks](https://img.shields.io/github/forks/GeovaniSS/githubuserfinder?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/GeovaniSS/githubuserfinder?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr/GeovaniSS/githubuserfinder?style=for-the-badge)

- [Demonstração](#computer-demonstração)
- [Sobre](#book-sobre)
- [Funcionalidades](#gear-funcionalidades)
- [Aprendizados](#pencil2-aprendizados)
  * [Conceitos](#conceitos)
  * [Descrição](#descrição)
    + [Módulos](#módulos)
    + [Requisições](#requisições)
    + [Scroll Infinito](#scroll-infinito)
- [Ferramentas](#hammerandwrench-ferramentas)
- [Instalação](#rocket-instalação)
- [Como contribuir](#mailbox-como-contribuir)
- [Autor](#technologist-autor)

## :computer: Demonstração
https://user-images.githubusercontent.com/90160888/176004087-f5c44263-d30d-4b19-ab24-4979a55a3a9b.mp4
> Github User Finder :octocat:  é uma ferramenta de busca de perfis do Github.

## :book: Sobre 

Esse projeto é uma ferramenta de busca de perfis do Github, que permite visualizar informações relevantes do perfil do usuário, além dos repositórios, seguidores e perfis que o usuário segue. 

O objetivo foi praticar o consumo de diferentes endpoints da API do Github e criar um projeto modularizado com ES6 Modules e o Webpack.

O projeto não é totalmente autoral. Eu me inspirei na versão do [Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6), implementei mudanças na página inicial e acrescentei outros inúmeros recursos que serão listados mais abaixo. 

## :gear: Funcionalidades
- [x] Buscar perfis do Github pelo nome de usuário.
- [x] Visualizar informações relevantes do perfil do Github. 
- [x] Acessar e visualizar repositórios públicos do perfil do Github.
- [x] Visualizar seguidores do perfil do Github.
- [x] Visualizar perfis do Github que o usuário segue.
- [x] Visualizar o layout em tamanhos de telas e dispositivos diferentes. 
- [x] Carregar resultados em resposta ao scroll do usuário.
- [x] Se qualquer informação do perfil do Github estiver vazia, exibir texto alternativo como "No twitter, "No Blog".
- [x] Exibir mensagem de erro ao buscar um perfil inexistente.
- [x] Exibir mensagem de erro, caso o usuário não siga nenhum perfil ou não possua repositórios e/ou seguidores. 

## :pencil2: Aprendizados

### Conceitos
Principais conceitos/recursos que aprendi durante o desenvolvimento do projeto: 
- Modularização com ES6 Modules
- Importações Dinâmicas
- Empacotamento de módulos com Webpack
- Code Splitting (Divisão de Código)
- Requisições HTTP para diferentes endpoints com a biblioteca do Axios
- Uso de Token de autenticação pessoal no cabeçalho das requisições
- Variáveis de ambiente criadas com o pacote DotEnv
- Scroll infinito

### Descrição

#### Módulos
Foi um dos primeiros projetos na qual utilizei a Modularização com ES6 Modules e a abordagem de cada módulo possuir uma função/ação específica. 

Encontrei dificuldades ao usar o ES6 Modules e o Webpack devido a configuração de um único bundle, que foi utilizado em diferentes páginas com scripts e elementos diferentes, originando conflitos no DOM e nas requisições. 

A solução para o problema descrito acima foi o recurso de Code Splitting (Divisão de código). Esse recurso permite a divisão do código em vários bundles que podem ser carregados sob demanda. Existem diversas abordagens para a divisão de código e uma das que foram implementadas inicialmente neste projeto foi a divisão do código em diferentes entry points que foram carregados manualmente em páginas distintas. 
```js
  module.exports = {
    entry: {
      main: './src/main.js',
      events: './src/gitHubUserEvents.js',
      followers: './src/searchGitHubUserFollowers.js',
      following: './src/searchGitHubUserFollowing.js',
      repos: './src/searchGitHubUserRepos.js'
    },
    output: {
      path: path.resolve(__dirname, 'public', 'assets', 'js'),
      filename: '[name].bundle.js'
    }
  }
```

No entanto, a solução inicial foi substituída por outra estratégia devido a dificuldade de carregar os bundles manualmente e por falta de flexibilidade. Sendo assim, a outra técnica de divisão de código utilizada foram as Dynamic Imports (Importações Dinâmicas) que permitem carregar um módulo em qualquer lugar do código. 

Dessa forma, foi criado um módulo específico para carregar os outros módulos sob demanda, realizando uma importação condicional de acordo com a url da página:
```js
  export default async() => {
    const url = location.href

    const isIndexPage = url.includes('index.html')
    const isReposPage = url.includes('repos.html')
    const isFollowersPage = url.includes('followers.html')
    const isFollowingPage = url.includes('following.html')

    if(isIndexPage) { 
      const { default: gitHubUserEvents } = await import('./modules/user/gitHubUserEvents')
      gitHubUserEvents()
    }

    if(isReposPage) {
      const { searchGitHubUserRepos } = await import('./modules/repos/searchGitHubUserRepos')
      searchGitHubUserRepos()
    }

    if(isFollowersPage) {
      const { searchGitHubUserFollowers } = await import('./modules/followers/searchGitHubUserFollowers')
      searchGitHubUserFollowers()
    }

    if(isFollowingPage) {
      const { searchGitHubUserFollowing } = await import('./modules/following/searchGitHubUserFollowing')
      searchGitHubUserFollowing()
    }
  }
```

#### Requisições
As requisições para diferentes endpoints da API do Github não foi uma tarefa complicada. Porém, inicialmente eu estava realizando requisições não autenticadas e a API do Github permite até 60 requisições por hora de usuários não autenticados. 

Por ser uma quantidade muito pequena para testes durante o desenvolvimento, busquei autenticar as requisições usando um [token de acesso pessoal](#https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) para ter a possibilidade de realizar até 5000 requisições por hora.

No entanto, não é nada recomendado embutir o token de autentição em um variável pública do seu código. Os tokens são como senhas e devem ser mantidos em segredo.

Para esse fim, eu utilizei o pacote [DotEnv](https://github.com/motdotla/dotenv) e criei o token como uma variável de ambiente em um arquivo .env:
```js
  // Arquivo .env
  AUTH_TOKEN = eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9 // Token fictício
```

O DotEnv carrega as variáveis de ambiente definidas no arquivo .env para o objeto process.env do Node:
```js
  require('dotenv').config() 
  const token = process.env.AUTH_TOKEN
```

Para enviar o token no cabeçalho da requisição através do Axios, faça o seguinte:  
```js
  const gitHubApi = axios.create({ 
    baseURL: "https://api.github.com/users"
  })

  gitHubApi.defaults.headers.authorization = `Bearer ${token}`;
```

#### Scroll Infinito
Por fim, foi de grande aprendizado implementar neste projeto a técnica de Scroll Infinito. Essa técnica consiste em exibir os resultados em resposta ao scroll do usuário na página ou em um elemento. 

Esse recurso foi implementado na página dos repositórios, seguidores e dos perfis que o usuário segue para evitar o carregamento prolongado de todos os resultados e melhorar a experiência do usuário. Quando o scroll se aproxima do fim do card, uma nova requisição é feita para buscar mais dados e os resultados são concatenados com os que já existiam na lista. 

Para que a técnica de Scroll infinito funcione é necessário passar os parâmetros *per_page* e *page* na URL da requisição para a API do Github, além de implementar a lógica do scroll.  
```js 
  axios(`https://api.github.com/users/${user}/repos?&per_page=5&page=${page}`)
```

## :hammer_and_wrench: Ferramentas
  As seguintes ferramentas foram usadas na construção do projeto: 
  - [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) 
  - [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
  - [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) 
  - [Axios](https://axios-http.com/ptbr/docs/intro)
  - [NPM](https://www.npmjs.com/)
  - [Github API](https://docs.github.com/en/rest)
  - [Webpack 5](https://webpack.js.org/)
  - [DotEnv](https://github.com/motdotla/dotenv) 

## :rocket: Instalação
```bash
  # Clone o repositório
  $ git clone https://github.com/GeovaniSS/githubuserfinder
  
  # Instale as dependências
  $ npm install

  # Faça a build do projeto
  $ npm run build 

  # Inicie o servidor
  $ npm run dev
```

## :mailbox: Como contribuir
Para contribuir com esse projeto, faça os seguintes passos: 
  1. Bifurque este repositório.
  2. Crie uma branch: `git checkout -b <nome_branch>`.
  3. Realize as alterações e confirme: `git commit -m '<mensagem_commit>'`.
  4. Envie para o repositório original: `git push origin <nome_projeto> / <local>`.
  5. Envie a solicitação de pull

Consulte a documentação do Github em [como criar uma solicitação pull](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

## :technologist: Autor
<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/geovani-silva-21298921b/">
        <img src="https://avatars.githubusercontent.com/u/90160888?v=4" width="100px;" alt="Foto do Geovani Silva no GitHub"/><br>
      </a>
    </td>
  </tr>
</table>

Feito com 💙 e ☕ por [Geovani Silva](https://www.linkedin.com/in/geovani-silva-21298921b/)
