const mongoose = require("mongoose");

const esquemaItem = new mongoose.Schema({
    nombre: { type: String, required: true }, 
    value: { type: String, required: true }, 
    multiplicador: { type: Number },
    precio: { type: Number, required: true, min: 1000 },
    defecto: { type: Boolean }
}, { _id: false });

const esquemaGrupo = new mongoose.Schema({
    nombre: { type: String, required: true },
    items: [esquemaItem]
}, { _id: false });

const esquemaProducto = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    categoria: { type: String, required: true },
    nombre: { type: String, required: true },
    precio: { type: Number, required: true, min: 1000 },
    imagen: { type: String, required: true },
    alt: { type: String },
    historia: { type: String },
    materiales: { type: String },
    etiqueta: { type: String },
    opciones: { type: [esquemaGrupo], default: [] } 
});

const Producto = mongoose.model("Producto", esquemaProducto);

module.exports = Producto;