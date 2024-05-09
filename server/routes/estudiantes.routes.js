import { Router } from "express";
import { createStudent } from "../controllers/estudiantes.controllers.js";

const router = Router();

router.post("/estudiantes/create", createStudent);

export default router;
