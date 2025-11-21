import productosData from "../data/productos.js";

export default class EntregasService {
  #productos;
  constructor(productos = productosData) {
    this.#productos = Array.isArray(productos) ? productos : [];
  }
  entregasDesdeAnio(anio = 2020) {
    const limite = Number(anio) || 2020;
    return this.#productos.filter((p) => {
      const y = new Date(p.fechaEntrega).getFullYear();
      return Number.isFinite(y) && y >= limite;
    });
  }
}
