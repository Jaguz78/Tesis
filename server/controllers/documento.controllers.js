import { pool } from "../db.js";

const getSections = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM seccion");
  res.json(rows);
};

const createDocument = async (req, res) => {
  const { valor, posicion, id_formato } = req.body;
  const [result] = await pool.query(
    "INSERT INTO seccion (valor, posicion, id_formato) VALUES (?,?,?)",
    [valor, posicion, id_formato]
  );
  res.json({
    id: result.insertId,
    valor,
    posicion,
    id_formato,
  });
};

export { getSections, createDocument };
