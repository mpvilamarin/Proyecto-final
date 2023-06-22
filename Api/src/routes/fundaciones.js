const {Router} = require('express');
const fundacionRouter = Router()
const { postFundacion, updateFundacion, getFundacion} = require('../Handlers/FundacionHandler')

fundacionRouter.post("/", postFundacion);
fundacionRouter.get("/", getFundacion);
fundacionRouter.put('/:id', updateFundacion);

module.exports = fundacionRouter