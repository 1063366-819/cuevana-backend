const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
app.use(express.json());
require('./databases/database');
const tipoR = require('./routes/tipoR');
const directorR = require('./routes/directorR');
const mediaR = require('./routes/mediaR');
const generoR = require('./routes/generoR');
const producerR = require('./routes/producerR');

async function principal(){ 
    await app.listen(process.env.PORT);
    console.log(`Express conectado en el puerto ${process.env.PORT}`);
}

app.use(cors(
    origin = 'https://enchanting-khapse-36998b.netlify.app',
))

app.get('/', (req, res) => {
    res.send("Express conectado en el puerto 12330 cuidadosamente");
});

app.use('/tipo', tipoR);
app.use('/director', directorR);
app.use('/media', mediaR);
app.use('/genero', generoR);
app.use('/productora', producerR);

principal();