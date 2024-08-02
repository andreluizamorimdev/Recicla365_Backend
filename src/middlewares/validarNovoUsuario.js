const Yup = require("yup");

const usuarioSchema = Yup.object().shape({
  nome: Yup.string()
    .required("O nome é obrigatório")
    .min(8, "O nome deve ter no mínimo 8 caracteres")
    .max(150, "O nome deve ter no máximo 150 caracteres"),
  sexo: Yup.string()
    .required("Sexo é obrigatório")
    .oneOf(
      ["FEMININO", "MASCULINO", "OUTRO"],
      "Sexo deve ser FEMININO, MASCULINO ou OUTRO"
    ),
  CPF: Yup.string()
    .required("O CPF é obrigatório")
    .length(11, "O CPF deve ter 11 caracteres"),
  endereco: Yup.string().required("O endereço é obrigatório"),
  email: Yup.string()
    .required("O email é obrigatório")
    .email("O email deve ser válido"),
  senha: Yup.string()
    .required("A senha é obrigatória")
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
  data_nascimento: Yup.date()
    .required("A data de nascimento é obrigatória")
    .max(new Date(), "A data de nascimento deve ser uma data válida")
});

const validarNovoUsuario = async (request, response, next) => {
  try {
    await usuarioSchema.validate(request.body, { abortEarly: false });
    next();
  } catch (error) {
    const errors = error.inner.map((err) => ({
      field: err.path,
      message: err.message
    }));
    return response.status(400).json({ errors });
  }
};

module.exports = validarNovoUsuario;
