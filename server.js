// /backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ventasRoutes = require('./routes/ventasRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/supermercadoDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/ventas', ventasRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
