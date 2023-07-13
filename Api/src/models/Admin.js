const {DataTypes, } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Admin', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey:true,
            allowNull: false
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        numeroIdentificacion:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fechaNacimiento: {
            type: DataTypes.DATEONLY,
            allowNull:false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
            isEmail: true
            }
        },
        contraseña: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'admin'
          }
        
    },
    {
        timestamps: false,     
    });
} 