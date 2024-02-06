const express = require('express');
const router = express.Router();
const PaymentDetails = require('../models/paymentDetails');
const invoiveschema = require('../models/addInvoice')
require('dotenv').config();


router.post('/payment', async (req, res) => {
  try {
    const paymentData = req.body;

    const payment = new PaymentDetails(paymentData);

    const invoice = paymentData.invoiceId;
    
    const invoiceid = await invoiveschema.findById(invoice);

    invoiceid.balance -= paymentData.amount;

    if (invoiceid.balance < 0) {
      invoiceid.balance = 0;
    }

    if (invoiceid.balance > 0) {
         
      const invoiceDate = new Date(invoiceid.invoiceDate);
      const dueDate = new Date(invoiceid.dueDate);

      if (invoiceid.balance === invoiceid.grandTotal) {
        invoiceid.invoiceStatus = 'UNPAID';
      } else if (invoiceDate > dueDate) {

        const overdueDays = Math.floor(
          (invoiceDate - dueDate) / (1000 * 60 * 60 * 24)
        );
        invoiceid.invoiceStatus = 'OVERDUE';
      } else {
        invoiceid.invoiceStatus = 'PARTIALLY PAID';
      }
    } else {
      invoiceid.invoiceStatus = 'PAID';
    }
    await invoiceid.save();

    const savedPayment = await payment.save();

    res.status(201).json(savedPayment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get('/payment', async (req, res) => {
  try {
    const payments = await PaymentDetails.find();
    res.status(200).json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve payments' });
  }
});


router.get('/paymentbycustomerid/:customerID', async (req, res) => {

  const  customerID  = req.params.customerID;

  try {
    const payments = await PaymentDetails.find({customerid: customerID});
    res.status(200).json(payments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve payments' });
  }
});

module.exports = router;
