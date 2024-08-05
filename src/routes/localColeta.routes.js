const { Router } = require("express");

const validarNovoLocalColeta = require("../middlewares/validarNovoLocalColeta");
const validarAlterarLocalColeta = require("../middlewares/validarAlterarLocalColeta");
const {
  criarLocalColeta,
  listarLocaisColeta,
  listarLocalColetaEspecifico,
  listarLinkGoogleMaps,
  alterarLocalColeta,
  excluirLocalColeta
} = require("../controllers/LocalColetaController");

const localColetaRoutes = new Router();

localColetaRoutes.post(
  "/",
  validarNovoLocalColeta,
  criarLocalColeta
  /* 
        #swagger.tags = ['Locais de coleta'],
        #swagger.description = 'Endpoint para criar um novo local de coleta.',
        #swagger.parameters['criarLocalColeta'] = {
            in: 'body',
            description: 'Dados do novo local de coleta.',
            required: true,
            schema: { 
                $nome_local: "Angeloni florianopolis",
                $descricao: "Ponto de coleta para eletronicos",
                $tipo_residuo: "eletronico",
                $cep: "88085-001",
                $logradouro: "Av. Gov. Ivo Silveira",
                $numero: "2445",
                $bairro: "Capoeiras",
                $estado: "SC",
                $cidade: "Florianópolis"
                
            }
        }
    */
);
localColetaRoutes.get(
  "/",
  listarLocaisColeta
  /* 
        #swagger.tags = ['Locais de coleta'],
        #swagger.description = 'Endpoint para listar todos os locais de coleta do usuario.'
        #swagger.parameters['tipo_residuo'] = {
          in: 'query',
          description: 'Tipo de resíduo para filtrar',
          required: false,
          type: 'string'
        }
        
  */
);
localColetaRoutes.get(
  "/:local_id",
  listarLocalColetaEspecifico
  /* 
        #swagger.tags = ['Locais de coleta'],
        #swagger.description = 'Endpoint para listar um local de coleta específico.'
        #swagger.parameters['local_id'] = { 
          description: 'ID do local de coleta', 
          required: true,
          type: 'integer'
        }
  */
);
localColetaRoutes.get(
  "/:local_id/maps",
  listarLinkGoogleMaps
  /* 
        #swagger.tags = ['Locais de coleta'],
        #swagger.description = 'Endpoint para listar o link do Google Maps de um local de coleta.'
        #swagger.parameters['local_id'] = { 
          description: 'ID do local de coleta', 
          required: true,
          type: 'integer'
        }
  */
);
localColetaRoutes.put(
  "/:local_id",
  validarAlterarLocalColeta,
  alterarLocalColeta
  /* 
        #swagger.tags = ['Locais de coleta'],
        #swagger.description = 'Endpoint para alterar um local de coleta.'
        #swagger.parameters['local_id'] = { 
          description: 'ID do local de coleta', 
          required: true,
          type: 'integer'
        }
        #swagger.parameters['alterarLocalColeta'] = {
            in: 'body',
            description: 'Dados do local de coleta para alteração.',
            required: true,
            schema: { 
                $nome_local: "Angeloni florianopolis",
                $descricao: "Ponto de coleta para eletronicos",
                $tipo_residuo: "eletronico",
                $cep: "88085-001",
                $logradouro: "Av. Gov. Ivo Silveira",
                $numero: "2445",
                $bairro: "Capoeiras",
                $estado: "SC",
                $cidade: "Florianópolis"
            }
        }
    */
);
localColetaRoutes.delete(
  "/:local_id",
  excluirLocalColeta
  /* 
        #swagger.tags = ['Locais de coleta'],
        #swagger.description = 'Endpoint para excluir um local de coleta.'
        #swagger.parameters['local_id'] = { 
          description: 'ID do local de coleta', 
          required: true,
          type: 'integer'
        }
  */
);

module.exports = localColetaRoutes;
