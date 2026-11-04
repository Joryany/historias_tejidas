const express = require("express");
const router = express.Router();
const Producto = require("../models/Producto.js");

// Middleware para verificar el token
const verificarToken = (req, res, next) => {
    if (req.headers.authorization === process.env.ADMIN_TOKEN) {
        next(); 
    } else {
        res.status(401).json({ error: "No autorizado" });
    }
};

// GET /api/productos 
router.get("/", async function(req, res) {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/productos/:id 
router.get("/:id", async function(req, res) {
    try {
        const idBuscado = req.params.id;
        const producto = await Producto.findOne({ id: idBuscado });

        if (!producto) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST: Crear producto 
router.post("/", verificarToken, async function(req, res) {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.status(201).json({ mensaje: "Producto creado", producto: nuevoProducto });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT: Editar producto 
router.put("/:id", verificarToken, async function(req, res) {
    try {
        const productoActualizado = await Producto.findOneAndUpdate(
            { id: req.params.id }, 
            req.body, 
            { new: true }
        );
        if (!productoActualizado) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.json(productoActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE: Eliminar producto 
router.delete("/:id", verificarToken, async function(req, res) {
    try {
        const productoEliminado = await Producto.findOneAndDelete({ id: req.params.id });
        if (!productoEliminado) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.json({ mensaje: "Producto eliminado" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;