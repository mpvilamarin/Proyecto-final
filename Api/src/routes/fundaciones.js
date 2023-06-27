const {Router} = require('express');
const fundacionRouter = Router()
const { postFundacion } = require('../Handlers/FundacionHandler')

fundacionRouter.post("/", postFundacion);

module.exports = fundacionRouter