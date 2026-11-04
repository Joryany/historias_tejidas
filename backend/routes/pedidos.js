const express = require("express");
const router = express.Router();
const Pedido = require("../models/Pedido.js");

// POST: Crear pedido (desde el carrito)
router.post("/", async function(req, res) {
    try {
        const nuevoPedido = new Pedido(req.body);
        await nuevoPedido.save();
        res.status(201).json({ mensaje: "Pedido guardado con éxito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET: Obtener todos los pedidos (para el Admin)
router.get("/", async function(req, res) {
    try {
        const pedidos = await Pedido.find().sort({ fechaCreacion: -1 });
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT: Cambiar estado (aprobar/rechazar desde el Admin)
router.put("/:id", async function(req, res) {
    try {
        await Pedido.findByIdAndUpdate(req.params.id, { estado: req.body.estado });
        res.json({ mensaje: "Estado actualizado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;