const express = require('express');
const router = express.Router();
const AddCurrency = require('../models/currencyModel');
require('dotenv').config();


router.post('/currency', async (req, res) => {
  try {
    const CurrencyData = req.body;

    const Currency = new AddCurrency(CurrencyData);

    const savedCurrency = await Currency.save();

    res.status(201).json(savedCurrency);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Gst
router.get('/currency', async (req, res) => {
  try {
    const Currency = await AddCurrency.find();
    res.status(200).json(Currency);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve Gst' });
  }
});


module.exports = router;