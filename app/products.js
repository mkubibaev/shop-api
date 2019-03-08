const express = require('express');
const fileDb = require('../fileDb');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(fileDb.getItems());
});

router.get('/:id', (req, res) => {
    res.send('A single product will be here');
});

router.post('/', (req, res) => {
    console.log(req.body);
    fileDb.addItem(req.body);
    res.send({message: 'OK'});
});

module.exports = router;
