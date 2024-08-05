const { Router } = require("express");
const { criarUsuario } = require("../controllers/UsuarioController");
const validarNovoUsuario = require("../middlewares/validarNovoUsuario");

const usuariosRoutes = new Router();

usuariosRoutes.post(
  "/",
  validarNovoUsuario,
  criarUsuario
  /* 
        #swagger.tags = ['Usuários'],
        #swagger.description = 'Endpoint para criar um novo usuário.',
        #swagger.parameters['criarUsuario'] = {
            in: 'body',
            description: 'Dados do novo usuário.',
            required: true,
            schema: { 
                $nome: "Administrador",
                $sexo: "MASCULINO",
                $CPF: "00322211121",
                $endereco: "Rua dos testes, 5000, Real Parque, São José, SC",
                $email: "admin@recicla.com",
                $senha: "admin123",
                $data_nascimento: "02-10-1999"
            }
        },
    */
);

module.exports = usuariosRoutes;
