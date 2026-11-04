const express = require("express");
const router = express.Router();
const Pedido = require("../models/Pedido.js");

const verificarToken = (req, res, next) => {
    if (req.headers.authorization === process.env.ADMIN_TOKEN) next();
    else res.status(401).json({ error: "No autorizado" });
};

// POST: Crear pedido 
router.post("/", async function(req, res) {
    try {
        const nuevoPedido = new Pedido(req.body);
        await nuevoPedido.save();
        res.status(201).json({ mensaje: "Pedido guardado con éxito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET: Obtener todos los pedidos 
router.get("/", verificarToken, async function(req, res) {
    try {
        const pedidos = await Pedido.find().sort({ fechaCreacion: -1 });
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT: Cambiar estado 
router.put("/:id", verificarToken, async function(req, res) {
    try {
        await Pedido.findByIdAndUpdate(req.params.id, { estado: req.body.estado });
        res.json({ mensaje: "Estado actualizado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;