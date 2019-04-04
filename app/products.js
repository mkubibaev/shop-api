const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid');

const config = require('../config');
const Product = require('../models/Product');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});


const router = express.Router();

router.get('/', (req, res) => {
    Product.find().populate('category')
        .then(products => res.send(products))
        .catch(() => res.sendStatus(500));
});

router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(result => {
            if (result) return res.send(result);
            res.sendStatus(404);
        })
        .catch(() => res.sendStatus(500));
});

router.post('/', upload.single('image'), (req, res) => {
    const productData = req.body;

    if (req.file) {
        productData.image = req.file.filename;
    }

    const product = new Product(productData);

    product.save()
        .then(result => res.send(result))
        .catch(() => res.status(400).send(error));
});


module.exports = router;
