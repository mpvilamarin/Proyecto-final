const { Donaciones } = require("../db");
const STATUS_OK = 200;
const STATUS_CREATED = 201;
const STATUS_ERROR = 404;

/*----------------------------OBTENER DONACIONES--------------------------------------*/

const getDonaciones = async (req, res) => {
  try {
    const allDonaciones = await Donaciones.findAll();
    if (!allDonaciones.length)
      res
        .status(STATUS_ERROR)
        .json({ message: "No hay donaciones realizadas" });
    else res.status(STATUS_OK).json(allDonaciones);
  } catch (error) {
    res
      .status(STATUS_ERROR)
      .json({ message: "Error al obtener las donaciones" });
  }
};

/*----------------------------OBTENER DONACIONES POR ID--------------------------------------*/
const userId = req.user.sub;
console.log(userId)

const getDonacionesByUserId = async (req, res) => {
  const userId = req.user.sub; // Obtener el ID del usuario autenticado desde Auth0
  try {
    const donaciones = await Donaciones.findAll({
      where: { userId: userId },
    });
    if (!donaciones.length) {
      res.status(STATUS_ERROR).json({ message: "No se encontraron donaciones para este usuario" });
    } else {
      res.status(STATUS_OK).json(donaciones);
    }
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: "Error al obtener las donaciones del usuario" });
  }
};


const getDonacionById = async (req, res) => {
  const { id } = req.params;
  try {
    const donacion = await Donaciones.findByPk(id);
    if (!donacion) {
      res.status(STATUS_ERROR).json({ message: "Donación no encontrada" });
    } else {
      res.status(STATUS_OK).json(donacion);
    }
  } catch (error) {
    res
      .status(STATUS_ERROR)
      .json({ message: "Error al obtener la donación por ID" });
  }
};

/*----------------------------NUEVA DONACION--------------------------------------*/

const postDonaciones = async (req, res) => {
  const { monto, fecha, descripcion, fundacionId, usuarioId } = req.body;
  try {
    if (monto && fecha && descripcion && fundacionId && usuarioId) {
      const nuevaDonacion = await Donaciones.create(req.body);
      res.status(STATUS_CREATED).json(nuevaDonacion);
    } else {
      res
        .status(STATUS_ERROR)
        .json({ message: "Faltan datos para crear una donación" });
    }
  } catch (error) {
    res
      .status(STATUS_ERROR)
      .json({ message: "Ocurrió un error al crear la donación: " + error });
  }
};

module.exports = { getDonaciones, postDonaciones, getDonacionesByUserId, getDonacionById };
