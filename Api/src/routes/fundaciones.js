const {Router} = require('express');
const fundacionRouter = Router()
const { postFundacion, getAllFundaciones , updateFundacion, getFundacionById} = require('../Handlers/FundacionHandler')

fundacionRouter.post("/", postFundacion);
fundacionRouter.get("/", getAllFundaciones);
fundacionRouter.put("/:id", updateFundacion);
fundacionRouter.get("/:id", getFundacionById);

module.exports = fundacionRouter