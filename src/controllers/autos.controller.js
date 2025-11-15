import Biblioteca from "../services/main.service.js";
import Autos from "../services/autos.service.js";

export const consultarBiblioteca = (req, res, next) => {
  //console.log("..revise la terminal---");

  const librosDigitales = new Biblioteca("1984", "George Orwell", 1949);
  const rtaDescripcion = librosDigitales.obtenerDescripcion();
  console.log("🚀 ~ consultarAutos ~ rtaDescripcion:", rtaDescripcion);

  const nuevoTitulo = librosDigitales.actualizarTitulo("Rebelión en la granja");
  console.log(
    "🚀 ~ consultarAutos ~ nuevoTitulo:",
    librosDigitales.obtenerDescripcion()
  );
  res.status(201).json({
    mssge: librosDigitales.obtenerDescripcion(),
  });
};

/* ESTE ES EL CONTROLLER DE AUTOS - INVOCA AL SERVICE Y
DEVUELVE UN ESTADO HTTP DE RESPUESTA */
export const consultarAutos = (req, res, next) => {
  //Aquí valido que el controlador esté funcionando
  //console.log("Ingresé al controller de Autos");
  const objAutos = new Autos();
  const automoviles = [
    { marca: "Ford", modelo: "Fiesta", precio: 13000 },
    { marca: "Toyota", modelo: "Corolla", precio: 18000 },
    { marca: "Honda", modelo: "Civic", precio: 22000 },
    { marca: "Chevrolet", modelo: "Spark", precio: 9000 },
  ];

  const rtaMarca = objAutos.obtenerMarca(automoviles)
  const rtaMayoresPrecios = objAutos.mayoresPrecios(automoviles);
  console.log("🚀 ~ consultarAutos ~ rtaMarca:", rtaMarca);
  console.log("🚀 ~ consultarAutos ~ rtaMayoresPrecios:", rtaMayoresPrecios);
  res.status(201).json({ mssge: rtaMayoresPrecios });
};
