const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const { hashSync } = require("bcryptjs");

const Usuario = connection.define(
  "usuarios",
  {
    nome: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    sexo: {
      type: DataTypes.ENUM("FEMININO", "MASCULINO", "OUTRO"),
      allowNull: false
    },
    CPF: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  },
  {
    paranoid: true
  }
);

Usuario.beforeSave((usuario) => {
  usuario.senha = hashSync(usuario.senha, 10);
  return usuario;
});

module.exports = Usuario;
