const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const { encriptaSenha } = require("../utils/functions");

const Usuario = connection.define(
  "Usuario",
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
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    paranoid: true,
    hooks: {
      beforeCreate: encriptaSenha,
      beforeSave: encriptaSenha,
      beforeUpdate: encriptaSenha
    }
  }
);

module.exports = Usuario;
