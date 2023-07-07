const express = require('express');
const {postMascota,getMascota, getByIdMascota, deleteMascota,updateMascota} = require('../Handlers/MascotaHandler');
const mascotaRouter = express.Router();

mascotaRouter.post('/',postMascota);
mascotaRouter.get('/', getMascota);
mascotaRouter.get('/:id', getByIdMascota)
mascotaRouter.delete('/:nombre',deleteMascota);
mascotaRouter.put('/:nombre', updateMascota);



module.exports = mascotaRouter

