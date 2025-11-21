import productosData from "../data/productos.js";

export default class ActivosService {
  #productos;
  constructor(productos = productosData) {
    this.#productos = Array.isArray(productos) ? productos : [];
  }
  filtrarActivos() {
    return this.#productos.filter((p) => p.activo === true);
  }
}
