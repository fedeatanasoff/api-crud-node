const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3000;

mongoose.connect(
  "mongodb://localhost:27017/mongodb",
  { useNewUrlParser: true },
  (error, res) => {
    if (error) {
      throw error;
    } else {
      console.log("Conexion a la BD establecida");

      app.listen(port, () =>
        console.log(`Servidor corriendo en el Puerto: ${port}`)
      );
    }
  }
);
