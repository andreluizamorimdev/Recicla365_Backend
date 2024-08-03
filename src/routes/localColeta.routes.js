const { Router } = require("express");

const validarNovoLocalColeta = require("../middlewares/validarNovoLocalColeta");
const validarAlterarLocalColeta = require("../middlewares/validarAlterarLocalColeta");
const {
  criarLocalColeta,
  listarLocaisColeta,
  listarLocalColetaEspecifico,
  alterarLocalColeta,
  excluirLocalColeta,
  listarLinkGoogleMaps
} = require("../controllers/LocalColetaController");

const localColetaRoutes = new Router();

localColetaRoutes.post("/", validarNovoLocalColeta, criarLocalColeta);
localColetaRoutes.get("/", listarLocaisColeta);
localColetaRoutes.get("/:local_id", listarLocalColetaEspecifico);
localColetaRoutes.put(
  "/:local_id",
  validarAlterarLocalColeta,
  alterarLocalColeta
);
localColetaRoutes.delete("/:local_id", excluirLocalColeta);
localColetaRoutes.get("/:local_id/maps", listarLinkGoogleMaps);

module.exports = localColetaRoutes;
