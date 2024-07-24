# Recicla365_Backend

## Descrição

API Rest para o Recicla365 que é uma plataforma que facilita o gerenciamento de resíduos e o acesso a pontos de coleta de materiais recicláveis. Os usuários podem cadastrar novos pontos de coleta, encontrar pontos próximos, visualizar informações sobre os materiais aceitos em cada ponto e registrar suas próprias contribuições para a reciclagem. A API foi desenvolvida utilizando Node.js, Express, PostgreSQL e Sequelize.

## Tecnologias

- Node.js
- Express
- PostgreSQL
- Sequelize

## Instalação e rodar o repositório em ambiente local

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente conforme o arquivo `.env.example`
4. Execute as migrations com `npx sequelize db:migrate` ou `sequelize db:migrate` para criar as tabelas no banco de dados
5. Execute o comando `npx sequelize db:seed:all` ou `sequelize db:seed:all` para popular o banco de dados com dados iniciais
6. Execute o comando `npm start:dev` para iniciar o servidor no modo de desenvolvimento
