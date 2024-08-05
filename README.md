# Recicla365_Backend

## Descrição

API Rest para o Recicla365 que é uma plataforma que tem como objetivo facilitar o gerenciamento de resíduos e o acesso a pontos de coleta de materiais recicláveis. Nesta os usuários podem cadastrar novos pontos de coleta, encontrar os pontos de coleta cadastrados, visualizar informações sobre os materiais aceitos em cada ponto e registrar suas próprias contribuições para a reciclagem. A API foi desenvolvida utilizando Node.js, Express, PostgreSQL e Sequelize.

## Técnicas e práticas utilizadas

Foi utilizado o padrão de arquitetura de software MVC (Model, View, Controller) para organizar o código da aplicação. A aplicação foi dividida em camadas de acordo com as responsabilidades de cada parte do sistema. A camada de Model é responsável por representar as entidades do sistema e realizar a comunicação com o banco de dados. A camada de Controller é responsável por receber as requisições HTTP, chamar os métodos necessários da camada de Model e retornar a resposta adequada. A camada de View é responsável por representar a interface do sistema, mas como a aplicação é uma API Rest, a camada de View é representada pelos endpoints da API.

![Arquitetura](https://i.imgur.com/OtoU8ki.png)

Antes de iniciar o desenvolvimento da API, identifiquei todos os requisitos do sistema e coloquei em cards no trello como na imagem abaixo. Assim, pude ter uma visão geral do que precisava ser feito e organizar as tarefas de acordo com a prioridade.

![Trello](https://i.imgur.com/hbj2cFs.png)

Criei um diagrama das tabelas do banco de dados para ter uma visão geral de como as entidades do sistema se relacionam.

![Diagrama](https://i.imgur.com/bNIEoep.png)

Utilizei o GitFlow para gerenciar as branches do repositório. Criei uma branch `develop` para desenvolver as funcionalidades da aplicação e uma branch `main` para a versão de produção. Cada nova funcionalidade foi desenvolvida em uma branch separada a partir da branch `develop` e após a conclusão da funcionalidade, a branch foi mergeada na branch `develop`.

Para a funcionalidade de buscar os pontos de coleta mais próximos, utilizei a API do OpenStreetMap (Nominatim) para obter as coordenadas geográficas dos pontos de coleta cadastrados e montei um link do maps com os dados retornados.

## Tecnologias

- Node.js
- Express
- PostgreSQL
- Sequelize

## Bibliotecas utilizadas

- axios
- bcryptjs
- cors
- dotenv
- express
- jsonwebtoken
- pg
- sequelize
- swagger-autogen
- swagger-ui-express
- yup

## DevDependencies

- nodemon
- sequelize-cli

## Instalação e rodar o repositório em ambiente local

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente conforme o arquivo `.env.example`
4. Execute as migrations com `npx sequelize db:migrate` ou `sequelize db:migrate` para criar as tabelas no banco de dados
5. Execute o comando `npm start:dev` para iniciar o servidor no modo de desenvolvimento
6. Execute o comando `npm run swagger` para gerar a documentação da API com o Swagger e acesse `http://localhost:APP_PORT/docs` no navegador (APP_PORT é a porta configurada no arquivo `.env`).

## Documentação

A documentação da API foi gerada com o Swagger e pode ser acessada em `http://localhost:APP_PORT/docs` no navegador (APP_PORT é a porta configurada no arquivo `.env`).

![Swagger](https://i.imgur.com/xQx5Sl8.png)

## Melhorias futuras

- Implementar RBAC (Role-Based Access Control) para controlar o acesso dos usuários às rotas da API.
- Modificar a API externa de geolocalização para a API do google cloud onde apresenta uma maior quantidade de dados e sua precisão é melhor do que a opção gratuita utilizada.
- Implementar funcionalidade de recuperação de senha.
- Implementar uma funcionalidade para o usuário poder editar seu perfil.
- Implementar rotas de restaurar usuários e pontos de coleta deletados.
- Implementar um log de atividades para registrar as ações realizadas pelos usuários.
- Implementar busca de pontos proximos utilizando a API do google maps.

## Desenvolvedor

- [André Luiz](https://www.linkedin.com/in/andr%C3%A9-luiz-amorim-de-souza-435679218/) - LinkedIn
