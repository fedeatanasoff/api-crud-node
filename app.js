const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).send("welcome !!");
});

module.exports = app;
