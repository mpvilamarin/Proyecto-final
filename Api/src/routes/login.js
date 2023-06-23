const express = require('express');
const loginRouter = express.Router();
const { postRegistroUsuario, getRegistroUsuario, updateUsuario, deleteUsuario } = require('../Handlers/UsuarioHandler');

loginRouter.post('/',postRegistroUsuario);
loginRouter.get('/',getRegistroUsuario);
loginRouter.put('/',updateUsuario);
loginRouter.delete('/:email', deleteUsuario);


module.exports = loginRouter
