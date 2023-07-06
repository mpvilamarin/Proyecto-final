const { Usuarios, Fundaciones } = require('../db');
const jwt = require('jsonwebtoken');
const STATUS_OK =200;
const STATUS_CREATED = 201;
const STATUS_ERROR=404;

async function loginUsuarios(req, res) {
  const { email, contraseña } = req.body;


  // const usuarioLogin = await Usuarios.findOne({ where: { email, contraseña } });
  // if (usuarioLogin) {
  //   const tipoUsuario = 'usuario';
  //   const jwtToken = jwt.sign(usuarioLogin.dataValues, 'secret');
  //   return res.status(STATUS_CREATED).json({
  //     message: 'Logueado con éxito como usuario',
  //     token: jwtToken,
  //     email, 
  //     tipo: tipoUsuario
  //   });
  // }


  const fundacionLogin = await Fundaciones.findOne({ where: { email, contraseña } });
  if (fundacionLogin) {
    const tipoUsuario = 'fundacion';
    const jwtToken = jwt.sign(fundacionLogin.dataValues, 'secret');
    return res.status(STATUS_CREATED).json({
      message: 'Logueado con éxito como fundación',
      token: jwtToken,
      email,
      tipo: tipoUsuario
    });
  }


  return res.status(STATUS_ERROR).json({ message: 'Usuario no encontrados' });
}

module.exports = {
  loginUsuarios
};
