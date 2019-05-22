const express = require("express");
const app = express();
const rutaUsuario = require("./routes/usuarios.route.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/");

// app.get("/api", (req, res) => {
//   res.status(200).send("welcome !!");
// });

app.use("/api", rutaUsuario);

module.exports = app;
