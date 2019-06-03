const express = require('express');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/productRouter');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use('/products', productRoutes);

app.listen(8080);