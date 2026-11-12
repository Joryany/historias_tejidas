const mongoose = require("mongoose");

const esquemaUsuario = new mongoose.Schema({
    nombre: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    telefono: { 
        type: String 
    },
    direccion: { 
        type: String 
    },
    rol: { 
        type: String, 
        enum: ["cliente", "admin"], 
        default: "cliente" 
    },
    fechaRegistro: { 
        type: Date, 
        default: Date.now 
    }
});

const Usuario = mongoose.model("Usuario", esquemaUsuario);
module.exports = Usuario;