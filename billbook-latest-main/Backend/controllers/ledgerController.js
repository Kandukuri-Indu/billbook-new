const express = require('express');
const router = express.Router();
const AddLedger = require('../models/addLedger');


router.post('/ledger', async (req, res) => {
  try {
    const { name, date, reference, mode } = req.body;
    const ledgerData = { name, date, reference, mode };
    const ledger = new AddLedger(ledgerData);
    const savedLedger = await ledger.save();
    res.status(201).json(savedLedger);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get('/ledger', async (req, res) => {
  try {
    const ledgerEntries = await AddLedger.find();
    res.status(200).json(ledgerEntries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/ledger/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const existingLedger = await AddLedger.findById(id);

    if (!existingLedger) {
      return res.status(404).json({ error: 'Ledger entry not found' });
    }

    const updatedLedger = await AddLedger.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    res.status(200).json(updatedLedger);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.delete('/ledger/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedLedger = await AddLedger.findByIdAndDelete(id);

    if (!deletedLedger) {
      return res.status(404).json({ error: 'Ledger entry not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
