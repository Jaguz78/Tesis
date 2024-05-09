import { pool } from "../db.js";

const createStudent = async (req, res) => {
  const { carné, sede, nombre, carrera, contraseña } = req.body;
  console.log(req.rol);
  try {
    // Realizar la primera consulta para insertar el usuario
    const [result] = await pool.query(
      "INSERT INTO usuario (id_usuario, contraseña, rol) VALUES (?,?,?)",
      [carné, contraseña, "estudiante"]
    );

    // Verificar si la primera consulta fue exitosa antes de realizar la segunda consulta
    if (result.affectedRows === 1) {
      // Si la primera consulta fue exitosa, realizar la segunda consulta para insertar el estudiante
      const [result2] = await pool.query(
        "INSERT INTO estudiante (id_usuario, sede, nombre, carrera) VALUES (?,?,?,?)",
        [carné, sede, nombre, carrera]
      );

      // Verificar si la segunda consulta fue exitosa
      if (result2.affectedRows === 1) {
        // Ambas consultas se realizaron con éxito
        res.status(200).json({ message: "Estudiante creado correctamente" });
      } else {
        // La segunda consulta no fue exitosa
        res.status(500).json({ error: "Error al crear el estudiante" });
      }
    } else {
      // La primera consulta no fue exitosa
      res.status(500).json({ error: "Error al crear el usuario" });
    }
  } catch (error) {
    // Capturar y manejar cualquier error que ocurra durante la ejecución de las consultas
    console.error("Error al crear estudiante:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export { createStudent };
