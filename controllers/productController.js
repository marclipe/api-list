const Product = require('../models/product')

exports.createProduct = async(req, res) => {
  try {
    const newProduct = new Product(req.body)
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Error creating product!" });
  }
}

exports.getAllProducts = async(req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products)
  } catch(error) {
    console.status(500).json({ error: 'Error search products!!' })
  }
}