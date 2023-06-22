const {Mascotas} = require('../db');
const STATUS_OK = 200;
const STATUS_CREATED = 201;
const STATUS_ERROR = 404;



/*-----------------------------------------------OBTENER MASCOTAS-----------------------------------------------------*/
async function getMascota(req, res){
    try {
        const allMascotas = await Mascotas.findAll();
        if(!allMascotas.length) 
        res
        .status(STATUS_ERROR).json({message:'no hay mascotas en la BD'})
        else 
        res
        .status(STATUS_OK).json(allMascotas);
    } catch (error) {
        res
        .status(STATUS_ERROR).json({message:'error al obtener datos'});
    }
}

/*----------------------------CREAR MASCOTAS--------------------------------------*/
async function postMascota(req, res){
    const {nombre, especie , edad , genero , temperamento , descripcion, fundacionId } = req.body;
    try {
    (nombre && especie && edad && genero && temperamento && descripcion && fundacionId)                
        ? res.status(STATUS_CREATED).json(await Mascotas.create(req.body) )      
        : res.status(STATUS_ERROR).json({message: `faltan datos para crear una mascota`})
    } catch (error) {
        res.status(STATUS_ERROR).json({message: "Ocurrió un error al crear la mascotas: " + error})
    }
}

/*----------------------------------------------OBTENER POR ID----------------------------------------------------------*/

async function getByIdMascota(req, res){
    const {id} = req.params;
    console.log(id)
    try {
        const response = await Mascotas.findByPk(id);
        res.status(STATUS_OK).json(response);
    } catch (error) {
        res.status(STATUS_ERROR).json({message: `no se encontró el id ${error}`})
    }
}

/*-----------------------------------------------------------------------------------------------------------------------*/


module.exports={
    postMascota,
    getMascota,
    getByIdMascota
}