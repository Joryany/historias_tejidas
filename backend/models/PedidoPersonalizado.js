const mongoose = require("mongoose");

const esquemaPedidoPersonalizado = new mongoose.Schema({
    productoId: { type: String },
    nombre: { type: String, required: true },
    whatsapp: { type: String, required: true },
    fecha: { type: String, required: true },
    lugar: { type: String, required: true },
    descripcion: { type: String, required: true },
    queEs: { type: String },
    material: { type: String },
    tamano: { type: String },
    accesorios: { type: String },
    estado: { type: String, default: "pendiente" },
    fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model("PedidoPersonalizado", esquemaPedidoPersonalizado);