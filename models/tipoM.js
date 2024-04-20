const mongoose = require('mongoose');

const tipoSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },
    descripcion: String,

    fechaCreacion: {
        type: Date,
        default: Date.now
    },

    fechaActualizacion: {
        type: Date,
        default: Date.now
    },
});


// Exportamos el modelo

module.exports = mongoose.model('tipoM', tipoSchema);