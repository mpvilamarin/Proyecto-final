const { Fundaciones } = require('../db')
const STATUS_CREATED = 201;
const STATUS_ERROR = 404;
const STATUS_OK = 200;



async function postFundacion(req, res){
    
    try {
        res
        .status(STATUS_CREATED).json(await Fundaciones.create(req.body));
    } catch (error) {
        res
        .status(STATUS_ERROR).json({message: `no se puede crear ${error}`});
    }
}   

async function getAllFundaciones(req, res){
    const {nombre} = req.params;
    try {
        if( nombre ) {
            const response = await Fundaciones.findOne(nombre);
            if(response.length > 0)
            {
               return res.status(200).json(response);
            }    
        }
        let allFundaciones = await Fundaciones.findAll();
        res.status(STATUS_OK).json(allFundaciones);
    } catch (error) {
            return res.status(STATUS_ERROR).json({message:error});
    }
}
async function updateFundacion(req, res){
    const { id } = req.params

    const {nombre, ciudad, direccion, telefono, email, fundadaEn , mision} = req.body

    try {
        const fundaciones = await Fundaciones.findOne({
            where: {
                id,
            },
        });

        if(!fundaciones){
            return res
            .status(STATUS_ERROR).json({message: 'Fundacion no encontrada'})
        }

        const updateFundacion = await fundaciones.update({
            nombre,
            ciudad,
            direccion,
            telefono,
            email,
            fundadaEn,
            mision
        });

        return res.status(STATUS_OK).json(updateFundacion);
    } catch (error) {
        res.status(STATUS_ERROR).json({message:`Error al actualizar la fundacion: ${error}`});
    }
}

async function getFundacionById(req, res){
    const {id} = req.params;
    try {
        const response = await Fundaciones.findByPk(id);
        res.status(STATUS_OK).json(response);
    } catch (error) {
        res.status(STATUS_ERROR).json({message: `no se encontró el id ${error}`})
    }
}


module.exports = { 
    postFundacion,
    getAllFundaciones,
    updateFundacion,
    getFundacionById
}