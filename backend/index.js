require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const rutasProductos = require("./routes/productos.js");
const rutasPedidos = require("./routes/pedidos.js");
const rutasPersonalizados = require("./routes/personalizados.js");
const rutasAdmin = require("./routes/admin.js"); 

const verificarToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (token === process.env.ADMIN_TOKEN) {
        next(); 
    } else {
        res.status(401).json({ error: "No autorizado. Token inválido o ausente." });
    }
};

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
app.post("/api/productos", verificarToken); 
app.use("/api/pedidos", rutasPedidos);
app.use("/api/personalizados", rutasPersonalizados);
app.use("/api/admin", rutasAdmin); 

app.listen(PUERTO, function() {
    console.log("Servidor corriendo en http://localhost:" + PUERTO);
});





