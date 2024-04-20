const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.URI);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB conectado');
});