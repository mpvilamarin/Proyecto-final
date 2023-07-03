const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Donacion",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      unit_price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
