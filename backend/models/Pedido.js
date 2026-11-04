const mongoose = require("mongoose");

const esquemaPedido = new mongoose.Schema({
    nombre: { type: String, required: true },
    whatsapp: { type: String, required: true },
    fecha: { type: String, required: true },
    lugar: { type: String, required: true },
    productos: { type: Array, required: true },
    total: { type: Number, required: true },
    estado: { type: String, default: "pendiente" },
    fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Pedido", esquemaPedido);