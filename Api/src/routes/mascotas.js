const express = require('express');
const mascotaRouter = express.Router();
const {postMascota,getMascota, getByIdMascota, borradoMascota,updateMascota} = require('../Handlers/MascotaHandler');

mascotaRouter.post('/',postMascota);
mascotaRouter.get('/', getMascota);
mascotaRouter.get('/:id', getByIdMascota)
mascotaRouter.delete('/:id',borradoMascota);
mascotaRouter.put('/:id', updateMascota);



module.exports = mascotaRouter


