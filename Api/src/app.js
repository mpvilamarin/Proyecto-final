const express = require("express")
const morgan = require("morgan")
const routes = require('./routes/index.js')

const app = express();

app.use(morgan ("dev"));
app.use((req, res, next) => {
    console.log("Acá está el middleware");
    next();
});
app.use("/", routes)


module.exports = app;