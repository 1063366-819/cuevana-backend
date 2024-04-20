const mongoose = require('mongoose');
const URI = 'mongodb+srv://cesargonzalez:DmCWbp6eV1tC80zJ@cluster0.wmstzhq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB conectado');
});