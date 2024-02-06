const mongoose = require('mongoose');

const addCustomerSchema = new mongoose.Schema({
  customerId: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String, 
    required: true, 
  },
  currency: {
    type: String,
  },
  website: {
    type: String,
  },
  notes: {
    type: String,
  },
  image: {
    url: String,
    public_id: String,
  },
  myBalance: {
    type: Number,
  },
  billingAddress: {
    name: {
      type: String,
    },
    addressLine1: {
      type: String,
    },
    addressLine2: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    pincode: {
      type: String,
    },
  },
  Invoices: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "AddInvoice",
  }],
  payments: [{
    type: mongoose.Schema.Types.ObjectId,
    default: "PaymentDetails"
  }],
  shippingAddress: {
    name: {
      type: String,
    },
    addressLine1: {
      type: String,
    },
    addressLine2: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    pincode: {
      type: String,
    },
  },
});

module.exports = mongoose.model('AddCustomer', addCustomerSchema);
