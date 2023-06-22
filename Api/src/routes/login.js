const express = require('express');
const loginRouter = express.Router();
const { postRegistroUsuario, getRegistroUsuario } = require('../Handlers/UsuarioHandler.js');

loginRouter.post('/',postRegistroUsuario);
loginRouter.get('/',getRegistroUsuario)



module.exports = loginRouter
