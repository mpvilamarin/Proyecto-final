const {Mascotas, Fundaciones} = require('../db');

const STATUS_OK =200;
const STATUS_CREATED = 201;
const STATUS_ERROR=404;





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
    const {nombre, especie , edad , genero , temperamento , descripcion, fundacion} = req.body;
    try {
        if(!nombre || !especie || !edad || !genero || !temperamento || !descripcion ){
            return res
            .status(STATUS_ERROR).json({message: 'se requiere completar todos los datos'});
        }

        const newMascota = await Mascotas.create({
            nombre,
            especie, 
            edad, 
            genero, 
            temperamento, 
            descripcion
        });

        if(fundacion){
            console.log(':::', newMascota);
            let mascotas = await Fundaciones.findAll({ where : { nombre:fundacion }});
            await newMascota.addFundaciones(mascotas);
        }
        res
        .status(STATUS_CREATED).json(newMascota);
        
    } catch (error) {
        res.status(STATUS_ERROR).json({message: "Ocurrió un error al crear la mascotas: " + error});
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

async function deleteMascota(req,res){
    const {nombre} =req.body;
    try {
        const deleteMascota = await Mascotas.destroy({
            where:{
                nombre:nombre
            },
        });

        if(deleteMascota === 0){
            res
            .status(STATUS_ERROR).json({message:'la mascota no fue encontrada'})
        }else{
            res
            .status(STATUS_OK).json({message:'la mascota fue eliminada con exito'})
        }
    } catch (error) {
        res
        .status(STATUS_ERROR).json({message:`error al eliminar la mascota ${error}`})
    }
}


async function updateMascota(req, res){
    const { nombre } = req.params

    const {especie,edad,genero,temperamento,descripcion} = req.body

    try {
        const mascota = await Mascotas.findOne({
            where: { nombre },
        });

        if(!mascota){
            return res
            .status(STATUS_ERROR).json({message:'Mascotas no encontrada'})
        }

        const updateMascota = await mascota.update({
            especie,
            edad,
            genero,
            temperamento,
            descripcion,
        });

        return res.status(STATUS_OK).json(updateMascota);

    } catch (error) {
        res
        .status(STATUS_ERROR).json({message: `Error al actualizar la mascota: ${error}`})
    }
}



    


module.exports={
    postMascota,
    getMascota,
    getByIdMascota,
    deleteMascota,
    updateMascota,
}