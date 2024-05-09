import { Router } from "express";
import { login, changePassword } from "../controllers/login.controllers.js";
import verificarToken from "../middlewares/verifyToken.js";

const router = Router();

router.get("/cambiarContraseña", changePassword);

router.post("/login", login);

export default router;
