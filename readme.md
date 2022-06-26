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


## Sobre 📖
O projeto foi desenvolvido com o intuito de praticar requisições http 
para diferentes endpoints da API do Github e para um primeiro contato com ES6 Modules 
e empacotamento de módulos com o Webpack.

[gif]() 
## Funcionalidades ⚙️

- [x] Requisições HTTP com Axios
- [x] Modularização
- [x] 
- [x] 


## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.


## Referência

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherinempeterson.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)
