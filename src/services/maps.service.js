const axios = require("axios");

const linkApiMapa =
  "https://nominatim.openstreetmap.org/search?format=json&country=Brazil&limit=1";

async function buscarCoordenadas(cep) {
  try {
    const response = await axios.get(`${linkApiMapa}&postalcode=${cep}`);

    if (!response.data || response.data.length === 0) {
      console.warn("Localização não encontrada para o logradouro fornecido.");
      return { lat: null, lon: null }; // Retorna valores nulos em vez de lançar um erro e quebrar a aplicação
    }

    const { lat, lon } = response.data[0];

    if (!lat || !lon) {
      console.warn("Latitude ou Longitude não encontrada na resposta da API.");
      return { lat: null, lon: null }; // Retorna valores nulos em vez de lançar um erro e quebrar a aplicação
    }

    return { lat, lon };
  } catch (error) {
    if (error.response) {
      // Erro de resposta da API
      console.error(
        `Erro na resposta da API: ${error.response.status} - ${error.response.statusText}`
      );
    } else if (error.request) {
      // Erro na requisição (sem resposta)
      console.error("Erro na requisição: Nenhuma resposta recebida da API.");
    } else {
      // Outros erros
      console.error(`Erro ao buscar coordenadas: ${error.message}`);
    }
    return { lat: null, lon: null }; // Retorna valores nulos em vez de lançar um erro e quebrar a aplicação
  }
}

async function gerarLinkGoogleMaps(local) {
  try {
    if (!local || !local.lat || !local.lon) {
      console.warn(
        "Local inválido. Certifique-se de que o objeto contém 'lat' e 'lon'."
      );
      return "https://www.google.com/maps"; // Retorna um link padrão em vez de lançar um erro e quebrar a aplicação
    }

    const { lat, lon } = local;
    const linkGoogleMaps = `https://www.google.com/maps?q=${lat},${lon}`;

    return linkGoogleMaps;
  } catch (error) {
    console.error(`Erro ao gerar link do Google Maps: ${error.message}`);
    return "https://www.google.com/maps"; // Retorna um link padrão em vez de lançar um erro e quebrar a aplicação
  }
}

module.exports = { buscarCoordenadas, gerarLinkGoogleMaps };
