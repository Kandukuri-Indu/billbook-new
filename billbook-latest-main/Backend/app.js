const express = require('express');
const bodyParser = require('body-parser');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const mongoose = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');
const customerController = require('./controllers/customerController');
const vendorController = require ('./controllers/vendorController');
const ledgerController = require('./controllers/ledgerController');
const invoiceController = require('./controllers/invoiceController');
const productController = require('./controllers/productController');
const quotationController = require('./controllers/quotationController');
const purchasesController = require('./controllers/purchasesController');
const logout = require('./controllers/logout');
const categoryController = require('./controllers/categoryController');
const gstController = require('./controllers/gstController');
const paymentController = require('./controllers/paymentController');
const currencyController = require('./controllers/currencyController');
const bankAccountController = require('./controllers/bankAccountController');
require('dotenv').config()


const cors = require('cors');
const BankDetails = require('./models/BankDetails');

const app = express();
const port = process.env.PORT || 8000;



//app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ extended: true, limit: '500mb' }));


const allowedOrigins = [
  'http://localhost:3002',
  'http://localhost:3000',
  'http://localhost:3001',
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);


app.use('/api/superadmin', adminRoutes);
app.use('/api/superAdmin', logout)
app.use('/api/addCustomer', customerController);
app.use('/api/addVendor', vendorController);
app.use('/api/addLedger', ledgerController);
app.use('/api/addInvoice', invoiceController);
app.use('/api/addProduct', productController);
app.use('/api/addQuotation', quotationController);
app.use('/api/addPurchases', purchasesController);
app.use('/api/addCategory', categoryController);
app.use('/api/addgst', gstController)
app.use('/api/paymentDetails', paymentController);
app.use('/api/AddCurrency', currencyController);
app.use('/api/BankDeatils', bankAccountController)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
