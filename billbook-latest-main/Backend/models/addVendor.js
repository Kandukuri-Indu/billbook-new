const mongoose = require('mongoose');

const addVendorSchema = new mongoose.Schema({
  vendorId: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  action: {
    type: String,
  }
});

module.exports = mongoose.model('AddVendor', addVendorSchema);
