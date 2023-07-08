const { Mascotas, Fundaciones } = require("../db");

const STATUS_OK = 200;
const STATUS_CREATED = 201;
const STATUS_ERROR = 404;

/*-----------------------------------------------OBTENER MASCOTAS-----------------------------------------------------*/
async function getMascota(req, res) {
  try {
    const allMascotas = await Mascotas.findAll({
      include: {
        model: Fundaciones,
        attributes: ["nombre"],
      },
    });
    if (!allMascotas.length)
      res.status(STATUS_ERROR).json({ message: "no hay mascotas en la BD" });
    else res.status(STATUS_OK).json(allMascotas);
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: "error al obtener datos" });
  }
}

/*----------------------------CREAR MASCOTAS--------------------------------------*/
async function postMascota(req, res) {
  const {
    nombre,
    especie,
    edad,
    genero,
    temperamento,
    descripcion,
    fundacionId,
    tamaño,
    castrado,
  } = req.body;
  try {
    if (
      !nombre ||
      !especie ||
      !edad ||
      !genero ||
      !temperamento ||
      !descripcion ||
      !tamaño ||
      !castrado
    ) {
      return res
        .status(STATUS_ERROR)
        .json({ message: "se requiere completar todos los datos" });
    }
    const newMascota = await Mascotas.create({
      nombre,
      especie,
      edad,
      genero,
      temperamento,
      descripcion,
      tamaño,
      castrado,
    });
      console.log(fundacionId)
    if (fundacionId) {
      console.log(":::", newMascota);
      let mascotas = await Fundaciones.findAll({
        where: { nombre: fundacionId },
      });
      await newMascota.addFundaciones(mascotas);
    }
    res.status(STATUS_CREATED).json(newMascota);
  } catch (error) {
    res
      .status(STATUS_ERROR)
      .json({ message: `Ocurrió un error al crear la mascotas: ${error} ` });
  }
}

/*----------------------------------------------OBTENER POR ID----------------------------------------------------------*/

async function getByIdMascota(req, res) {
  try {
    const { id } = req.params;
    const response = await Mascotas.findByPk(id, {
      include: {
        model: Fundaciones,
        attributes: ["nombre"],
      },
    });
    res.status(STATUS_OK).json(response);
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: `no se encontró el id ${error}` });
  }
}

/*-----------------------------------------------------------------------------------------------------------------------*/

async function deleteMascota(req, res) {
  const { nombre } = req.params;

  try {
    const deleteMascota = await Mascotas.findOne({
      where: {
        nombre,
        activo: true,
      },
    });

    if (!deleteMascota) {
      return res
        .status(STATUS_ERROR)
        .json({ message: "La mascota no fue encontrada" });
    }

    await deleteMascota.update({
      activo: false,
      fechaBorrado: new Date(),
    });

    res.status(STATUS_OK).json({ message: `Mascota borrada con éxito` });
  } catch (error) {
    res
      .status(STATUS_ERROR)
      .json({ message: `Error al eliminar la mascota ${error}` });
  }
}

async function updateMascota(req, res) {
  const { nombre } = req.params;

  const { especie, edad, genero, temperamento, descripcion } = req.body;

  try {
    const mascota = await Mascotas.findOne({
      where: { nombre },
    });

    if (!mascota) {
      return res
        .status(STATUS_ERROR)
        .json({ message: "Mascotas no encontrada" });
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
      .status(STATUS_ERROR)
      .json({ message: `Error al actualizar la mascota: ${error}` });
  }
}

module.exports = {
  postMascota,
  getMascota,
  getByIdMascota,
  deleteMascota,
  updateMascota,
};
