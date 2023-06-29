const express = require("express");
const AdopcionesRouter = express.Router();
const {
  postAdopciones,
  getAdopciones,
  getAdopcionById,
} = require("../Handlers/AdopcionHandler");

AdopcionesRouter.post("/", postAdopciones);
AdopcionesRouter.get("/", getAdopciones);
AdopcionesRouter.get("/:id", getAdopcionById);

module.exports = AdopcionesRouter;