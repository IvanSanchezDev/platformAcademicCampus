import { Router } from "express";
import { cursoController } from "../controllers/curso.controllers.js";
import { isAuthorized } from "../middlewares/auth.js";

export const router = Router();


router.get('/traerCursos', isAuthorized,cursoController.getCursos )