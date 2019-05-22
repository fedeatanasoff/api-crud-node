const express = require("express");
const ControllerUser = require("../controllers/usuario.controller");

const app = express.Router();

app.get("/", ControllerUser.testUsuarios);

module.exports = app;
