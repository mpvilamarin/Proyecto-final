const express = require("express");
const mercadoPagoRouter = express.Router();
const { postDonacion, getDonacion } = require("../Handlers/DonacionHandler");

mercadoPagoRouter.post("/create_preference", postDonacion);
mercadoPagoRouter.get("/feedback", getDonacion);

module.exports = mercadoPagoRouter;
