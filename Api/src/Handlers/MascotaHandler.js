const { Mascotas, Fundaciones, Usuarios } = require("../db");

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
    image,
    borrado
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
      !castrado ||
      !image
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
      image,
      borrado
    });
      console.log(fundacionId)
    if (fundacionId) {
      console.log(":::", newMascota);
      let mascotas = await Fundaciones.findAll({
        where: { nombre: fundacionId },
      });
      console.log(mascotas)
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

async function borradoMascota(req, res) {
  const { id } = req.params;
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
    image,
    } = req.body;

  try {
    const mascota = await Mascotas.findOne({
      where: {
        id,
      },
    });

    if (!mascota) {
      return res.status(STATUS_ERROR).json({ message: "Mascota no encontrada" });
    }

    const updateMascota = await mascota.update({
      borrado: !mascota.borrado, // Cambiar al estado opuesto
    });

    return res.status(STATUS_OK).json(updateMascota);
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: `Error al actualizar la fundacion: ${error}` });
  }
}


async function updateMascota(req, res) {
  const { id } = req.params;
  

  const {nombre, especie,tamaño, edad, genero, temperamento, descripcion,image, adop } = req.body;

  try {
    const mascota = await Mascotas.findOne({
      where: { id },
    });

    if (!mascota) {
      return res
        .status(STATUS_ERROR)
        .json({ message: "Mascotas no encontrada" });
    }

    const updateMascota = await mascota.update({

      nombre,
      especie,
      tamaño,
      edad,
      genero,
      temperamento,
      descripcion,
      image,
      activo: adop
    });
    return res.status(STATUS_OK).json(updateMascota);
  } catch (error) {
    res
      .status(STATUS_ERROR)
      .json({ message: `Error al actualizar la mascota: ${error}` });
  }
}

async function addFav(req, res) {
  const info = req.body;

  try {
    const usuario = await Usuarios.findOne({
      where: { email: info.email },
    });

    const mascota = await Mascotas.findOne({
      where: { id: info.id },
    });


    if (usuario && mascota) {
      await usuario.addMascotas(mascota);
      res.status(200).json({ message: 'Mascota añadida a favoritos correctamente' });
    } else {
      res.status(404).json({ message: 'Usuario o mascota no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: `Error al añadir a favoritos a la mascota: ${error}` });
  }
}

async function removeFav(req, res) {
  const info = req.params;
  try {
    const usuario = await Usuarios.findOne({
      where: { email: info.email },
    });

    const mascota = await Mascotas.findOne({
      where: { id: info.id },
    });

    if (usuario && mascota) {
      await usuario.removeMascotas(mascota);
      res.status(200).json({ message: 'Mascota removida de favoritos correctamente' });
    } else {
      res.status(404).json({ message: 'Usuario o mascota no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: `Error al remover la mascota de favoritos: ${error}` });
  }
}



module.exports = {
  postMascota,
  getMascota,
  getByIdMascota,
  borradoMascota,
  updateMascota,
  addFav,
  removeFav
};
