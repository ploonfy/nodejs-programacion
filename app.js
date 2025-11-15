import express from "express";
import cors from "cors";

const PORT = 9876;

import consultaRoutes from "./src/routes/main.route.js";
import autosRoutes from "./src/routes/autos.route.js";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json())
/* En este archivo además, se importan las rutas creadas en el router
y se les da uso:  */
app.use("/api", consultaRoutes);
app.use("/api", autosRoutes);


/* MIDDLEWARE PARA MANEJO DE ERRORES DE PETICIONES A RUTAS NO ENCONTRADAS */
app.use((req, res, next) => {
  console.log("Petición a ruta no encontrada");
  res.status(404).json({ message: "Not Found" });
});

app.listen(PORT, ()=>{
    console.log(`Servidor en el puerto ${PORT}`)
});