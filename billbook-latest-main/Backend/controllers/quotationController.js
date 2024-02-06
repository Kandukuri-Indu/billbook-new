const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const AddQuotation = require("../models/addQuotation");
const AddProducts = require("../models/addProduct");
const addCustomer = require("../models/addCustomer");
const BankDetails = require("../models/BankDetails");
const { PassThrough } = require('stream');
const fs = require('fs');
const os = require('os');
const path = require('path');
const addPurchases = require('../models/addPurchases');
// const DeletedPurchase = require('../models/deletedPurchases');
const DeletedQuotation = require('../models/addQuotation')
require('dotenv').config();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post('/quotation', async (req, res) => {
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
    const quotationID = `EasyBBQIID${randomNum}`;
    formData.quotationId = quotationID;

    const quotation = await addCustomer.findById(formData.customerName)

    formData.customerId = quotation.customerId;
    console.log("customerId", formData.customerId);

    const quotations = new AddQuotation(formData);

    const savedquotations = await quotations.save();

    res.status(201).json(savedquotations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

function generateRandomNumber() {
  return Math.floor(1000000000 + Math.random() * 9000000000);
}

router.post("/quotations/upload-pdf", async (req, res) => {
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

router.get("/quotations", async (req, res) => {
  try {
    const quotation = await AddQuotation.find().populate("customerName")
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

    res.status(200).json(quotation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



router.get("/quotations/:id", async (req, res) => {
  const  quotationid  = req.params.id;
  console.log("quotation id", quotationid)

  try {
    const quotation = await AddQuotation.findById(quotationid).populate("customerName")
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
    })

    if (!quotation) {
      return res.status(404).json({ error: "Quotations not found" });
    }

    res.status(200).json(quotation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/quotationbyCustomerId/:customerid", async (req, res) => {
  const  customerID  = req.params.customerid;

  console.log("customerID", customerID)

  try {
    const quotation = await AddQuotation.find({ customerId: customerID });

    console.log("quotation", quotation)

    if (!quotation) {
      return res.status(404).json({ error: "quotations not found" });
    }

    res.status(200).json(quotation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/quotation/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    
    const quotation = await AddQuotation.findById(id);
    if (!quotation) {
      return res.status(404).send('quotation not found');
    }
   
    const deletedQuotationData = {
      quotationNumber: quotation.quotationNumber,
      customerName: quotation.customerName,
      quotationDate: quotation.quotationDate,
      dueDate: quotation.dueDate,
      referenceNo: quotation.referenceNo,
      paymentTerms: quotation.paymentTerms,
      currency: quotation.currency,
      website: quotation.website,
      grandTotal: quotation.grandTotal,
      totalDiscount: quotation.totalDiscount,
      totalTax: quotation.totalTax,
      taxableAmount: quotation.taxableAmount,
      cgstTaxAmount: quotation.cgstTaxAmount,
      sgstTaxAmount: quotation.sgstTaxAmount,
      totalTaxPercentage: quotation.totalTaxPercentage,
      totalDiscountPercentage: quotation.totalDiscountPercentage,
      cgstTaxPercentage: quotation.cgstTaxPercentage,
      sgstTaxPercentage: quotation.sgstTaxPercentage,
      payments: quotation.payments, 
      table: quotation.table, 
      bankDetails: quotation.bankDetails, 
    };
    

    const newDeletedQuotation = new DeletedQuotation(deletedQuotationData); 
    await newDeletedQuotation.save();
    await AddQuotation.findByIdAndDelete(id);

    res.status(200).send('Quotation deleted successfully');
  } catch (error) {
    console.error('Error deleting quotation:', error);
    res.status(500).send('Internal Server Error');
  }
});


router.get("/newDeletedQuotation/quotation", async (req, res) => {
  try {
    const deletedQuotation = await DeletedQuotation.find().populate("customerName");
    res.status(200).json(deletedQuotation);
  } catch (error) {
    console.error('Error retrieving deleted quotations:', error);
    res.status(500).send('Internal Server Error');
  }
});


router.put("/update-quotation/:quotationid", async (req, res) => {
  const  quotationID  = req.params.quotationid;
  const updatedData = req.body;
  console.log("updated data", updatedData)
  console.log("invoice id", quotationID)

  try {
    const existingQuotation = await AddQuotation.findById(quotationID);

    if (!existingQuotation) {
      return res.status(404).json({ error: "Quotation not found" });
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

    const updatedQuotation = await AddQuotation.findByIdAndUpdate(
      quotationID,
      updatedData.formData,
      {
        new: true,
      }
    );

    console.log("purchase by id", updatedQuotation)

    res.status(200).json(updatedQuotation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});






// DELETE route to delete a specific purchase by ID
router.delete('/quotation/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedQuotation = await AddQuotation.findByIdAndDelete(id);

    if (!deletedQuotation) {
      return res.status(404).json({ error: 'Quotation not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
