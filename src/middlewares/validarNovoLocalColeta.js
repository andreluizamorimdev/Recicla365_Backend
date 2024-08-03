const Yup = require("yup");

const LocalColetaSchema = Yup.object().shape({
  nome_local: Yup.string().required("Nome do local é obrigatório"),
  descricao: Yup.string().required("Descrição do local é obrigatória"),
  tipo_residuo: Yup.string()
    .required("Tipo de resíduo é obrigatório")
    .oneOf(
      [
        "plastico",
        "vidro",
        "papel",
        "metal",
        "organico",
        "eletronico",
        "outros"
      ],
      "Tipo de resisduo deve ser plastico, vidro, papel, metal, organico, eletronico ou outros"
    ),
  cep: Yup.string().required("CEP é obrigatório"),
  logradouro: Yup.string().required("Logradouro é obrigatório"),
  numero: Yup.string().required("Número é obrigatório"),
  bairro: Yup.string().required("Bairro é obrigatório"),
  estado: Yup.string().required("Estado é obrigatório"),
  cidade: Yup.string().required("Cidade é obrigatória"),
  latitude: Yup.string().optional(),
  longitude: Yup.string().optional()
});

const validarNovoLocalColeta = async (request, response, next) => {
  try {
    await LocalColetaSchema.validate(request.body, { abortEarly: false });
    next();
  } catch (error) {
    const errors = error.inner.map((err) => ({
      field: err.path,
      message: err.message
    }));
    return response.status(400).json({ errors });
  }
};

module.exports = validarNovoLocalColeta;
