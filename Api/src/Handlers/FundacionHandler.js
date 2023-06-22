const { Fundaciones } = require('../db')
const STATUS_CREATED = 201;
const STATUS_ERROR = 404;



async function postFundacion(req, res){
    
    try {
        res
        .status(STATUS_CREATED).json(await Fundaciones.create(req.body))
    } catch (error) {
        res
        .status(STATUS_ERROR).json({message: `no se puede crear ${error}`})
    }
}

module.exports = { postFundacion }