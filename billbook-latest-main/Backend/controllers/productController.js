const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const AddProducts = require('../models/addProduct');
require('dotenv').config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post('/products', async (req, res) => {
  try {
    const formData = req.body;
console.log(formData)
    console.log("TWo")

    const productName = formData.name;


    const productID = `EasyBBProductID${productName}`;
    formData.productId = productID;
    

    const product = new AddProducts(formData);

    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message });
  }
});


router.get('/products', async (req, res) => {
  try {
    const products = await AddProducts.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const productid = req.params.id;
    const products = await AddProducts.findById(productid);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
