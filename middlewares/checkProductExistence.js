const Product = require('../models/product');

const checkProductExistence = async (req, res, next) => {
  try {
    const existingProduct = await Product.findOne({ name: req.body.name }); 
    if (existingProduct) {
      return res.status(409).json({ error: 'Product with the same name already exists!' })
    } 
    next();
  } catch(error) {
    res.status(500).json({ error: 'Error checking product existence!' })
  }
}

module.exports = checkProductExistence;