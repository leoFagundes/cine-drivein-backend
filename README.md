<h1 align="center">Cine Drive-in Back-End</h1>

## Descrição do Projeto
<p>O back-end do projeto Cine Drive-in de Brasília é responsável por gerenciar a lógica de negócios, a comunicação com o banco de dados MongoDB e o armazenamento de imagens no Amazon S3. Ele fornece uma API para suportar as funcionalidades dos front-ends (web e admin).</p>

<p align="center">
 <a href="#features">Features</a> •
 <a href="#pre-requisitos">Pré-requisitos</a> • 
 <a href="#rodando-a-aplicacao">Rodando a aplicação</a> • 
 <a href="#estrutura">Estrutura do Projeto</a> • 
 <a href="#tecnologias">Tecnologias</a>
</p>

<h2 align="center" id="features">Features</h2>

- [x] Autenticação e autorização de usuários
- [x] Gerenciamento de pedidos
- [x] Gerenciamento de estoque
- [x] Upload de imagens para o Amazon S3
- [x] Manipulação de dados no MongoDB
- [x] APIs RESTful para comunicação com front-ends
- [x] Validação de dados
- [x] Tratamento de erros

<h2 align="center" id="pre-requisitos">Pré-requisitos</h2>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e um editor de código como [VSCode](https://code.visualstudio.com/).

Além disso, você precisará de uma conta na AWS para utilizar o Amazon S3 e uma instância de banco de dados no [MongoDB](https://www.mongodb.com/).

<h2 align="center" id="rodando-a-aplicacao">🚀 Rodando a aplicação</h2>

```bash
# Clone este repositório
$ git clone https://github.com/leoFagundes/cine-drivein-backend.git

# Acesse a pasta do projeto no terminal/cmd
$ cd cine-drivein-backend

# Esse projeto utiliza a versão 18.18.0 do Node.js. Garanta que você tenha o NVM instalado e utilize o comando abaixo para usar a versão correta:
$ nvm install 18.18.0
$ nvm use 18.18.0

# Instale as dependências
$ npm install

# Configure as variáveis de ambiente
# Crie um arquivo .env na raiz do projeto com as seguintes informações:
# PASSWORD_DB_CONNECTION=<senha usada para se conectar ao banco de dados MongoDB>
# PORT=<porta de conexão>
# ACCESS_KEY_ID=<chave de acesso pública da sua conta AWS>
# SECRET_ACCESS_KEY=<chave de acesso secreta da sua conta AWS>
# AWS_REGION=<região da AWS onde seus recursos estão hospedados >

# Execute a aplicação
$ npm run dev

# O servidor iniciará na porta:PORT - acesse <http://localhost:PORT>
```

<h2 align="center" id="estrutura">📁 Estrutura do Projeto</h2>

```
cine-drivein-backend
├── src
│   ├── controller
│   ├── models
│   ├── routes
│   ├── services
│   ├── configs
│   └── app.js
├── .env
├── .gitignore
├── .nvmrc
├── package.json
├── server.js
└── README.md
```
- src/controllers: Contém os controladores da aplicação, responsáveis por gerenciar as requisições e respostas.
- src/models: Contém os modelos do MongoDB.
- src/routes: Contém as definições de rotas da API.
- src/services: Contém a lógica de negócios e comunicação com serviços externos, como o S3.
- src/configs: Contém funções de configuração como a conexão com o banco de dados.
- src/app.js: Arquivo principal da aplicação, onde o servidor é configurado e iniciado.

<h2 align="center" id="tecnologias">🛠 Tecnologias</h2>

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [AWS SDK](https://aws.amazon.com/sdk-for-node-js/)
- [JWT](https://jwt.io/)
- [dotenv](https://github.com/motdotla/dotenv)
- [Nodemon](https://nodemon.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

 <img style="border-radius: 50%;" src="https://github.com/leoFagundes.png" width="100px;" alt="profile-img"/>
 <h3><b>Leonardo Fagundes</b></h3>

[![Linkedin Badge](https://img.shields.io/badge/-Leonardo%20Fagundes-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/leonardo-fagundes-5a348a248/)](https://www.linkedin.com/in/leonardo-fagundes-5a348a248/) 
[![Gmail Badge](https://img.shields.io/badge/-leofagundes2015@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:leofagundes2015@gmail.com)](mailto:leofagundes2015@gmail.com)
[![Instagram Badge](https://img.shields.io/badge/-@leo.fagundes.50-E4405F?style=flat-square&labelColor=E4405F&logo=instagram&logoColor=white&link=https://www.instagram.com/leo.fagundes.50/)](https://www.instagram.com/leo.fagundes.50/) 
