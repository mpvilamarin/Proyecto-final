const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Fundaciones', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
            isEmail: true
            }
        },
        fundadaEn: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        mision: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    },
    {
      timestamps: false,
    }
  );
};
