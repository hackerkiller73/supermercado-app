// /backend/models/Venta.js

const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  fecha: { type: Date, default: Date.now },
  hora: String,
  productos: [{ nombre: String, cantidad: Number, precio: Number }],
  cliente: String,
  total: Number,
});

module.exports = mongoose.model('Venta', ventaSchema);
