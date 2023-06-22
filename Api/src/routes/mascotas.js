const express = require('express');
const mascotaRouter = express.Router();
const {postMascota,getMascota,deleteMascota,updateMascota} = require('../Handlers/MascotaHandler');

mascotaRouter.post('/',postMascota);
mascotaRouter.get('/', getMascota);
mascotaRouter.delete('/',deleteMascota);
mascotaRouter.put('/nombre', updateMascota);

module.exports = mascotaRouter

//  {
//      "nombre":"Rufo",
//      "especie":"canino",
//      "edad":3,
//      "genero": "Macho",
//      "temperamento": "dosil",
//      "descripcion": "sano"
//    }