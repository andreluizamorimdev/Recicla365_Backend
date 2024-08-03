const { Router } = require("express");
const usuariosRoutes = require("./usuario.routes");
const loginRoutes = require("./login.routes");
const localColetaRoutes = require("./localColeta.routes");
const validaToken = require("../middlewares/validaToken");

const routes = new Router();

routes.use("/usuario", usuariosRoutes);
routes.use("/login", loginRoutes);

routes.use("/local", validaToken, localColetaRoutes);

module.exports = routes;
