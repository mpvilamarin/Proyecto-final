const express = require('express');
const mascotaRouter = express.Router();
const {postMascota,getMascota} = require('../Handlers/MascotaHandler');

mascotaRouter.post('/',postMascota);
mascotaRouter.get('/', getMascota)


module.exports = mascotaRouter

