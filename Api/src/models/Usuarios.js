const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Usuarios",
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
      fechaNacimiento: {
        type: DataTypes.DATEONLY,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      // password: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "usuario",
      },
      // activo: {
      //     type: DataTypes.BOOLEAN,
      //     defaultValue: true,
      //     allowNull: false
      // },
      // fechaBorrado:{
      //     type: DataTypes.DATE
      // }
    },
    {
      timestamps: false,
    }
  );
};
