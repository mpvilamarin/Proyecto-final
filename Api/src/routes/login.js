const express = require('express');
const loginRouter = express.Router();
const { postRegistroUsuario, getRegistroUsuario, updateUsuario, deleteUsuario, getIdUsuario } = require('../Handlers/UsuarioHandler');

loginRouter.post('/',postRegistroUsuario);
loginRouter.get('/',getRegistroUsuario);
loginRouter.get('/:id', getIdUsuario);  
loginRouter.put('/',updateUsuario);
loginRouter.delete('/:email', deleteUsuario);


module.exports = loginRouter
