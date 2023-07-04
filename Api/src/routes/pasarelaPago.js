const express = require("express");
const mercadoPagoRouter = express.Router();
const {
  postDonacion,
  getDonacion,
} = require("../Handlers/mercadoPagoHandler")

mercadoPagoRouter.post("/", postDonacion);
mercadoPagoRouter.get("/", getDonacion);

module.exports = mercadoPagoRouter;