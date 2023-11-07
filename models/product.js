const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');

/*collection in MongoDB*/
const productSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  },
  price: {
    type: Decimal128,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

const Product = mongoose.model('Product', productSchema); 

module.exports = Product;