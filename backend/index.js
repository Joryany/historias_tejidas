require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const rutasProductos = require("./routes/productos.js");
const rutasPedidos = require("./routes/pedidos.js");
const rutasPersonalizados = require("./routes/personalizados.js");
const rutasAdmin = require("./routes/admin.js"); 

const app = express();
app.use(cors());
app.use(express.json()); 

const PUERTO = 3000;

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(function() {
        console.log("Conectado a MongoDB");
    })
    .catch(function(error) {
        console.log("Error conectando a MongoDB:", error.message);
    });

// Ruta de prueba
app.get("/", function(req, res) {
    res.send("¡Hola desde el servidor de Historias Tejidas!");
});

// Rutas de la API
app.use("/api/productos", rutasProductos);
app.use("/api/pedidos", rutasPedidos);
app.use("/api/personalizados", rutasPersonalizados);
app.use("/api/admin", rutasAdmin); // <-- 3. FALTA ESTA LÍNEA

app.listen(PUERTO, function() {
    console.log("Servidor corriendo en http://localhost:" + PUERTO);
});