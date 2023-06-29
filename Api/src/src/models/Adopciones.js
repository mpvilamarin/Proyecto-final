const {DataTypes, } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Adopciones', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },
    {
        timestamps: false,     
    });
} 