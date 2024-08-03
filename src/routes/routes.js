const { Router } = require("express");
const usuariosRoutes = require("./usuario.routes");
const loginRoutes = require("./login.routes");

const routes = new Router();

routes.use("/usuario", usuariosRoutes);
routes.use("/login", loginRoutes);

module.exports = routes;
