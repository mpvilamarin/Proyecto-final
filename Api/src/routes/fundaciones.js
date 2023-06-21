const {Router} = require('express');
const fundacionRouter = Router()

fundacionRouter.get("/", (req, res) => {
    res.status(200).send("OK");
});

module.exports = fundacionRouter