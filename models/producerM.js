const mongoose = require('mongoose');

const producerSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },

    estado: {
        type: String,
        enum: ['activo', 'inactivo', 'Activo', 'Inactivo'],
        default: 'Activo'
    },
    
    slogan: String,

    descripcion: String,

    fechaCreacion: {
        type: Date,
        default: Date.now
    },

    fechaActualizacion: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('producerM', producerSchema);