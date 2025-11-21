import productosData from "../data/productos.js";

export default class InventarioTotalService {
  #productos;
  constructor(productos = productosData) {
    this.#productos = Array.isArray(productos) ? productos : [];
  }
  inventarioTotal() {
    return this.#productos.reduce((acc, p) => acc + (p.stock || 0), 0);
  }
}
