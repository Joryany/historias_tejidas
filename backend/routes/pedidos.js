const express = require("express");
const router = express.Router();
const Pedido = require("../models/Pedido.js");
const mongoose = require("mongoose");

const verificarToken = (req, res, next) => {
    if (req.headers.authorization === process.env.ADMIN_TOKEN) next();
    else res.status(401).json({ error: "No autorizado" });
};

// POST: Crear pedido
router.post("/", async function(req, res) {
    try {
        const { nombre, whatsapp, fecha, lugar, productos, total } = req.body;
        
        // Validar datos básicos (Error 400)
        if (!nombre || !whatsapp || !total || !productos || !fecha || !lugar) {
            return res.status(400).json({ error: "Faltan datos obligatorios o formato inválido." });
        }

        const nuevoPedido = new Pedido({ 
            nombre, whatsapp, fecha, lugar, productos, total, estado: "pendiente" 
        });
        
        await nuevoPedido.save();
        res.status(201).json({ mensaje: "Pedido guardado con éxito" });
    } catch (error) {
        // Si Mongoose rechaza los datos, es un error del cliente (400)
        res.status(400).json({ error: "Error en los datos enviados", detalle: error.message });
    }
});

// GET: Obtener pedidos
router.get("/", verificarToken, async function(req, res) {
    try {
        const pedidos = await Pedido.find().sort({ fechaCreacion: -1 });
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

// PUT: Cambiar estado
router.put("/:id", verificarToken, async function(req, res) {
    try {
        // 1. Validar si el ID es un ObjectId válido de MongoDB
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: "ID de pedido inválido" });
        }

        // 2. Validar que el estado sea permitido
        const { estado } = req.body;
        if (!["aprobado", "rechazado"].includes(estado)) {
            return res.status(400).json({ error: "Estado no permitido" });
        }

        // 3. Actualizar y verificar si existía
        const pedidoActualizado = await Pedido.findByIdAndUpdate(req.params.id, { estado }, { new: true });
        if (!pedidoActualizado) {
            return res.status(404).json({ error: "Pedido no encontrado" });
        }

        res.json({ mensaje: "Estado actualizado", pedido: pedidoActualizado });
    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

module.exports = router;