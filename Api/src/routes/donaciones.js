const express = require("express");
const donacionesRouter = express.Router();
const {
  postDonaciones,
  getDonaciones,
  getDonacionesByUserId,
  getDonacionById
} = require("../Handlers/DonacionHandler");

donacionesRouter.post("/", postDonaciones);
donacionesRouter.get("/", getDonaciones);
donacionesRouter.get("/:id", getDonacionById);
donacionesRouter.get("/:userId", getDonacionesByUserId);


module.exports = donacionesRouter;
