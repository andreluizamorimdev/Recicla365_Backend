const LocalColeta = require("../models/LocalColeta");
const {
  buscarCoordenadas,
  gerarLinkGoogleMaps
} = require("../services/maps.service");

class LocalColetaController {
  async criarLocalColeta(request, response) {
    try {
      const {
        nome_local,
        descricao,
        tipo_residuo,
        cep,
        logradouro,
        numero,
        bairro,
        estado,
        cidade,
        latitude,
        longitude
      } = request.body;

      const usuarioId = request.usuarioId;

      const coordenadas = await buscarCoordenadas(cep);

      const googleMapsLink = await gerarLinkGoogleMaps(coordenadas);

      const localColeta = await LocalColeta.create({
        nome_local,
        descricao,
        tipo_residuo,
        cep,
        logradouro,
        numero,
        bairro,
        estado,
        cidade,
        latitude: coordenadas.lat || latitude,
        longitude: coordenadas.lon || longitude,
        link_maps: googleMapsLink,
        usuario_id: usuarioId
      });

      return response.status(201).json(localColeta);
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: "Erro ao criar novo local de coleta" });
    }
  }

  async listarLocaisColeta(request, response) {
    try {
      const filtro = request.query;

      const usuarioId = request.usuarioId;

      if (!usuarioId) {
        return response
          .status(401)
          .json({ message: "Usuário não autenticado" });
      }

      if (filtro.tipo_residuo) {
        const locaisColeta = await LocalColeta.findAll({
          where: { usuario_id: usuarioId, tipo_residuo: filtro.tipo_residuo }
        });

        if (!locaisColeta) {
          return response
            .status(404)
            .json({ message: "Nenhum local de coleta encontrado" });
        } else if (locaisColeta.usuario_id !== usuarioId) {
          return response
            .status(403)
            .json({ message: "Usuário não autorizado a acessar este recurso" });
        }

        return response.status(200).json(locaisColeta);
      }

      const locaisColeta = await LocalColeta.findAll({
        where: { usuario_id: usuarioId }
      });

      return response.status(200).json(locaisColeta);
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: "Erro ao listar locais de coleta" });
    }
  }

  async listarLocalColetaEspecifico(request, response) {
    try {
      const { local_id } = request.params;

      const usuarioId = request.usuarioId;

      if (!usuarioId) {
        return response
          .status(401)
          .json({ message: "Usuário não autenticado" });
      }

      const localColeta = await LocalColeta.findOne({
        where: { id: local_id, usuario_id: usuarioId }
      });

      if (!localColeta) {
        return response
          .status(404)
          .json({ message: "Local de coleta não encontrado" });
      } else if (localColeta.usuario_id !== usuarioId) {
        return response
          .status(403)
          .json({ message: "Usuário não autorizado a acessar este recurso" });
      }

      return response.status(200).json(localColeta);
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: "Erro ao listar local de coleta específico" });
    }
  }

  async alterarLocalColeta(request, response) {
    try {
      const { local_id } = request.params;

      const {
        nome_local,
        descricao,
        tipo_residuo,
        cep,
        logradouro,
        numero,
        bairro,
        estado,
        cidade,
        latitude,
        longitude
      } = request.body;

      const usuarioId = request.usuarioId;

      if (!usuarioId) {
        return response
          .status(401)
          .json({ message: "Usuário não autenticado" });
      }

      const localColeta = await LocalColeta.findOne({
        where: { id: local_id, usuario_id: usuarioId }
      });

      if (!localColeta) {
        return response
          .status(404)
          .json({ message: "Local de coleta não encontrado" });
      } else if (localColeta.usuario_id !== usuarioId) {
        return response
          .status(403)
          .json({ message: "Usuário não autorizado a acessar este recurso" });
      }

      const coordenadas = await buscarCoordenadas(cep);
      const googleMapsLink = await gerarLinkGoogleMaps(coordenadas);

      localColeta.nome_local = nome_local || localColeta.nome_local;
      localColeta.descricao = descricao || localColeta.descricao;
      localColeta.tipo_residuo = tipo_residuo || localColeta.tipo_residuo;
      localColeta.cep = cep || localColeta.cep;
      localColeta.logradouro = logradouro || localColeta.logradouro;
      localColeta.numero = numero || localColeta.numero;
      localColeta.bairro = bairro || localColeta.bairro;
      localColeta.estado = estado || localColeta.estado;
      localColeta.cidade = cidade || localColeta.cidade;
      localColeta.latitude =
        coordenadas.lat || latitude || localColeta.latitude;
      localColeta.longitude =
        coordenadas.lon || longitude || localColeta.longitude;
      localColeta.link_maps = googleMapsLink || localColeta.link_maps;

      await localColeta.save();

      return response.status(200).json(localColeta);
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: "Erro ao alterar local de coleta" });
    }
  }

  async excluirLocalColeta(request, response) {
    try {
      const { local_id } = request.params;

      const usuarioId = request.usuarioId;

      if (!usuarioId) {
        return response
          .status(401)
          .json({ message: "Usuário não autenticado" });
      }

      const localColeta = await LocalColeta.findOne({
        where: { id: local_id, usuario_id: usuarioId }
      });

      if (!localColeta) {
        return response
          .status(404)
          .json({ message: "Local de coleta não encontrado" });
      } else if (localColeta.usuario_id !== usuarioId) {
        return response
          .status(403)
          .json({ message: "Usuário não autorizado a acessar este recurso" });
      }

      await localColeta.destroy();

      return response.status(204).send();
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: "Erro ao excluir local de coleta" });
    }
  }
}

module.exports = new LocalColetaController();
