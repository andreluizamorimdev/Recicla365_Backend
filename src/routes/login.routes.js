const { Router } = require("express");
const { login } = require("../controllers/LoginController");

const loginRoutes = new Router();

loginRoutes.post(
  "/",
  login
  /*
        #swagger.tags = ['Usuários'],
        #swagger.description = 'Endpoint para realizar o login de um usuário.',
        #swagger.parameters['login'] = {
            in: 'body',
            description: 'Dados do usuário para login.',
            required: true,
            schema: { 
                $email: "admin@recicla.com",
                $senha: "admin123"
            }
        },
    */
);

module.exports = loginRoutes;
