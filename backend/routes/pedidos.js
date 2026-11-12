const express = require("express");
const router = express.Router();
const Pedido = require("../models/Pedido.js");

const verificarToken = (req, res, next) => {
    if (req.headers.authorization === process.env.ADMIN_TOKEN) next();
    else res.status(401).json({ error: "No autorizado" });
};


// POST: Crear pedido (Seguro)
router.post("/", async function(req, res) {
    try {
    
        const { nombre, whatsapp, fecha, lugar, productos, total } = req.body;
        
       
        if (!nombre || !whatsapp || !total) {
            return res.status(400).json({ error: "Faltan datos obligatorios." });
        }

     
        const nuevoPedido = new Pedido({ 
            nombre, whatsapp, fecha, lugar, productos, total, estado: "pendiente" 
        });
        
        await nuevoPedido.save();
        res.status(201).json({ mensaje: "Pedido guardado con éxito" });
    } catch (error) {
       
        res.status(400).json({ error: "Datos inválidos", detalle: error.message });
    }
});

// PUT: Cambiar estado (Validado)
router.put("/:id", verificarToken, async function(req, res) {
    try {
        const { estado } = req.body;
        
       
        if (!["aprobado", "rechazado"].includes(estado)) {
            return res.status(400).json({ error: "Estado no válido" });
        }

      
        const pedidoActualizado = await Pedido.findByIdAndUpdate(req.params.id, { estado: estado }, { new: true });
        
        if (!pedidoActualizado) {
            return res.status(404).json({ error: "Pedido no encontrado" });
        }

        res.json({ mensaje: "Estado actualizado", pedido: pedidoActualizado });
    } catch (error) {
        res.status(400).json({ error: "ID o datos inválidos" });
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

module.exports = router;