import productosData from "../data/productos.js";

export default class ConvertirPreciosService {
  #productos;
  constructor(productos = productosData) {
    this.#productos = Array.isArray(productos) ? productos : [];
  }
  convertirPreciosACOP(tasa = 4250) {
    const t = Number(tasa) || 4250;
    return this.#productos.map((p) => ({
      ...p,
      precioCOP: Math.round((p.precioUSD || 0) * t),
    }));
  }
}
