const express = require("express");
const mercadoPagoRouter = express.Router();
const {
  postDonacion,
  getDonacion,
} = require("../Handlers/MercadoPagoHandler.js");

mercadoPagoRouter.post("/", postDonacion);
mercadoPagoRouter.get("/feedback", getDonacion);

module.exports = mercadoPagoRouter;
