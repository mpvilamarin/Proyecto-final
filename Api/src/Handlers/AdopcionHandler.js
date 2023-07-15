const { Adopciones, Usuarios } = require("../db");
const STATUS_OK = 200;
const STATUS_CREATED = 201;
const STATUS_ERROR = 404;

/*----------------------------OBTENER ADOPCIONES--------------------------------------*/

const getAdopciones = async (req, res) => {
  try {
    const allAdopciones = await Adopciones.findAll();
    if (!allAdopciones.length)
      res
        .status(STATUS_ERROR)
        .json({ message: "No hay adopciones realizadas" });
    else res.status(STATUS_OK).json(allAdopciones);
  } catch (error) {
    res
      .status(STATUS_ERROR)
      .json({ message: "Error al obtener las adopciones" });
  }
};

const getAdopcionesByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const adopciones = await Adopciones.findAll({
      where: { email: email },
    });

    if (!adopciones.length) {
      res
        .status(STATUS_ERROR)
        .json({ message: "No hay adopciones realizadas por este usuario" });
    } else {
      res.status(STATUS_OK).json(adopciones);
    }
  } catch (error) {
    res
      .status(STATUS_ERROR)
      .json({ message: "Error al obtener las adopciones" });
  }
};

/*----------------------------OBTENER ADOPCIONES POR ID--------------------------------------*/

const getAdopcionById = async (req, res) => {
  const { id } = req.params;
  try {
    const adopcion = await Adopciones.findByPk(id);
    if (!adopcion) {
      res
        .status(STATUS_ERROR)
        .json({ message: "No existe adopcion con este ID" });
    } else {
      res.status(STATUS_OK).json(adopcion);
    }
  } catch (error) {
    res
      .status(STATUS_ERROR)
      .json({ message: "Error al obtener la adopcion por ID" });
  }
};

/*----------------------------NUEVA ADOPCION--------------------------------------*/

const postAdopciones = async (req, res) => {
  try {
    const { mascotaId, fundacionId, ...restData } = req.body;

    const nuevaAdopcion = await Adopciones.create({
      mascotaId,
      fundacionId,
      fechaAdopcion: new Date().toISOString().slice(0, 10),
      ...restData,
    });

    res.status(STATUS_CREATED).json(nuevaAdopcion);
  } catch (error) {
    res
      .status(STATUS_ERROR)
      .json({ message: "Ocurrió un error al crear Adopcion: " + error });

    console.log(error);
  }
};

module.exports = {
  getAdopciones,
  getAdopcionById,
  postAdopciones,
  getAdopcionesByEmail,
};
