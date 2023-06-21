const {Router} = require('express')

const loginRouter = Router();

loginRouter.get("/", (req, res) => {
    res.status(200).send("OK");
});

module.exports = loginRouter;