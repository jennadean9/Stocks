const express = require("express");
const expRouter = express.Router();

expRouter.use(require("./router.js"));

module.exports = expRouter;
