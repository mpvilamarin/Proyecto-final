const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Adopciones",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nombreCompleto: {
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
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pais: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ocupacion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fechaNacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      motivoAdopcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      compromiso: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      fechaAdopcion: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  );
};
