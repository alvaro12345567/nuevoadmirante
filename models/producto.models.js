const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema(
  { 
    nombre: { type: String, required: [true, "El nombre es requerido"] },
    descripcion: { type: String, required: [true, "La descripción es requerida"] },
    precio: { type: Number, required: [true, "El precio es requerido"] },
    cantidad: {
      type: Number,
      required: [true, "La cantidad es requerida"],
      min: [0, "La cantidad no puede ser negativa"]
    },
    codigo: {
      type: Number,
      required: [true, "El código es requerido"],
      unique: true,
      immutable: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Producto', ProductoSchema);
