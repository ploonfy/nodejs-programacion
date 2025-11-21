import express from "express";
import {
  obtenerActivos,
  precioTotalActivos,
  entregasDesdeAnio,
  convertirPrecios,
  inventarioTotal,
} from "../controllers/taller.controller.js";

const router = express.Router();

// Prefijo esperado en app.js: app.use("/api", productosRoutes)
router.get("/productos/activos", obtenerActivos);
router.get("/productos/precio-total-activos", precioTotalActivos);
router.get("/productos/entregas", entregasDesdeAnio); // ?anio=2020
router.get("/productos/convertir-precios", convertirPrecios); // ?tasa=4250
router.get("/productos/inventario-total", inventarioTotal);

export default router;
