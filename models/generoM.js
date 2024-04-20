const mongoose = require('mongoose');

const generoSchema = new mongoose.Schema({
    nombre: {
        type: String,
    },

    estado: {
        type: String,
        enum: ['activo', 'inactivo', 'Activo', 'Inactivo'],
        default: 'Activo'
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

module.exports = mongoose.model('generoM', generoSchema);