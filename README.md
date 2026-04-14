Aqui está um README bem completo:
markdown# API Cadastro & Login

Projeto desenvolvido para praticar a criação de APIs REST com Node.js,
focando em autenticação de usuários com JWT e criptografia de senhas com bcrypt,
integrado a um banco de dados MySQL.

## Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

## Funcionalidades

- ✅ Cadastro de usuários
- ✅ Login com autenticação via token JWT
- ✅ Listagem de usuários
- ✅ Senhas criptografadas com bcrypt
- ✅ Variáveis de ambiente com dotenv

## Estrutura do Projeto
apiLogin/
├── controllers/
│   └── UserController.js
├── repositories/
│   └── UserRepository.js
├── routes/
│   └── userRoutes.js
├── Database/
│   └── conexao.js
├── .env
├── .gitignore
├── server.js
└── package.json

## Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/emanuel378/API---Cadastro-Login.git

# Entre na pasta
cd API---Cadastro-Login

# Instale as dependências
npm install

# Crie o arquivo .env
cp .env.example .env

# Rode o servidor
npm run dev
```

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz com as seguintes variáveis:
SECRET=seu_segredo_jwt
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
DB_NAME=apilogincadastro

##  Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /register | Cadastro de usuário |
| POST | /login | Login e geração de token |
| GET | /usuarios | Listagem de usuários |

##  Autor

Feito por **Emanuel** 
