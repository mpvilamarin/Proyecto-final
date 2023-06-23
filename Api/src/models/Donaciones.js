const {DataTypes, } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Donaciones', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true,
            allowNull: false
        },
        monto: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true
        },
    },
    {
        timestamps: false,     
    });
} 