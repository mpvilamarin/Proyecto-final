const express = require("express");
const mercadoPagoRouter = express.Router();
const { postDonacion } = require("../Handlers/DonacionHandler");

mercadoPagoRouter.post("/donaciones", postDonacion);

module.exports = mercadoPagoRouter;
