const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = Schema({
  usuario: String,
  password: String
});

module.exports = mongoose.model("Usuarios", UsuariosSchema);
