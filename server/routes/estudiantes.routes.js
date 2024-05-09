import { Router } from "express";
import { createStudent } from "../controllers/estudiantes.controllers.js";
import verificarToken from "../middlewares/verifyToken.js";

const router = Router();

router.post("/usuarios/create", verificarToken, createStudent);

export default router;
