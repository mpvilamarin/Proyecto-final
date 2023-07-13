const express = require('express');
const mascotaRouter = express.Router();
const {postMascota,getMascota, getByIdMascota, borradoMascota,updateMascota, addFav, removeFav} = require('../Handlers/MascotaHandler');

mascotaRouter.post('/',postMascota);
mascotaRouter.post('/fav', addFav);
mascotaRouter.get('/', getMascota);
mascotaRouter.get('/:id', getByIdMascota)
mascotaRouter.delete('/:id',borradoMascota);
mascotaRouter.delete('/removeFav/:id/:email', removeFav);
mascotaRouter.put('/:id', updateMascota);




module.exports = mascotaRouter


