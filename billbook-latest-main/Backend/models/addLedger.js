const mongoose = require('mongoose');

const addLedgerSchema = new mongoose.Schema({
  ledgerId: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    enum: ['credit', 'debit'],
    required: true,
  },
});

module.exports = mongoose.model('AddLedger', addLedgerSchema);
