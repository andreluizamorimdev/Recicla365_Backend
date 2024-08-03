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
}

module.exports = new LocalColetaController();
