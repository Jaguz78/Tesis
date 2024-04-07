import  {Router} from 'express';
import {createSection} from "../controllers/section.controllers.js";

const router = Router();

router.post('/seccion', createSection);

export default router;