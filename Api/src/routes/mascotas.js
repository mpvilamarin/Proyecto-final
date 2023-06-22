const express = require('express');
const mascotaRouter = express.Router();
const {postMascota,getMascota, getByIdMascota} = require('../Handlers/MascotaHandler');

mascotaRouter.post('/',postMascota);
mascotaRouter.get('/', getMascota);
mascotaRouter.get('/:id', getByIdMascota)



module.exports = mascotaRouter

