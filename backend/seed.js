require("dotenv").config();
const mongoose = require("mongoose");
const Producto = require("./models/Producto.js");
const productos = require("./data.js");

async function sembrar() {
    try {
        console.log("🔌 Conectando a MongoDB...");
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ Conectado");

         console.log("🗑️  Borrando productos anteriores (si hay)...");
        await Producto.deleteMany({});
           console.log("📦 Insertando " + productos.length + " productos...");
        await Producto.insertMany(productos);
        console.log("✅ Productos insertados");

        console.log("🔌 Cerrando conexión...");
        await mongoose.disconnect();
        console.log("✅ Listo");
    } catch (error) {
        console.log("❌ Error:", error.message);
        await mongoose.disconnect();
    }
}

sembrar();