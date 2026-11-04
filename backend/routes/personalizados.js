const express = require("express");
const router = express.Router();
const PedidoPersonalizado = require("../models/PedidoPersonalizado.js");

// POST: Crear pedido personalizado (desde el formulario)
router.post("/", async function(req, res) {
    try {
        const nuevoPersonalizado = new PedidoPersonalizado(req.body);
        await nuevoPersonalizado.save();
        res.status(201).json({ mensaje: "Solicitud guardada con éxito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET: Obtener todos los personalizados (para el Admin)
router.get("/", async function(req, res) {
    try {
        const pedidos = await PedidoPersonalizado.find().sort({ fechaCreacion: -1 });
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT: Cambiar estado
router.put("/:id", async function(req, res) {
    try {
        await PedidoPersonalizado.findByIdAndUpdate(req.params.id, { estado: req.body.estado });
        res.json({ mensaje: "Estado actualizado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;