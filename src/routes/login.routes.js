const { Router } = require("express");
const { login } = require("../controllers/LoginController");

const loginRoutes = new Router();

loginRoutes.post("/", login);

module.exports = loginRoutes;
