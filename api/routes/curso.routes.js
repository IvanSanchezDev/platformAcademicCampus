import { Router } from "express";
import { cursoController } from "../controllers/curso.controllers.js";
import { isAuthorized } from "../middlewares/auth.js";

export const router = Router();


router.get('/traerCursos', isAuthorized,cursoController.getCursos )
router.get('/traerCursoByName',isAuthorized, cursoController.getCursosByName )
router.post('/inscripcionCursos',isAuthorized,cursoController.inscripcionCursos )
router.post('/verificarInscripcion',isAuthorized,cursoController.verificarInscripcion )
router.post('/hacerComentario', isAuthorized, cursoController.hacerComentarios)
router.get('/traerCursosInscrito', cursoController.getCursosPropios)


