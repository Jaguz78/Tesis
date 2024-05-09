import jwt from "jsonwebtoken";

function verificarToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(403)
      .send({ auth: false, message: "Token no proporcionado." });
  }

  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      return res
        .status(500)
        .send({ auth: false, message: "Error al autenticar el token." });
    }

    // Si el token es válido, se decodifica y se adjunta a la solicitud para su uso posterior
    req.id_usuario = decoded.id_usuario;
    next();
  });
}

export default verificarToken;
