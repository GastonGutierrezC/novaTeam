const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors'); // Importa el módulo cors

app.use(cors()); // Usa cors antes de tus rutas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));
// Import connection
const dbFile = require('./connection');

// Import routes and user model
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));

app.use('/api/user', userRoute);
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.end('Welcome to the backend server');
});

const PORT = process.env.PORT || 7542;
app.listen(PORT, function () {
    console.log(`The NODE server is running correctly on port ${PORT}`);
});
