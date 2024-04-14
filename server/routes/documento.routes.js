import { Router } from "express";
import {
  createDocument,
  getSections,
} from "../controllers/documento.controllers.js";

const router = Router();

router.get("/documento", getSections);

router.post("/documento", createDocument);

export default router;
