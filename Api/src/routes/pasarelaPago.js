const express = require("express");
const mercadoPagoRouter = express.Router();
const {
  postDonacion,
  getDonacion,
} = require("../Handlers/MercadoPagoHandler")

mercadoPagoRouter.post("/", postDonacion);
mercadoPagoRouter.get("/", getDonacion);

module.exports = mercadoPagoRouter;