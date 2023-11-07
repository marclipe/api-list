const Product = require('../models/product')

const checkIdProductExistence = async (req, res, next) => {
  try {
    const existingProductId = await Product.findById(req.params.id)
    if (!existingProductId) {
      return res.status(404).json({ error: "Product Not Found!" })
    }
    next()
  } catch (error) {
    res.status(500).json({ error: "Error checking product id existence!" })
  }
}

module.exports = checkIdProductExistence;
