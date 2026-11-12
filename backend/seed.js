require("dotenv").config();
const mongoose = require("mongoose");
const Producto = require("./models/Producto.js");
const productos = require("./data.js");

async function sembrar() {
    try {
        console.log("🔌 Conectando a MongoDB...");
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("✅ Conectado");

        console.log("🔍 Validando los datos antes de borrar...");
        for (let i = 0; i < productos.length; i++) {
            const p = new Producto(productos[i]);
            await p.validate(); 
        }
        console.log("✅ Datos válidos");

        console.log("🗑️ Borrando productos anteriores...");
        await Producto.deleteMany({});

        console.log("📦 Insertando " + productos.length + " productos...");
        await Producto.insertMany(productos);
        console.log("✅ Productos insertados");

        await mongoose.disconnect();
        console.log("✅ Listo");
    } catch (error) {
        console.error("❌ Error:", error.message);
        console.error("No se borró nada de la base de datos.");
        await mongoose.disconnect();
    }
}

sembrar();