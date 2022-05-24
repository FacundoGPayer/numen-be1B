const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config;
const productsRoutes = require('./routes/products'); 

const app = express();
const port = process.env.PORT || 9000;
//Middleware
app.use(express.json());
app.use('/api', productsRoutes);

//Rutas
app.get('/', (req, res) => {
    res.send('Bienvenidos a mi API')
});
//Conexión con MongoDB Atlas
const pass = process.env.PASS; //se omitio por generar error
const cluster_uri = 'mongodb+srv://admin:'+"numen2022"+'@cluster-numen.bcv5z.mongodb.net/Productos?retryWrites=true&w=majority';
mongoose
.connect(cluster_uri).then(()=>console.log("CONECTADO A MONGO ATLAS"))
.catch((e)=>console.error('Error: '+ e));

//Coinfiguración de puerto para el servidor
app.listen(port, () => console.log('Servidor corriendo en puerto', port));

