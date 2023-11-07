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

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id
    const product = await Product.findByIdAndUpdate(productId, req.body, {new: true});
    if (!product) {
      return res.status(404).json({ error: 'Product Not found!' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Error update product!" });
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      res.status(404).json({ error: 'Product Not Found!' });
    }
    res.status(204).end();
  } catch(error) {
    console.error("Error delete product: ", error);
    res.status(500).json({ error: 'Error delete product!' });
  }
}