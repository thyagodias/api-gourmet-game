# API do Jogo Gourmet

Projeto desenvolvido em Node.js com Express

Consiste em uma api simples que executa um grafo de busca para encontrar o prato que o cliente pensou.

### Comandos:
Instalação das dependências: `npm install`

Executar servidor: `npm start`

Após os comandos, o servidor estará executando em `http://localhost:3333`


### Rotas:

#### [GET] http://localhost:3333/kind/<kindName>
  Parâmetros:
   - `<kindName>: string` = Nome da categoria de pratos
  Exemplo Resposta: 
  - `{
  "data": {
    "node": "massa",
    "right": "macarrao",
    "left": "bolo"
  }
}`


#### [POST] http://localhost:3333/kind/<kindName>
  Parâmetros:
   - `<kindName>: string` = Nome da categoria de pratos em que irá inserir uma nova categoria diferente dela
  Body: 
  - `{
        "dish": "string",
        "kind": "string"
      }`
