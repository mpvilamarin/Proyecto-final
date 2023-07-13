const {DataTypes, } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Reviews', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        calificacion:{
            type: DataTypes.ENUM,
            values: ['0','1','2','3','4','5'],
            allowNull: false,
        },
        comentarios:{
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        timestamps: false,     
    });
} 