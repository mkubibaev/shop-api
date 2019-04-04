const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');
const products = require('./app/products');
const categories = require('./app/categories');

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

mongoose.connect(config.dbUrl, config.mongoOptions).then(() => {

    app.use('/products', products);
    app.use('/categories', categories);

    app.listen(port, () => {
        console.log(`Server started on ${port} port`);
    });
});
