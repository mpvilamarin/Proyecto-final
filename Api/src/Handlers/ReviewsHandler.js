const { Reviews, Fundaciones } = require('../db')

const STATUS_OK =200;
const STATUS_CREATED = 201;
const STATUS_ERROR=404;

async function CalificarFundacines(req, res){
    const { calificacion, comentarios,  fundacion } =  req.body;
  console.log(calificacion, comentarios, fundacion)
    try {
        const crearReview = await Reviews.create({
            calificacion, 
            comentarios
        })

        if(fundacion){
          console.log(':::::', crearReview);
          let fundacionreview = await Fundaciones.findOne({where: { nombre: fundacion}});
          await crearReview.addFundaciones(fundacionreview);
        }
        res.status(STATUS_CREATED).json(crearReview);
    } catch (error) {
        res.status(STATUS_ERROR).json({message: `No es posible calificar la fundacion internalError ${error}`})
    }

}


async function getReviews(req, res) {
  try {
    const reviews = await Reviews.findAll({
      include: {
        model: Fundaciones,
        attributes:['nombre']
      }
    });

    if (!reviews.length) {
      return res.status(STATUS_ERROR).json({ message: 'No se encuentra Informacion en la base de datos' });
    } else {
      return res.status(STATUS_OK).json(reviews);
    }
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: `No se pudo obtener Informacion de las reviews. Error: ${error}` });
  }
}


module.exports = {
    CalificarFundacines,
    getReviews
};