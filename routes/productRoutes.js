const express = require('express'); 
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/product', productController.getAllProducts);
router.post('/product', productController.createProduct);

module.exports = router;