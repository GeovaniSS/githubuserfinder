# Github User Finder

Configuração do Axios 
 - axios.create()
 - baseURL
 - Token de autenticação no header da requisição

Problema do Webpack ao usar o dotenv e nodepolyfill
- https://gist.github.com/ef4/d2cf5672a93cf241fd47c020b9b3066a

Token e Dotenv e Plugin do Dotenv no Webpack
- https://www.devmedia.com.br/consumindo-uma-api-com-react-js-e-axios/42900#:~:text=Para%20enviar%20um%20token%20atrav%C3%A9s%20do%20Axios%20fazemos%20conforme%20o%20C%C3%B3digo%208.&text=Essa%20valida%C3%A7%C3%A3o%20deve%20ser%20inserida,um%20validador%20para%20o%20usu%C3%A1rio.
- https://www.freecodecamp.org/portuguese/news/como-usar-variaveis-de-ambiente-do-node-com-um-arquivo-dotenv-para-node-js-e-npm/#:~:text=Como%20criar%20vari%C3%A1veis%20de%20ambiente,uma%20vari%C3%A1vel%20ao%20objeto%20process.
- https://www.npmjs.com/package/dotenv
- https://www.npmjs.com/package/dotenv-webpack

Scroll Infinito 
- Parâmetro per_page=100 e page=?
- https://docs.github.com/pt/rest/guides/traversing-with-pagination
- https://www.youtube.com/watch?v=NnjDJt68uLs
- https://www.youtube.com/watch?v=IjaXyQwl4no

Esse projeto é um buscador de perfis do Github, que mostra as informações do perfil do usuário, 
os seus repositórios, seguidores e quem ele segue. 

[Documentação da API](#) | [Funcionalidades](#) | [Referência](#)

https://github.com/NinjaInShade/github-user-search

## Sobre 📖
O projeto foi desenvolvido com o intuito de praticar requisições http 
para diferentes endpoints da API do Github e para um primeiro contato com ES6 Modules 
e empacotamento de módulos com o Webpack.

[gif]([readme.mp4]) 
## Conceitos ✏️
  - Modularização com ES6 Modules
  - Importações Dinâmicas
  - Empacotamento de módulos com Webpack
  - Code Splitting (Divisão de Código)
  - Requisições HTTP com o Axios
  - Uso de Token de autenticação (GitHub Personal Acess Token) no cabeçalho das requisições
  - Variáveis de ambiente criadas com o dotenv para esconder o token de autenticação.
  - Scroll infinito
  - Responsividade

## Funcionalidades ⚙️
- [x] Buscar perfis do Github pelo nome de usuário
- [x] Visualizar informações relevantes do perfil do Github 
- [x] Acessar e visualizar repositórios públicos do perfil do Github
- [x] Visualizar seguidores do perfil do Github
- [x] Visualizar perfis do Github que o usuário segue 
- [x] Visualizar o layout em tamanhos de telas e dispositivos diferentes. 
- [x] Exibir 5 resultados por requisição, em resposta ao scroll.
- [x] Se qualquer informação do perfil do Github estiver vazia, exibir o texto "No twitter, "No Blog" e etc...
- [x] Exibir mensagem de erro ao buscar um perfil inexistente.
- [x] Exibir mensagem de erro, caso o usuário possua 0 repositórios, 0 seguidores ou 0 perfis que segue. 

## Ferramentas 🛠️
  - HTML5 
  - CSS3
  - Javascript 
  - Axios
  - Node Package Manager (NPM)
  - Github API
  - Webpack 5
  - Dotenv 

## Aprendizados
  - Estruturação de pastas
  - Scroll Infinito
  - Dotenv 
  - Autenticação
  - CodeSplitting


## Dificuldades
- Encontrei dificuldades ao criar um projeto usando ES6 Modules e o Webpack devido a configuração de um único bundle no arquivo de configuração do webpack, que foi utilizado em diferentes páginas com scripts diferentes, originando conflitos no DOM e nas requisições. 
- A solução para o problema descrito acima foi o recurso de Code Splitting (Divisão de código). Esse recurso permite a divisão do código em vários bundles que podem ser carregados sob demanda. Existem diversas abordagens para a divisão de código e uma das que foram implementadas inicialmente neste projeto foi a divisão do código em diferentes entry points que foram carregados manualmente em páginas distintas. 
- No entanto, a solução inicial foi substituída por outra estratégia devido a dificuldade de carregar os bundles manualmente e a falta de flexibilidade, caso outros entry points fossem criados. 
- Sendo assim, a outra técnica de divisão de código utilizada foram as Dynamic Imports (Importações Dinâmicas) que permitem carregar um módulo em qualquer lugar do código. Dessa forma, foi criado um módulo específico para carregar os outros módulos sob demanda, realizando uma importação condicional de acordo com a url da página. 

## Referência

 - [Frontend Mentor Project](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6)
 - [Github API](https://docs.github.com/en/rest)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherinempeterson.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)
