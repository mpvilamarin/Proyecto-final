const express = require('express');
const loginRouter = express.Router();
const { postRegistroUsuario, getRegistroUsuario, updateUsuario, deleteUsuario, getIdUsuario, getUsuarioEmail } = require('../Handlers/UsuarioHandler');
const {loginUsuarios} = require('../Handlers/LoginHandler')
const {CalificarFundacines, getReviews} = require('../Handlers/ReviewsHandler')

loginRouter.post('/', postRegistroUsuario);
loginRouter.post('/reviews', CalificarFundacines)
loginRouter.post('/login', loginUsuarios);
loginRouter.get('/reviews', getReviews);
loginRouter.get('/', getRegistroUsuario);
loginRouter.get('/:id', getIdUsuario);
loginRouter.get('/getBy/:email', getUsuarioEmail)
loginRouter.put('/:email', updateUsuario);
loginRouter.delete('/:email', deleteUsuario);


module.exports = loginRouter

