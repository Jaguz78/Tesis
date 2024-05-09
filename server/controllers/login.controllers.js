import { pool } from "../db.js";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const { carne, contraseña } = req.body;

  // Extraer el usuario de la DB
  const [rows] = await pool.query(
    "SELECT * FROM usuario WHERE id_usuario=? AND contraseña=?",
    [carne, contraseña]
  );

  if (!rows[0]) {
    res.status(401).json({
      error: "Invalid user or password",
    });
  } else {
    let user = {
      id_usuario: rows[0].id,
      contraseña: rows[0].contraseña,
      rol: rows[0].rol,
    };

    // Generar token JWT
    const token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: 86400, // expira en 24 horas
    });
    res.status(200).send({ auth: true, token: token, rol: user.rol });
  }
};

const changePassword = (req, res) => {
  res.json({
    message: "dale",
  });
};

export { login, changePassword };
