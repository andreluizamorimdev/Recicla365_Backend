const { Router } = require("express");

const validarNovoLocalColeta = require("../middlewares/validarNovoLocalColeta");
const { criarLocalColeta } = require("../controllers/LocalColetaController");

const localColetaRoutes = new Router();

localColetaRoutes.post("/", validarNovoLocalColeta, criarLocalColeta);

module.exports = localColetaRoutes;
