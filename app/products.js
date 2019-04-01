const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid');
const config = require('../config');
const fileDb = require('../fileDb');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});


router.get('/', (req, res) => {
  res.send(fileDb.getItems());
});

router.get('/:id', (req, res) => {
  res.send('A single product by id will be here');
});

router.post('/', upload.single('image'), (req, res) => {
  const product = req.body;

  if (req.file) {
    product.image = req.file.filename;
  }

  product.id = nanoid();

  fileDb.addItem(product);
  res.send({message: 'OK'});
});

// export default router
module.exports = router;
