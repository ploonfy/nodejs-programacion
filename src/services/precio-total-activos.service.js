import productosData from "../data/productos.js";
import ActivosService from "./activos.service.js";

export default class PrecioTotalActivosService {
  #activosService;
  constructor(productos = productosData) {
    this.#activosService = new ActivosService(productos);
  }
  precioTotalActivos() {
    return this.#activosService
      .filtrarActivos()
      .reduce((acc, p) => acc + (p.precioUSD || 0), 0);
  }
}
