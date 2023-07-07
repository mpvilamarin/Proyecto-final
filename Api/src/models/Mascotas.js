const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Mascotas",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      especie: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      tamanio: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      edad: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      genero: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      temperamento: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      castrado: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      // activo: {
      //   type: DataTypes.BOOLEAN,
      //   defaultValue: true,
      //   allowNull: false,
      // },
      // fechaBorrado: {
      //   type: DataTypes.DATE,
      //   allowNull: true,
      // },
    },
    {
      timestamps: false,
    }
  );
};
