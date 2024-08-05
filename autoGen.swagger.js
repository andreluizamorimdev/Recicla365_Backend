const dotenv = require("dotenv");
dotenv.config();
const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "API Recicla365",
    description:
      "Documentação da API Recicla365, que tem como objetivo facilitar o gerenciamento de resíduos e o acesso a pontos de coleta de materiais recicláveis. Nesta os usuários podem cadastrar novos pontos de coleta, encontrar os pontos de coleta cadastrados, visualizar informações sobre os materiais aceitos em cada ponto e registrar suas próprias contribuições para a reciclagem. Esta API foi desenvolvida com Node.js, Express e Sequelize.",
    version: "1.0.0"
  },
  host: `localhost:${process.env.APP_PORT}`,
  security: [{ apiKeyAuth: [] }],
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description: "Insira o token JWT"
    }
  }
};

const outputFile = "./src/routes/doc.swagger.json";
const routes = ["./src/routes/routes.js"];

swaggerAutogen(outputFile, routes, doc);
