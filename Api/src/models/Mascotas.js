const {DataTypes, } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Mascotas', {
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
        especie: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        genero: {
            type: DataTypes.ENUM('Macho', 'Hembra', 'Desconocido'),
            allowNull: false
        },
        temperamento: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    },
    {
        timestamps: false,     
    });
} 