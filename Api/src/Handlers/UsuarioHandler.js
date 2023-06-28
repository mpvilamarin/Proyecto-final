const { Usuarios } = require('../db');
// const jwt = require("jsonwebtoken");

const STATUS_OK =200;
const STATUS_CREATED = 201;
const STATUS_ERROR=404;


async function getRegistroUsuario(req,res){
    try {
        const allUsuarios = await Usuarios.findAll();
        if(!allUsuarios.length) 
        res
        .status(STATUS_ERROR).json({message:'no hay Usuarios en la BD'})
        else 
        res
        .status(STATUS_OK).json(allUsuarios);
    } catch (error) {
        res
        .status(STATUS_ERROR).json({message:'error al obtener Usuarios'});
    }
}

async function getIdUsuario(req, res){
    const {id} = req.params;

    try {
        const getById = id.toUpperCase();
        const getUsuario = await Usuarios.findOne({
            where:{
                id: getById
            }
        });
        if(getUsuario) return res.status(STATUS_OK).json(getUsuario)
        else return res.status(STATUS_ERROR).json('no existe ese id para usuario')
    } catch (error) {
        res.status(STATUS_ERROR).json(`error ${error}`)
    }
}
// async function loginUsuario(req,res) {
//     const { email , contraseña} = req.body;
//     const usuarioLogin = await Usuarios.findOne({ where : { email , contraseña }});
//     if(!usuarioLogin) 
//         return res.status(STATUS_ERROR).json({message:'usuario no encontrado'});
//     if (usuarioLogin.dataValues.contraseña !== contraseña)
//         return res.status(STATUS_ERROR).json({message:'contraseña incorrecta'});
//     const jwtToken = jwt.sign(usuarioLogin.dataValues, "secret")
//     res.status(STATUS_CREATED).json({message: "Logueado con exito", token: jwtToken, email: email});
// }

async function postRegistroUsuario(req, res){
    const {nombre, fechaNacimiento, email, contraseña} = req.body

    try {
        if(!nombre || !fechaNacimiento || !email || !contraseña){
            return res
            .status(STATUS_ERROR).json({message:'se requiere mas informacion'})
        }

        const newUsuario = await Usuarios.create({
            nombre,
            fechaNacimiento,
            email,
            contraseña,
        })

        res
        .status(STATUS_CREATED).json(newUsuario)
    } catch (error) {
        res
        .status(STATUS_ERROR).json({message:'error al crear Usuario' + error})
    }
}

async function updateUsuario(req, res){
    const { email } = req.params

    const {nombre, fechaNacimiento, contraseña} = req.body

    try {
        const usuario = await Usuarios.findOne({
            where: {
                email,
            },
        });

        if(!usuario){
            return res
            .status(STATUS_ERROR).json({message: 'Usuario no encontrado'})
        }

        const updateUsuario = await usuario.update({
            nombre,
            fechaNacimiento,
            contraseña,
        });

        return res.status(STATUS_OK).json(updateUsuario);
    } catch (error) {
        res.status(STATUS_ERROR).json({message:`Error al actualizar Usuario: ${error}`});
    }
}

async function deleteUsuario(req, res){
    const { email } = req.params;

    try {
        const usuario = await Usuarios.findOne({
            where:{
                email,
                activo: true
            }
        });

        if(!usuario){
            return res.status(STATUS_ERROR).json({message: 'Usuario no encontrado'})
        }

        await usuario.update({
            activo: false,
            fechaBorrado: new Date()
        });

        return res.status(STATUS_OK).json({message: 'usuario borrado correctamente'})
    } catch (error) {
        return res.status(STATUS_ERROR).json({message: `error al borrar Usuario: ${error}`});
    }
}

module.exports={
    postRegistroUsuario,
    getRegistroUsuario,
    updateUsuario,
    deleteUsuario,
    getIdUsuario,
   
}