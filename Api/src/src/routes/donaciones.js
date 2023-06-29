const express = require("express");
const donacionesRouter = express.Router();
const {
  postDonaciones,
  getDonaciones,
  getDonacionById,
} = require("../Handlers/DonacionHandler");

donacionesRouter.post("/", postDonaciones);
donacionesRouter.get("/", getDonaciones);
donacionesRouter.get("/:id", getDonacionById);

module.exports = donacionesRouter;
