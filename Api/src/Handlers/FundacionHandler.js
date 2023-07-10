const { Fundaciones, Reviews, Mascotas } = require("../db");
const enviarCorreoBienvenida = require("./CorreosHandler");
const STATUS_CREATED = 201;
const STATUS_ERROR = 404;
const STATUS_OK = 200;

async function postFundacion(req, res) {

  

  const {
    nombre,
    ciudad,
    direccion,
    telefono,
    email,
    contraseña,
    fundadaEn,
    mision,
    borrado,
    tipo,
  } = req.body;

  try {
    if (!req.body) {
      return res
        .status(STATUS_ERROR)
        .json({ message: `error de informacion ` });
    }

    const validarCorreo = await Fundaciones.findOne({
      where: { email: email },
    });

    if (validarCorreo) {
      return res
        .status(STATUS_ERROR)
        .json({ message: `el usuario ${email} ya esta registrado` });
    }

    const newFundacion = await Fundaciones.create({
      nombre,
      ciudad,
      direccion,
      telefono,
      email,
      contraseña,
      fundadaEn,
      mision,
      borrado,

      tipo:'fundacion',

    });

    await enviarCorreoBienvenida(email, nombre);

    res.status(STATUS_CREATED).json(newFundacion);
  } catch (error) {
    res
      .status(STATUS_ERROR)
      .json({ message: `error al crear fundacion ${error}` });
  }
}

async function getAllFundaciones(req, res) {
  const { nombre } = req.query;
  try {
    if (nombre) {
      const response = await Fundaciones.findAll({
        where: { nombre: nombre },
        include: {
          model: Reviews,
          attributes: ["calificacion", "comentarios"],
        },
      });
      if (response) {
        return res.status(STATUS_OK).json(response);
      }
    } else {
      let allFundaciones = await Fundaciones.findAll({
        include: {
          model: Reviews,
          attributes: ["calificacion", "comentarios"],
        },
      });
      return res.status(STATUS_OK).json(allFundaciones);
    }
  } catch (error) {
    return res.status(STATUS_ERROR).json({ message: `Error: ${error}` });
  }
}

async function updateFundacion(req, res) {
  const { id } = req.params;

  const { nombre, ciudad, direccion, telefono, email, fundadaEn, mision } =
    req.body;

  try {
    const fundaciones = await Fundaciones.findOne({
      where: {
        id,
      },
    });

    if (!fundaciones) {
      return res
        .status(STATUS_ERROR)
        .json({ message: "Fundacion no encontrada" });
    }

    const updateFundacion = await fundaciones.update({
      nombre,
      ciudad,
      direccion,
      telefono,
      email,
      fundadaEn,
      mision,
    });

    return res.status(STATUS_OK).json(updateFundacion);
  } catch (error) {
    res
      .status(STATUS_ERROR)
      .json({ message: `Error al actualizar la fundacion: ${error}` });
  }
}

async function getFundacionById(req, res) {
  const { id } = req.params;
  try {
    const response = await Fundaciones.findByPk(id, {
      include: [
        {
          model: Reviews,
          attributes: ['calificacion', 'comentarios'],
        },
        {
          model: Mascotas,
          attributes: ['nombre', 'genero', 'temperamento', 'id', 'image']
        }
      ]
    });
    res.status(STATUS_OK).json(response);
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: `no se encontró el id ${error}` });
  }
}


async function postAutenticarFundacion(req,res){
  const { email, contraseña } = req.body;

  try {
    const fundacionLogin = await Fundaciones.findOne({ where: { email, contraseña } });
    if (fundacionLogin) {
      return res.status(STATUS_CREATED).json({
        message: 'Logueado con éxito como fundación',
        email,
        usuario:'fundacion',
        isLogued:true,

      });
    }

    return res.status(STATUS_ERROR).json({ message: 'Usuario no encontrado' });
  } catch (error) {
    return res.status(STATUS_ERROR).json({ message: 'Error al autenticar al usuario' });
  }
}

module.exports = { 
    postFundacion,
    getAllFundaciones,
    updateFundacion,
    getFundacionById,
    postAutenticarFundacion,

}
