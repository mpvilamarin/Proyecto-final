const express = require("express");
const AdopcionesRouter = express.Router();
const {
  postAdopciones,
  getAdopciones,
  getAdopcionById,
  getAdopcionesByEmail
} = require("../Handlers/AdopcionHandler");

AdopcionesRouter.post("/", postAdopciones);
AdopcionesRouter.get("/", getAdopciones);
AdopcionesRouter.get("/:email", getAdopcionesByEmail);
AdopcionesRouter.get("/:id", getAdopcionById);

module.exports = AdopcionesRouter;