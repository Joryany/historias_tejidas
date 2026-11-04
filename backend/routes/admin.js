const express = require("express");
const router = express.Router();

router.post("/login", function(req, res) {
    const { usuario, password } = req.body;

    
    if (usuario === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
        
        res.json({ token: process.env.ADMIN_TOKEN });
    } else {
        res.status(401).json({ error: "Usuario o contraseña incorrectos" });
    }
});

module.exports = router;