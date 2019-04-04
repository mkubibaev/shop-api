const express = require('express');

const Category = require('../models/Category');
const router = express.Router();

router.get('/', (req, res) => {
    Category.find()
    .then(categories => res.send(categories))
    .catch(() => res.sendStatus(500));
});

router.post('/', (res,req) => {
    const category = new Category(req.body);

    category.save()
        .then(result => res.send(result))
        .catch(error => res.statusCode(400).send(error));
})

module.exports = router;