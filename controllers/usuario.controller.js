function testUsuarios(req, res) {
  res.status(200).send({
    ok: true,
    mensaje: "controlador de usuarios"
  });
}

module.exports = {
  testUsuarios
};
