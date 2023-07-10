
const { Admin, Fundaciones } = require('../db');
const STATUS_OK = 200;
const STATUS_CREATED = 201;
const STATUS_ERROR = 404;

async function loginUsuarios(req, res) {
  const { email, contraseña } = req.body;


  try {
    const adminLogin = await Admin.findOne({ where: { email, contraseña } });
    if (adminLogin) {
      return res.status(STATUS_CREATED).json({
        message: 'Logueado con éxito como admin',
        email,
        usuario:'admin',
        isLogued:true,
      });
    }

    const fundacionLogin = await Fundaciones.findOne({ where: { email, contraseña } });
    if (fundacionLogin) {
      return res.status(STATUS_CREATED).json({
        message: 'Logueado con éxito como fundación',
        email,
        usuario:'fundacion',
        isLogued:true,
        id: fundacionLogin.id,
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







