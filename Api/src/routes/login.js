const express = require('express');
const loginRouter = express.Router();
const { postRegistroUsuario, getRegistroUsuario, updateUsuario, loginUsuario ,deleteUsuario, getIdUsuario } = require('../Handlers/UsuarioHandler');

loginRouter.post('/', postRegistroUsuario);
loginRouter.post('/login', loginUsuario);
loginRouter.get('/',getRegistroUsuario);
loginRouter.get('/:id', getIdUsuario);  
loginRouter.put('/:email',updateUsuario);
loginRouter.delete('/:email', deleteUsuario);


module.exports = loginRouter
