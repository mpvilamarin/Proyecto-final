const express = require('express');
const mascotaRouter = express.Router();
const {postMascota,getMascota, getByIdMascota, deleteMascota,updateMascota} = require('../Handlers/MascotaHandler');

mascotaRouter.post('/',postMascota);
mascotaRouter.get('/', getMascota);
mascotaRouter.get('/:id', getByIdMascota)
mascotaRouter.delete('/:nombre',deleteMascota);
mascotaRouter.put('/:nombre', updateMascota);



module.exports = mascotaRouter


