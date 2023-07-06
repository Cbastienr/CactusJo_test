const express = require('express');
const router = express.Router();
const productController = require('./Controllers/productController');

// GET products
router.get('/products', productController.getProducts);

// GET product by ID
router.get('/products/:id', productController.getProductById);

// POST new product
router.post('/products', productController.createProduct);

// UPDATE product by ID
router.put('/products/:id', productController.updateProduct);

// DELETE product
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;