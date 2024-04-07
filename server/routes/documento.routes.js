import  {Router} from 'express';
import {createDocument} from "../controllers/documento.controllers.js";

const router = Router();

router.post('/documento', createDocument);

export default router;