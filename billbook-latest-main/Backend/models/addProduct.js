const mongoose = require('mongoose');

const addProductsSchema = new mongoose.Schema({
  productId: {
    type: String,
    unique: true,
    required: true
  },
  itemType: {
    type: String,
    enum: ['product'],
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  itemCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AddCategory",
  },
  price: Number,
  // units: String,
  quality : Number,
  
  // quality: selectedProduct.quantity - quality,
});  

module.exports = mongoose.model('AddProducts', addProductsSchema);
