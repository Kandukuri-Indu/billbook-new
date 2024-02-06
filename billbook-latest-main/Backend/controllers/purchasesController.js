const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const AddPurchases = require('../models/addPurchases');
const AddProducts = require("../models/addProduct");
const addCustomer = require("../models/addCustomer");
const BankDetails = require("../models/BankDetails");
const { PassThrough } = require('stream');
const fs = require('fs');
const os = require('os');
const path = require('path');
const addPurchases = require('../models/addPurchases');
const DeletedPurchase = require('../models/deletedPurchases');
require('dotenv').config();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post('/purchases', async (req, res) => {
  try {
    const {formData} = req.body;
    console.log("formdata", formData)
    console.log("product", formData.table);

    let signatureImage = formData?.bankDetails?.signatureImage;

    if (signatureImage) {
      const result = await cloudinary.uploader.upload(signatureImage, {
        folder: 'billing',
      });
      signatureImage = {
        url: result?.url,
        public_id: result?.public_id,
      };
      formData.bankDetails.signatureImage = signatureImage;
    }
    
    const randomNum = generateRandomNumber();
    const purchaseID = `EasyBBPUID${randomNum}`;
    formData.purchasesId = purchaseID;

    const purchase = await addCustomer.findById(formData.customerName)

    formData.customerId = purchase.customerId;
    console.log("customerId", formData.customerId);

    const purchases = new AddPurchases(formData);

    const savedPurchases = await purchases.save();

    res.status(201).json(savedPurchases);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

function generateRandomNumber() {
  return Math.floor(1000000000 + Math.random() * 9000000000);
}

router.post("/purchases/upload-pdf", async (req, res) => {
  try {
    console.log(req?.files)
      if (!req.files || !req.files.pdfFile) {
          return res.status(400).json({ error: "PDF file is required." });
      }

      const pdfFile = req.files.pdfFile;

      // Upload the PDF file to Cloudinary
      const pdfResult = await cloudinary.uploader.upload(pdfFile.tempFilePath, {
          folder: "purchasePDF",
          resource_type: "auto",
          allowed_formats: ['pdf'],
      });

      // Respond with the Cloudinary URL
      res.status(200).json({ pdfUrl: pdfResult.secure_url });
  } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
  }
});





// router.get('/purchases', async (req, res) => {
//   try {
//     const purchases = await AddPurchases.find().populate("customerName")
//     .populate({
//         path: 'payments',
//         model: 'PaymentDetails', 
//     })

//     res.status(200).json(purchases);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

router.get("/purchases", async (req, res) => {
  try {
    const purchase = await AddPurchases.find().populate("customerName")
    .populate({
      path: 'payments',
      model: 'PaymentDetails', 
    })
    // .populate({
    //   path: 'bankDetails',
    //   // model: 'BankDetails', // Assuming 'BankDetails' is the correct model name for bank details
    //   populate: {
    //     path: 'selectBank',
    //     model: 'BankDetails' 
    //   }
    // });

    res.status(200).json(purchase);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



router.get("/purchases/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const purchase = await AddPurchases.findById(id).populate("customerName")
    .populate({
      path: 'payments',
      model: 'PaymentDetails', 
    })
    .populate({
      path: 'bankDetails',
      // model: 'BankDetails', // Assuming 'BankDetails' is the correct model name for bank details
      populate: {
        path: 'selectBank',
        model: 'BankDetails' 
      }
    });

    if (!purchase) {
      return res.status(404).json({ error: "Purchases not found" });
    }

    res.status(200).json(purchase);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/purchasesbyCustomerId/:customerid", async (req, res) => {
  const  customerID  = req.params.customerid;

  console.log("customerID", customerID)

  try {
    const purchase = await AddPurchases.find({ customerId: customerID });

    console.log("invoice", purchase)

    if (!purchase) {
      return res.status(404).json({ error: "Purchases not found" });
    }

    res.status(200).json(purchase);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/purchases/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    
    const purchase = await AddPurchases.findById(id);
    if (!purchase) {
      return res.status(404).send('purchase not found');
    }
   
    const deletedPurchasesData = {
      purchaseNumber: purchase.purchaseNumber,
      customerName: purchase.customerName,
      purchasesDate: purchase.purchasesDate,
      dueDate: purchase.dueDate,
      referenceNo: purchase.referenceNo,
      paymentTerms: purchase.paymentTerms,
      currency: purchase.currency,
      website: purchase.website,
      grandTotal: purchase.grandTotal,
      totalDiscount: purchase.totalDiscount,
      totalTax: purchase.totalTax,
      taxableAmount: purchase.taxableAmount,
      cgstTaxAmount: purchase.cgstTaxAmount,
      sgstTaxAmount: purchase.sgstTaxAmount,
      totalTaxPercentage: purchase.totalTaxPercentage,
      totalDiscountPercentage: purchase.totalDiscountPercentage,
      cgstTaxPercentage: purchase.cgstTaxPercentage,
      sgstTaxPercentage: purchase.sgstTaxPercentage,
      payments: purchase.payments, 
      table: purchase.table, 
      bankDetails: purchase.bankDetails, 
    };
    

    const newDeletedPurchase = new DeletedPurchase(deletedPurchasesData); 
    await newDeletedPurchase.save();
    await AddPurchases.findByIdAndDelete(id);

    res.status(200).send('Purchase deleted successfully');
  } catch (error) {
    console.error('Error deleting purchase:', error);
    res.status(500).send('Internal Server Error');
  }
});


router.get("/newDeletedPurchase/purchase", async (req, res) => {
  try {
    const deletedPurchases = await DeletedPurchase.find().populate("customerName");
    res.status(200).json(deletedPurchases);
  } catch (error) {
    console.error('Error retrieving deleted invoices:', error);
    res.status(500).send('Internal Server Error');
  }
});


router.put("/update-purchase/:purchaseid", async (req, res) => {
  const  purchaseID  = req.params.purchaseid;
  const updatedData = req.body;
  console.log("updated data", updatedData)
  console.log("invoice id", purchaseID)

  try {
    const existingPurchase = await AddPurchases.findById(purchaseID);

    if (!existingPurchase) {
      return res.status(404).json({ error: "Purchase not found" });
    }

   
    if (updatedData.table && updatedData.table.length > 0) {
      for (const item of updatedData.table) {
        const productId = item.productId;
        const quality = item.quantity;

        const product = await AddProducts.findById(productId);
        if (product && product.quality) {
          product.quality -= quality;
          await product.save();
        }
      }
    }

    let updatedSignatureImage = updatedData?.bankDetails?.signatureImage;

    if (updatedSignatureImage) {
      const result = await cloudinary.uploader.upload(updatedSignatureImage, {
        folder: "billing",
      });
      updatedSignatureImage = {
        url: result?.url,
        public_id: result?.public_id,
      };
      updatedData.bankDetails.signatureImage = updatedSignatureImage;
    }

    const updatedPurchase = await AddPurchases.findByIdAndUpdate(
      purchaseID,
      updatedData.formData,
      {
        new: true,
      }
    );

    console.log("purchase by id", updatedPurchase)

    res.status(200).json(updatedPurchase);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});






// DELETE route to delete a specific purchase by ID
router.delete('/purchases/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPurchase = await AddPurchases.findByIdAndDelete(id);

    if (!deletedPurchase) {
      return res.status(404).json({ error: 'Purchase not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
