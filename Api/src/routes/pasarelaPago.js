const express = require("express");
const mercadoPagoRouter = express.Router();
const { postDonacion, getDonacion } = require("../Handlers/DonacionHandler");

mercadoPagoRouter.post("/donaciones", postDonacion);
mercadoPagoRouter.get("/feedback", getDonacion);

module.exports = mercadoPagoRouter;
