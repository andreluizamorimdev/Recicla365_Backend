const Yup = require("yup");

const AlterarLocalColetaSchema = Yup.object().shape({
  nome_local: Yup.string(),
  descricao: Yup.string(),
  tipo_residuo: Yup.string().oneOf(
    ["plastico", "vidro", "papel", "metal", "organico", "eletronico", "outros"],
    "Tipo de resisduo deve ser plastico, vidro, papel, metal, organico, eletronico ou outros"
  ),
  cep: Yup.string(),
  logradouro: Yup.string(),
  numero: Yup.string(),
  bairro: Yup.string(),
  estado: Yup.string(),
  cidade: Yup.string(),
  latitude: Yup.string().optional(),
  longitude: Yup.string().optional()
});

const validarAlterarLocalColeta = async (request, response, next) => {
  try {
    await AlterarLocalColetaSchema.validate(request.body, {
      abortEarly: false
    });
    next();
  } catch (error) {
    const errors = error.inner.map((err) => ({
      field: err.path,
      message: err.message
    }));
    return response.status(400).json({ errors });
  }
};

module.exports = validarAlterarLocalColeta;
