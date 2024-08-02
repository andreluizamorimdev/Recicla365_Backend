const { Op } = require("sequelize");
const Usuario = require("../models/Usuario");

class UsuarioController {
  async criarUsuario(request, response) {
    try {
      const { nome, sexo, CPF, endereco, email, senha, data_nascimento } =
        request.body;

      const usuarioExistente = await Usuario.findOne({
        where: {
          [Op.or]: [{ CPF: CPF }, { email: email }]
        }
      });

      if (usuarioExistente) {
        return response
          .status(409)
          .json({ message: "Já existe um usario com esse CPF ou email" });
      }

      const usuario = await Usuario.create({
        nome,
        sexo: sexo.toUpperCase(),
        CPF,
        endereco,
        email,
        senha,
        data_nascimento
      });

      response.status(201).json({
        nome: usuario.nome,
        sexo: usuario.sexo,
        CPF: usuario.CPF,
        endereco: usuario.endereco,
        email: usuario.email,
        data_nascimento: usuario.data_nascimento
      });
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ message: "Erro ao criar novo usuario" });
    }
  }
}

module.exports = new UsuarioController();
