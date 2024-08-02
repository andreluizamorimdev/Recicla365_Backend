const { Router } = require("express");
const { criarUsuario } = require("../controllers/UsuarioController");
const validarNovoUsuario = require("../middlewares/validarNovoUsuario");

const usuariosRoutes = new Router();

usuariosRoutes.post("/", validarNovoUsuario, criarUsuario);

module.exports = usuariosRoutes;
