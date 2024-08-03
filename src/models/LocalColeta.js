const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const Usuario = require("./Usuario");

const LocalColeta = connection.define(
  "locais_coletas",
  {
    nome_local: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tipo_residuo: {
      type: DataTypes.ENUM(
        "plastico",
        "vidro",
        "papel",
        "metal",
        "organico",
        "eletronico",
        "outros"
      ),
      allowNull: false
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logradouro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false
    },
    latitude: {
      type: DataTypes.STRING
    },
    longitude: {
      type: DataTypes.STRING
    },
    link_maps: {
      type: DataTypes.STRING
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "usuarios",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    }
  },
  { paranoid: true }
);

Usuario.hasMany(LocalColeta, { foreignKey: "usuario_id" });

module.exports = LocalColeta;
