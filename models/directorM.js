const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    Nombre: {
        type: String,
    },

    Estado: {
        type: String, 
        enum: ['Activo', 'Inactivo', 'activo', 'inactivo'],
        default: 'Activo'
    },

    fechaCreacion: {
        type: Date,
        default: Date.now
    },

    fechaActualizacion: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Director', directorSchema);