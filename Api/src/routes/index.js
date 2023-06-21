const {Router} = require('express');
const router = Router();
const loginRouter = require('./login.js');
const fundacionRouter = require('./fundaciones.js');
const mascotasRouter = require('./mascotas.js');

router.use('/login', loginRouter);
router.use('/fundaciones', fundacionRouter);
router.use('/mascotas', mascotasRouter);

module.exports = router; 