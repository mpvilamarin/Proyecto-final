const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Donaciones",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      monto: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
       email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },

      // estado: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   defaultValue: "pending",
      // },
    },
    {
      timestamps: false,
    }
  );
};
