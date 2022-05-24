const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    nombre: {type: String, required: true},
    marca: {type: String, required: true},
    descripcion: {type:String},
    precio: {type: Number, required: true},
    stock: {type: Number, required: true},
}, {versionKey: false})

module.exports = mongoose.model('Producto', productSchema);