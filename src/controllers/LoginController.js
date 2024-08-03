const Usuario = require("../models/Usuario");
const { compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

class LoginController {
  async login(request, response) {
    const { email, senha } = request.body;

    if (!email || !senha) {
      return response
        .status(400)
        .json({ message: "Email e senha são obrigatórios" });
    }

    const usuario = Usuario.findOne({ where: { email: email } });

    if (!usuario) {
      return response.status(404).json({ message: "Usuário não encontrado" });
    }

    const compararSenha = compareSync(senha, usuario.senha);

    if (compararSenha === false) {
      return response
        .status(400)
        .json({ message: "Email ou senha incorretos" });
    }

    const payload = {
      id: usuario.id,
      nome: usuario.nome
    };

    const token = sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });

    return response.status(200).json({ token: token, nome: usuario.nome });
  }
}

module.exports = new LoginController();
