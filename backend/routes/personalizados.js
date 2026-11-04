const express = require("express");
const router = express.Router();
const PedidoPersonalizado = require("../models/PedidoPersonalizado.js");

const verificarToken = (req, res, next) => {
    if (req.headers.authorization === process.env.ADMIN_TOKEN) next();
    else res.status(401).json({ error: "No autorizado" });
};

// POST: Crear pedido personalizado 
router.post("/", async function(req, res) {
    try {
        const nuevoPersonalizado = new PedidoPersonalizado(req.body);
        await nuevoPersonalizado.save();
        res.status(201).json({ mensaje: "Solicitud guardada con éxito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET: Obtener todos
router.get("/", verificarToken, async function(req, res) {
    try {
        const pedidos = await PedidoPersonalizado.find().sort({ fechaCreacion: -1 });
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT: Cambiar estado 
router.put("/:id", verificarToken, async function(req, res) {
    try {
        await PedidoPersonalizado.findByIdAndUpdate(req.params.id, { estado: req.body.estado });
        res.json({ mensaje: "Estado actualizado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;