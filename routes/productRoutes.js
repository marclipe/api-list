const express = require('express'); 
const router = express.Router();
const productController = require('../controllers/productController');
const checkProductExistence = require('../middlewares/checkProductExistence');

router.get('/product', productController.getAllProducts);
router.post('/product', checkProductExistence, productController.createProduct);
router.put('/product/:id', productController.updateProduct);
router.delete('/product/:id', productController.deleteProduct);

module.exports = router;