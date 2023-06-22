const {Mascota} = require('../db');

const STATUS_OK =200;
const STATUS_CREATED = 201;
const STATUS_ERROR=404;



async function getMascota(req, res){
    try {
        const allMascotas = await Mascota.findAll();
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
async function postMascota(req, res){
    const{nombre,especie,edad,genero,temperamento, descripcion} = req.body;


    try {
        const newMascota = await Mascota.create({
            nombre,
            especie,
            edad,
            genero,
            temperamento,
            descripcion,
        });

        res
        .status(STATUS_CREATED).json(newMascota)
    } catch (error) {
        res
        .status(STATUS_ERROR).json({message: `no se puede crear ${error}`})
    }
}

async function deleteMascota(req,res){
    const {nombre} =req.body;
    try {
        const deleteMascota = await Mascota.destroy({
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

    

module.exports={
    postMascota,
    getMascota,
    deleteMascota,
    updateMascota,
}