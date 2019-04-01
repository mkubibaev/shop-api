const express = require('express');
const cors = require('cors');
const products = require('./app/products');
const fileDb = require('./fileDb');
const app = express();
fileDb.init();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

const port = 8000;

app.use('/products', products);

app.listen(port, () => {
  console.log(`Server started on ${port} port`);
});
