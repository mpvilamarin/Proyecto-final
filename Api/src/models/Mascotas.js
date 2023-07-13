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
        allowNull: false,
      },
      especie: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tamaño: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      genero: {
        type: DataTypes.ENUM("Macho", "Hembra", "Desconocido"),
        allowNull: false,
      },
      temperamento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      castrado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
       image: {
           type: DataTypes.STRING,
          allowNull: false,
         },
      activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      borrado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // Cambiado a false
      },
    },
    {
      timestamps: false,
    }
  );
};
