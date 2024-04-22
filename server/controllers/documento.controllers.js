import { pool } from "../db.js";

const getSections = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM seccion ORDER BY posicion");
  res.json(rows);
};

const createDocument = async (req, res) => {
  const { valor, posicion, id_formato } = req.body;
  const [result] = await pool.query(
    "INSERT INTO seccion (valor, posicion, id_formato) VALUES (?,?,?)",
    [valor, posicion, id_formato]
  );
  res.json({
    id_seccion: result.insertId,
    valor,
    posicion,
    id_formato,
  });
};

const deleteSection = async (req, res) => {
  const [result] = await pool.query("DELETE FROM seccion WHERE id_seccion=?", [
    req.params.id,
  ]);
  res.json(result);
};

const moveUp = async ({ body }, res) => {
  await pool.query("UPDATE seccion SET posicion=? WHERE id_seccion=?", [
    body[0].posicion,
    body[0].id_seccion,
  ]);
  await pool.query("UPDATE seccion SET posicion=? WHERE id_seccion=?", [
    body[1].posicion,
    body[1].id_seccion,
  ]);
  res.json(body);
};

const moveDown = async ({ body }, res) => {
  await pool.query("UPDATE seccion SET posicion=? WHERE id_seccion=?", [
    body[0].posicion,
    body[0].id_seccion,
  ]);
  await pool.query("UPDATE seccion SET posicion=? WHERE id_seccion=?", [
    body[1].posicion,
    body[1].id_seccion,
  ]);
  res.json(body);
};

export { getSections, createDocument, deleteSection, moveUp, moveDown };
