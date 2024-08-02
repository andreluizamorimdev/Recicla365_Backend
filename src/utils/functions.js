const bcrypt = require("bcryptjs");

const encriptaSenha = (usuario) => {
  const salt = bcrypt.genSaltSync(10);
  usuario.senha = bcrypt.hashSync(usuario.senha, salt);
};

module.exports = { encriptaSenha };
