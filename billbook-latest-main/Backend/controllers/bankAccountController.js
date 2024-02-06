const express = require('express');
const router = express.Router();
const BankDetails = require("../models/BankDetails");


router.post('/bank-details', async (req, res) => {
  try {
    
    const bankDetailsData = req.body;

    
    const bankDetails = new BankDetails(bankDetailsData);

    
    const savedBankDetails = await bankDetails.save();

    
    res.status(201).json(savedBankDetails);
  } catch (error) {
    
    res.status(400).json({ error: error.message });
  }
});


router.get('/bank-details', async (req, res) => {
  try {
   
    const bankDetails = await BankDetails.find();

    
    res.status(200).json(bankDetails);
  } catch (error) {
    
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve bank details' });
  }
});

module.exports = router;
