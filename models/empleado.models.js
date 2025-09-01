const mongoose = require('mongoose'); // Importa mongoose
const {Schema} = mongoose;
const EmpleadoSchema = new Schema({

    name: {type: String, 
        required: [true, 'El nombre es obligatorio'],
        trim: true 
    },
    position: {type: String,
        required: [true, 'El puesto es obligatorio'],
        trim: true
    },
    office: {type: String, 
        required: [true, 'La oficina es obligatoria'],
        trim: true
    },
    salary: {type: Number, 
        required: [true, 'El salario es obligatorio'],
        min: [0, 'El salario no puede ser negativo']
    }
},
  { 
    timestamps: true, // Agrega createdAt y updatedAt
 versionKey: false // Desactiva __v
}
);
module.exports = mongoose.model('Empleado', EmpleadoSchema);// exporta el modelo
