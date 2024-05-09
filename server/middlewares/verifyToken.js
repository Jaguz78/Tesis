import jwt from "jsonwebtoken";

function verificarToken(req, res, next) {
  const token = req.headers["authorization"];
  console.log(token);
  let tokenSinBearer;
  if (token) {
    tokenSinBearer = token.split(" ")[1];
    console.log(tokenSinBearer);
  }

  if (!tokenSinBearer) {
    return res
      .status(403)
      .send({ auth: false, message: "Token no proporcionado." });
  }

  jwt.verify(tokenSinBearer, process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      return res
        .status(500)
        .send({ auth: false, message: "Error al autenticar el token." });
    }

    // Si el token es válido, se decodifica y se adjunta a la solicitud para su uso posterior
    req.rol = decoded.rol;
    next();
  });
}

export default verificarToken;
