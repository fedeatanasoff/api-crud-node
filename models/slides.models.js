const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SlidesSchema = Schema({
  imagen: String,
  titulo: String,
  descripcion: String
});

module.exports = mongoose.model("Slides", SlidesSchema);
