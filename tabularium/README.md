# tabularium-mvc
Trabalho de Arquitetura De Software utilizando o padrão arquitetural MVC
Sistema web para catalogação, avaliação e resenha de livros.

## Tecnologias
- [AdonisJS](https://adonisjs.com/)
- Node.js
- PostgreSQL
- Edge (Template Engine)
- Lucid ORM

## Requisitos para rodar
- Node.js v16+
- PostgreSQL
- AdonisJS CLI (instalar com: `npm i -g @adonisjs/cli`)

## Como rodar o projeto localmente

```bash
# 1. Clone o repositório
git clone https://github.com/josehcagnini/tabularium-mvc.git
cd tabularium-mvc

# 2. Instale as dependências
npm install

# 3. Copie e configure o arquivo .env
cp .env.example .env

# 4. Configure o banco de dados no .env
# (host, user, password e nome do banco)

# 5. Rode as migrations
node ace migration:run

# 6. Inicie o servidor em modo dev
node ace serve --watch
# Adonis fullstack application

```

## This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
