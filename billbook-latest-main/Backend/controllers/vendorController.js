const express = require('express');
const router = express.Router();
const AddVendor = require('../models/addVendor');

router.post('/vendors', async (req, res) => {
  try {
    const { name, email, phoneNumber, balance } = req.body;
    const vendorData = { name, email, phoneNumber, balance };
    const vendor = new AddVendor(vendorData);
    const savedVendor = await vendor.save();
    res.status(201).json(savedVendor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}); 
router.get('/vendors', async (req, res) => {
  try {
    const vendors = await AddVendor.find();
    res.status(200).json(vendors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/vendors/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, phoneNumber, balance } = req.body;
  
  try {
    const updatedVendor = await AddVendor.findByIdAndUpdate(
      id,
      { name, email, phoneNumber, balance },
      { new: true }
    );

    if (!updatedVendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }

    res.status(200).json(updatedVendor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.delete('/vendors/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const deletedVendor = await AddVendor.findByIdAndDelete(id);

    if (!deletedVendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }

    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
