const express = require('express');
const router = express.Router();
const AddGst = require('../models/GstModel');
require('dotenv').config();


router.post('/gst', async (req, res) => {
  try {
    const GstData = req.body;

    const GST = new AddGst(GstData);

    const savedGst = await GST.save();

    res.status(201).json(savedGst);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all Gst
router.get('/gst', async (req, res) => {
  try {
    const Gst = await AddGst.find();
    res.status(200).json(Gst);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve Gst' });
  }
});


module.exports = router;