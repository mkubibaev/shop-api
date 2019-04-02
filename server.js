const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const products = require('./app/products');

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

mongoose.connect('mongodb://localhost/shop', {useNewUrlParser: true}).then(() => {

    app.use('/products', products);

    app.listen(port, () => {
        console.log(`Server started on ${port} port`);
    });
});
