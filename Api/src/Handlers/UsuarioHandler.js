const { config } = require('dotenv');
const { Usuarios } = require('../db');
const nodemailer = require('nodemailer');
require('dotenv').config();
const {USER_EMAIL, PASS_EMAIL} = process.env;


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

async function postRegistroUsuario(req, res){
    const {nombre, fechaNacimiento, email, contraseña} = req.body

    try {
        if(!nombre || !fechaNacimiento || !email || !contraseña){
            return res
            .status(STATUS_ERROR).json({message:'se requiere mas informacion'})
        }

        const validarCorreo = await Usuarios.findOne({
            where:{
                email: email
            }
        });

        if(validarCorreo){
            return res.status(STATUS_ERROR).json({message: `el usuario ${email} ya esta registrado`});
        }

        const newUsuario = await Usuarios.create({
            nombre,
            fechaNacimiento,
            email,
            contraseña,
        })


        await enviarCorreoBienvenida(email,nombre);

        res
        .status(STATUS_CREATED).json(newUsuario)
    } catch (error) {
        res
        .status(STATUS_ERROR).json({message:'error al crear Usuario' + error})
    }
}

async function enviarCorreoBienvenida(email, nombre) {
    
    try {
        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: USER_EMAIL,
                pass: PASS_EMAIL
            } 
        });

        let correo = {
            from: USER_EMAIL,
            to: email,
            subject: 'Bienvenido a nuestra aplicación',
            text: '¡Hola! Gracias por crear tu perfil en nuestra aplicación. Esperamos que disfrutes de todas las funciones que ofrecemos.',
            html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
                <tr height="200px">
                    <td bgcolor="" width="600px">
                        <h1 style="color: #fff text-aling:center">Bienvenido</h1>
                        <p  style="color: #fff text-aling:center">
                            <span style="color: #e84393">${nombre}</span>
                            a la aplicacion
                        </p>
                    </td>
                </tr>

                <tr bgcolor="#fff">
                    <td style="text-aling:center">
                        <p style="color: #000">Adopta a tu mejor compañia con un Click!</p>
                    </td>
                </tr>
            </table>` 
                
        };

        let info = await transporter.sendMail(correo);
        console.log('Correo de bienvenida enviado: ' + info.messageId);
    } catch (error) {
        console.error('Error al enviar el correo de bienvenida:', error);
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