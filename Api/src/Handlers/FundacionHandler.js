const { Fundaciones } = require('../db')
const STATUS_CREATED = 201;
const STATUS_OK = 200;
const STATUS_ERROR = 404;


/*------------------------------------------------------CREAR FUNDACION -------------------------------------*/

async function postFundacion(req, res){
    
    try {
        res
        .status(STATUS_CREATED).json(await Fundaciones.create(req.body))
    } catch (error) {
        res
        .status(STATUS_ERROR).json({message: `no se puede crear ${error}`})
    }
}
/*------------------------------------------------------OBTENER FUNDACIONES -------------------------------------*/


async function getFundacion(req, res) {
    try {
        res.status(STATUS_OK).json(await Fundaciones.findAll())
    }
    catch{
        res.status(STATUS_ERROR).json({message: 'Error al obtener las fundaciones ' + error})
    }
}
/*------------------------------------------------------MODIFICAR FUNDACIONES -------------------------------------*/

async function updateFundacion(req , res) {
    const { id } = req.params;
    const { nombre, direccion, telefono, email, fundadaEn, mision} = req.body;
    try {
        const fundacion = await Fundaciones.findOne({
            where: {id}
        })
        if(!fundacion){
            return res
            .status(STATUS_ERROR).json({message:'Fundacion no encontrada'})
        }
        
        const updateFundacion = await fundacion.update({
            nombre,
            direccion,
            telefono,
            email,
            fundadaEn,
            mision,
        });

        return res.status(STATUS_OK).json(updateFundacion);

    } 
    catch (error) {
        res
        .status(STATUS_ERROR).json({message: `Error al actualizar la fundacion: ${error}`})
    }
    
}



module.exports = { 
    postFundacion,
    getFundacion,
    updateFundacion
}