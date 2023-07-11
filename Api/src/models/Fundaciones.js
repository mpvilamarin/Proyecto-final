const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Fundaciones",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fundadaEn: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      mision: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      borrado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "fundacion",
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      timestamps: false,
    }
  );
};
