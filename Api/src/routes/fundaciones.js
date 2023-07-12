
const express = require('express');
const fundacionRouter = express.Router()
const { postFundacion, getAllFundaciones , updateFundacion, getFundacionById, postAutenticarFundacion, borradoFundacion} = require('../Handlers/FundacionHandler')
const enviarCorreoBienvenida = require('../Handlers/CorreosHandler')
fundacionRouter.post("/", postFundacion, async (req, res) =>{
    const { email, nombre } = req.body;
    try {
      await enviarCorreoBienvenida(email, nombre);
      res.status(200).json({ message: "Correo de bienvenida enviado" });
    } catch (error) {
      res.status(500).json({ error: "Error al enviar el correo de bienvenida" });
    }
});

fundacionRouter.post("/login", postAutenticarFundacion)



fundacionRouter.get("/", getAllFundaciones);
fundacionRouter.get("/nombre", getAllFundaciones);
fundacionRouter.put("/:id", updateFundacion);
fundacionRouter.get("/:id", getFundacionById);
fundacionRouter.delete("/:id", borradoFundacion);


module.exports = fundacionRouter;
