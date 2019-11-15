const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(require("./routes/route.js"));

app.listen(4001, () => console.log("listening on port 4001"));
