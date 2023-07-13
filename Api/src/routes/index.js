
const { Router } = require("express");
const router = Router();
const AdminRouter = require("./Admin.js")
const loginRouter = require("./login.js");
const fundacionRouter = require("./fundaciones.js");
const mascotasRouter = require("./mascotas.js");
const adopcionesRouter = require("./adopciones.js");
const mercadoPagoRouter = require("./pasarelaPago.js");

router.use("/usuarios", loginRouter);
router.use("/fundaciones", fundacionRouter);
router.use("/mascotas", mascotasRouter);
router.use("/adopciones", adopcionesRouter);
router.use("/donaciones", mercadoPagoRouter);
router.use("/admin", AdminRouter);

module.exports = router;

