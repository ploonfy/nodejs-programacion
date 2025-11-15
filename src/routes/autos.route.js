import express from 'express';

import { consultarAutos } from '../controllers/autos.controller.js'

const router = express.Router();

router.get("/consultarAutos", consultarAutos);

export default router;