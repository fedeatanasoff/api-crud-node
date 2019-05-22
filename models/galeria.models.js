const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GaleriaSchema = Schema({
  imagen: String,
  titulo: String,
  descripcion: String
});

module.exports = mongoose.model("Galeria", GaleriaSchema);
