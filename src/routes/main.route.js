import express from 'express';
import { consulta } from '../controllers/main.controller.js';
import { consultarAutos, consultarBiblioteca } from '../controllers/autos.controller.js';
 
const router = express.Router();

/* ESTE ARCHIVO RESUELVE LAS RUTAS DESDE LAS PETICIONES 
QUE VIENEN DESDE EL NAVEGADOR O FRONTEND */
/* Aquí defino a qué función del controlador envío cada petición */
router.get("/consulta", consulta);
router.get("/consultarAutos", consultarAutos);
router.get("/consultarBiblioteca", consultarBiblioteca);

export default router;