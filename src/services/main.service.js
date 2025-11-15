export default class Biblioteca {
  #titulo;
  #autor;
  #year;
  constructor(t, a, y) {
    this.#titulo = t;
    this.#autor = a;
    this.#year = y;
  }
  //descripción del libro
  obtenerDescripcion() {
    return `Libro: ${this.#titulo} de ${this.#autor} (${this.#year})`;
  }
  actualizarTitulo(nuevoTitulo) {
    return nuevoTitulo ? (this.#titulo = nuevoTitulo) : this.#titulo;
  }
}
