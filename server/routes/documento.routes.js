import { Router } from "express";
import {
  moveUp,
  moveDown,
  createDocument,
  getSections,
  deleteSection,
} from "../controllers/documento.controllers.js";

const router = Router();

router.get("/documento", getSections);

router.post("/documento", createDocument);

router.delete("/documento/:id", deleteSection);

router.put("/documento/up", moveUp);

router.put("/documento/down", moveDown);

export default router;
