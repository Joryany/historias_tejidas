const express = require("express");
const router = express.Router();


const ADMIN_USER = "Joryany";
const ADMIN_PASS = "JoryanyAdmin23.";

router.post("/login", function(req, res) {
    const { usuario, password } = req.body;

    if (usuario === ADMIN_USER && password === ADMIN_PASS) {
        res.json({ token: "token-secreto-historias-tejidas" });
    } else {
        res.status(401).json({ error: "Usuario o contraseña incorrectos" });
    }
});

module.exports = router;