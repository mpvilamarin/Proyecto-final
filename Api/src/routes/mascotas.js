const {Router} = require('express')
const mascotaRouter = Router()

mascotaRouter.get("/", (req, res) => {
    res.status(200).send("OK");
});

module.exports = mascotaRouter

