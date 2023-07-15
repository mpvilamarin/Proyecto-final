
const { Admin, Fundaciones } = require('../db');
const STATUS_OK = 200;
const STATUS_CREATED = 201;
const STATUS_ERROR = 404;

async function loginUsuarios(req, res) {
  const { email, contrasenia } = req.body;


  try {
    const adminLogin = await Admin.findOne({ where: { email, contrasenia } });
    if (adminLogin) {
      return res.status(STATUS_CREATED).json({
        message: 'Logueado con éxito como admin',
        email,
        usuario:'admin',
        isLogued:true,
      });
    }

    const fundacionLogin = await Fundaciones.findOne({ where: { email, contrasenia } });
    if (fundacionLogin) {
      return res.status(STATUS_CREATED).json({
        message: 'Logueado con éxito como fundación',
        email,
        usuario:'fundacion',
        isLogued:true,
        id: fundacionLogin.id,
        nombre: fundacionLogin.nombre,
      });
    }
    

    return res.status(STATUS_ERROR).json({ message: 'Usuario no encontrado' });
  } catch (error) {
    return res.status(STATUS_ERROR).json({ message: 'Error al autenticar al usuario' });

  }
}


module.exports = {
  loginUsuarios,
};







