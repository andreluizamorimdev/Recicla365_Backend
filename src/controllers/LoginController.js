const Usuario = require("../models/Usuario");
const { compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

class LoginController {
  async login(request, response) {
    try {
      const { email, senha } = request.body;

      if (!email || !senha) {
        return response
          .status(400)
          .json({ message: "Email e senha são obrigatórios" });
      }

      const usuario = await Usuario.findOne({ where: { email: email } });

      if (!usuario) {
        return response.status(404).json({ message: "Usuário não encontrado" });
      }

      const compararSenha = compareSync(senha, usuario.senha);

      if (compararSenha === false) {
        return response
          .status(400)
          .json({ message: "Email e/ou senha invalidos" });
      }

      const payload = {
        id: usuario.id,
        nome: usuario.nome
      };

      const token = sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d"
      });

      return response.status(200).json({ token: token, nome: usuario.nome });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ message: "Erro ao realizar login" });
    }
  }
}

module.exports = new LoginController();
