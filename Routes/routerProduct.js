const express = require('express');
const productController = require('../Controllers/productController');
const router = express.Router();

router
    .post('/', productController.createProduct)
    .get('/', productController.getAllProducts);
router
    .get('/:id', productController.getProduct)
    .put('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct);
module.exports = router;