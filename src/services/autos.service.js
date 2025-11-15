export default class Autos { 
    constructor(){
        return this.mssge = "Ingresé al constructor de Autos";
    }

    // Métodos de la clase Autos podrían ir aquí
    obtenerMarca(a){
        return a.map((item) => item.marca);
    }
    mayoresPrecios(b){
        return b.filter((item) => item.precio > 15000);
    }
}