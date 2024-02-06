const mongoose = require('mongoose');

const Superadmin = new mongoose.Schema({
  AdminUniqueID: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
  }
});

module.exports = mongoose.model('SuperAdmin', Superadmin);
