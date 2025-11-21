# nodejs-programacion

Backend en Node.js + Express - Taller 30% Segundo Corte

Proyecto que implementa Programación Orientada a Objetos (POO) y métodos de manejo de arrays (`filter`, `map`, `reduce`) en un API REST.

## 📋 Descripción del Taller

Implementación de 5 ejercicios sobre un dataset de productos:
1. Filtrar productos activos
2. Calcular precio total de productos activos
3. Listar entregas desde un año específico
4. Convertir precios USD a pesos colombianos
5. Calcular inventario total

**Enfoque:** Cada ejercicio implementado como una clase independiente con métodos que usan manejo de arrays.

## 🚀 Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Desarrollo (con nodemon)
npm run dev

# Producción
npm start
```

El servidor inicia en `http://localhost:9876` (configurable con variable `PORT`).

## 📡 Endpoints API

Todos los endpoints son **GET** y están disponibles bajo el prefijo `/api/productos/`:

| Endpoint | Método | Descripción | Query Params |
|----------|--------|-------------|--------------|
| `/api/productos/activos` | GET | Lista productos activos | - |
| `/api/productos/precio-total-activos` | GET | Suma total en USD de activos | - |
| `/api/productos/entregas` | GET | Productos con entrega desde año | `anio` (default: 2020) |
| `/api/productos/convertir-precios` | GET | Precios convertidos a COP | `tasa` (default: 4250) |
| `/api/productos/inventario-total` | GET | Stock total de todos los productos | - |

---

### 📌 Ejemplos de Respuestas

#### 1. GET `/api/productos/activos`
Retorna array con productos donde `activo === true`.

```javascript
{
  "message": "Productos activos",
  "data": [
    {
      "id": "PD001",
      "nombre": "Laptop Gamer Pro",
      "precioUSD": 1250,
      "activo": true,
      "stock": 15,
      "fechaEntrega": "2023-05-20"
    },
    // ... más productos activos
  ]
}
```

#### 2. GET `/api/productos/precio-total-activos`
Retorna suma de precios USD de productos activos.

```javascript
{
  "message": "Precio total de activos",
  "totalUSD": 2235.49
}
```

#### 3. GET `/api/productos/entregas?anio=2022`
Retorna productos con `fechaEntrega >= anio`.

```javascript
{
  "message": "Entregas desde 2022",
  "data": [
    {
      "id": "PD001",
      "nombre": "Laptop Gamer Pro",
      "fechaEntrega": "2023-05-20",
      // ... resto de propiedades
    }
  ]
}
```

#### 4. GET `/api/productos/convertir-precios?tasa=4300`
Retorna productos con campo adicional `precioCOP` calculado.

```javascript
{
  "message": "Precios convertidos a COP (tasa=4300)",
  "data": [
    {
      "id": "PD001",
      "nombre": "Laptop Gamer Pro",
      "precioUSD": 1250,
      "precioCOP": 5375000,  // <- Campo agregado
      // ... resto de propiedades
    }
  ]
}
```

#### 5. GET `/api/productos/inventario-total`
Retorna suma de `stock` de todos los productos.

```javascript
{
  "message": "Inventario total",
  "totalStock": 555
}
```

## 🏗️ Estructura del Proyecto

```
nodejs-programacion/
├── app.js                          # Servidor Express principal
├── package.json
├── .env.example                    # Variables de entorno
├── src/
│   ├── data/
│   │   └── productos.js            # Dataset (10 productos)
│   ├── services/                   # Clases con lógica de negocio
│   │   ├── activos.service.js
│   │   ├── precio-total-activos.service.js
│   │   ├── entregas.service.js
│   │   ├── convertir-precios.service.js
│   │   └── inventario-total.service.js
│   ├── controllers/
│   │   └── taller.controller.js    # Controlador que instancia servicios
│   └── routes/
│       └── productos.route.js      # Definición de rutas
```

## 🎯 Arquitectura y Conceptos POO

### Dos tipos de métodos implementados:

1. **Métodos definidos de clase** (pertenecen a las clases):
   - `filtrarActivos()`
   - `precioTotalActivos()`
   - `entregasDesdeAnio(anio)`
   - `convertirPreciosACOP(tasa)`
   - `inventarioTotal()`

2. **Métodos de manejo de arrays** (usados dentro de los métodos de clase):
   - `.filter()` → filtra productos por condición
   - `.map()` → transforma elementos
   - `.reduce()` → reduce a un solo valor

### Objetos:
- **Objeto instanciado:** `new ActivosService()` (instancia de clase)
- **Objeto de datos:** `{ id: "PD001", nombre: "...", precio: 100 }` (literal)

## 🧪 Probar con cURL

```bash
# 1. Activos
curl http://localhost:9876/api/productos/activos

# 2. Precio total
curl http://localhost:9876/api/productos/precio-total-activos

# 3. Entregas desde 2022
curl "http://localhost:9876/api/productos/entregas?anio=2022"

# 4. Convertir a COP
curl "http://localhost:9876/api/productos/convertir-precios?tasa=4300"

# 5. Inventario total
curl http://localhost:9876/api/productos/inventario-total
```

## ⚙️ Variables de Entorno

Crea un archivo `.env` (usa `.env.example` como referencia):

```env
PORT=9876
NODE_ENV=development
```

## 🛠️ Tecnologías

- **Node.js** con ES Modules (`type: module`)
- **Express** 5.1.0
- **CORS** habilitado
- **dotenv** para configuración
- **Nodemon** para desarrollo

## 📝 Notas

- Respuestas REST con status `200` para operaciones GET exitosas
- Manejo de errores con `try/catch` y middleware `next(err)`
- Campos privados en clases con `#productos`
- Validaciones de tipos y valores por defecto en parámetros

---

**Autor:** ploonfy  
**Repositorio:** [nodejs-programacion](https://github.com/ploonfy/nodejs-programacion)
