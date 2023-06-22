const { Registros } = require('../db');

const STATUS_OK =200;
const STATUS_CREATED = 201;
const STATUS_ERROR=404;


async function getRegistroUsuario(req,res){
    try {
        const allRegistros = await Registros.findAll();
        if(!allRegistros.length) 
        res
        .status(STATUS_ERROR).json({message:'no hay registros en la BD'})
        else 
        res
        .status(STATUS_OK).json(allRegistros);
    } catch (error) {
        res
        .status(STATUS_ERROR).json({message:'error al obtener registros'});
    }
}

async function postRegistroUsuario(req, res){
    const {nombre, fechaNacimiento, email, contraseña} = req.body

    try {
        if(!nombre || !fechaNacimiento || !email || ! contraseña){
            return res
            .status(STATUS_ERROR).json({message:'se requiere mas informacion'})
        }

        const newUsuario = await Registros.create({
            nombre,
            fechaNacimiento,
            email,
            contraseña,
        })

        console.log(':::::', newUsuario);
        res
        .status(STATUS_CREATED).json(newUsuario)
    } catch (error) {
        res
        .status(STATUS_ERROR).json({message:'error al crear Usuario'})
    }
}


module.exports={
    postRegistroUsuario,
    getRegistroUsuario,
}