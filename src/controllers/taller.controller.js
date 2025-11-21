import ActivosService from "../services/activos.service.js";
import PrecioTotalActivosService from "../services/precio-total-activos.service.js";
import EntregasService from "../services/entregas.service.js";
import ConvertirPreciosService from "../services/convertir-precios.service.js";
import InventarioTotalService from "../services/inventario-total.service.js";

export const obtenerActivos = (req, res, next) => {
  try {
    const svc = new ActivosService();
    return res.status(200).json({ message: "Productos activos", data: svc.filtrarActivos() });
  } catch (e) { next(e); }
};

export const precioTotalActivos = (req, res, next) => {
  try {
    const svc = new PrecioTotalActivosService();
    return res.status(200).json({ message: "Precio total de activos", totalUSD: svc.precioTotalActivos() });
  } catch (e) { next(e); }
};

export const entregasDesdeAnio = (req, res, next) => {
  try {
    const { anio } = req.query;
    const svc = new EntregasService();
    return res.status(200).json({ message: `Entregas desde ${anio || 2020}`, data: svc.entregasDesdeAnio(anio) });
  } catch (e) { next(e); }
};

export const convertirPrecios = (req, res, next) => {
  try {
    const { tasa } = req.query;
    const svc = new ConvertirPreciosService();
    return res.status(200).json({ message: `Precios convertidos a COP (tasa=${tasa || 4250})`, data: svc.convertirPreciosACOP(tasa) });
  } catch (e) { next(e); }
};

export const inventarioTotal = (req, res, next) => {
  try {
    const svc = new InventarioTotalService();
    return res.status(200).json({ message: "Inventario total", totalStock: svc.inventarioTotal() });
  } catch (e) { next(e); }
};
