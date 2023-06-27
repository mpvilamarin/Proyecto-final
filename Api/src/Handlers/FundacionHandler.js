const { Fundaciones } = require("../db");
const STATUS_CREATED = 201;
const STATUS_OK = 200;
const STATUS_ERROR = 404;


async function postFundacion(req, res) {
  try {
    res.status(STATUS_CREATED).json(await Fundaciones.create(req.body));
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: `no se puede crear ${error}` });
  }
}


/*------------------------------------------------------CREAR FUNDACION -------------------------------------*/


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

module.exports = { postFundacion }