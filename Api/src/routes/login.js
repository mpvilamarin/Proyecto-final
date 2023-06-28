const express = require('express');
const loginRouter = express.Router();
const { postRegistroUsuario, getRegistroUsuario, updateUsuario, deleteUsuario, getIdUsuario } = require('../Handlers/UsuarioHandler');
const {loginUsuarios} = require('../Handlers/LoginHandler')

loginRouter.post('/', postRegistroUsuario);
loginRouter.post('/login', loginUsuarios);
loginRouter.get('/',getRegistroUsuario);
loginRouter.get('/:id', getIdUsuario);  
loginRouter.put('/:email',updateUsuario);
loginRouter.delete('/:email', deleteUsuario);


module.exports = loginRouter
