const express = require('express'); 
const router = express.Router();
const productController = require('../controllers/productController');
const checkProductExistence = require('../middlewares/checkProductExistence');
const checkIdProductExistence = require('../middlewares/checkIdProductExistence');

router.get('/product', productController.getAllProducts);
router.get('/product/:id', checkIdProductExistence, productController.getProductById)
router.post('/product', checkProductExistence, productController.createProduct);
router.put('/product/:id', checkIdProductExistence, productController.updateProduct);
router.delete('/product/:id', checkIdProductExistence, productController.deleteProduct);

module.exports = router;