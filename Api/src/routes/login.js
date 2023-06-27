const express = require('express');
const loginRouter = express.Router();
const { postRegistroUsuario, getRegistroUsuario } = require('../Handlers/RegistroUsuarioHandler');

loginRouter.post('/',postRegistroUsuario);
loginRouter.get('/',getRegistroUsuario);
loginRouter.get('/:id', getIdUsuario);  
loginRouter.put('/:email',updateUsuario);
loginRouter.delete('/:email', deleteUsuario);


module.exports = loginRouter
