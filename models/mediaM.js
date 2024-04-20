const mongoose = require('mongoose'); 

const mediaSchema = new mongoose.Schema({
    tittle: {
        type: String,
    },

    sinopsis: {
        type: String,
    },

    link: {
        type: String,
    },

    image: {
        type: String,
    },

    premios: {
        type: Number,
    },

    genero: {
        type: String,
        ref: 'Genre',
    },

    director: {
        type: String,
        ref: 'Director',
    },

    productora: {
        type: String,
        ref: 'Productora',
    },

    tipo: {
        type: String,
        ref: 'Tipo',
    },

    creadoEn: {
        type: Date,
        default: Date.now
    },

    actualizadoEn: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('mediaM', mediaSchema);