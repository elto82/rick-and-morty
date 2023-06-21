const bodyParser = require("body-parser");
const express = require("express");

const cors = require("cors");
const routes = require("./routes/index.js");

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

app.use("/", routes);

module.exports = app;
