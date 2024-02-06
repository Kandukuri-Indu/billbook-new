const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const AddInvoices = require("../models/addInvoice");
const AddProducts = require("../models/addProduct");
const DeletedInvoice = require("../models/deletedInvoice");
const { PassThrough } = require('stream');
const fs = require('fs');
const os = require('os');
const path = require('path');
const addCustomer = require("../models/addCustomer");
require("dotenv").config();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post("/invoices", async (req, res) => {
  try {
    const { formData } = req.body;
    console.log("formdata", formData)
    console.log("product", formData.table);

    // if (formData.table && formData.table.length > 0) {
    //   for (const item of formData.table) {
    //     const productId = item.productId;
    //     const quality = item.quantity;
    //     console.log("productId", productId)

    //     const product = await AddProducts.findById(productId);
    //     if(product.quality){
    //       product.quality -= quality;
    //     }
    //     await product.save();
    //   }
    // }
    let signatureImage = formData?.bankDetails?.signatureImage;

    if (signatureImage) {
      const result = await cloudinary.uploader.upload(signatureImage, {
        folder: "billing",
      });
      signatureImage = {
        url: result?.url,
        public_id: result?.public_id,
      };
      formData.bankDetails.signatureImage = signatureImage;
    }

    const randomNum = generateRandomNumber();
    const invoiceID = `EasyBBINID${randomNum}`;
    formData.invoiceId = invoiceID;

    const customer = await addCustomer.findById(formData.customerName);

    formData.customerId = customer.customerId;
    console.log("customerId", formData.customerId);

    const invoice = new AddInvoices(formData);

    const savedInvoice = await invoice.save();

    // const customer = await addCustomer.findById(formData.customerName);

    // customer.Invoices.push(invoice._id);

    // customer.save();



    res.status(201).json(savedInvoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

function generateRandomNumber() {
  // Generate random number between 1000000000 and 9999999999 (10-digit range)
  return Math.floor(1000000000 + Math.random() * 9000000000);
}


// router.post("/invoices", async (req, res) => {
//   try {
//     const formData = req.body;

//     if (!formData) {
//       return res.status(400).json({ error: "FormData is required." });
//     }

//     if (formData.table && formData.table.length > 0) {
//       for (const item of formData.table) {
//         const productId = item.productId;
//         const quantity = item.quantity;

//         const product = await AddProducts.findById(productId);
//         if (product) {
//           product.quantity -= quantity; 
//           await product.save();
//         }
//       }
//     }

//     let signatureImage = formData.bankDetails?.signatureImage;

//     if (signatureImage) {
//       const result = await cloudinary.uploader.upload(signatureImage, {
//         folder: "billing",
//       });
//       formData.bankDetails.signatureImage = {
//         url: result?.url,
//         public_id: result?.public_id,
//       };
//     }

    
//     const customer = await addCustomer.findById(formData.customer);

//     const invoice = new AddInvoices(formData);

    
//     invoice.customer.push(customer._id);

    
//     const savedInvoice = await invoice.save();

   
//     customer.Invoices.push(savedInvoice._id);
//     await customer.save();

//     res.status(201).json(savedInvoice);
//   } catch (error) {
//     console.error("Error creating invoice:", error);
//     res.status(400).json({ error: error.message });
//   }
// });




router.post("/invoices/upload-pdf", async (req, res) => {
  try {
    console.log(req?.files)
      if (!req.files || !req.files.pdfFile) {
          return res.status(400).json({ error: "PDF file is required." });
      }

      const pdfFile = req.files.pdfFile;

      // Upload the PDF file to Cloudinary
      const pdfResult = await cloudinary.uploader.upload(pdfFile.tempFilePath, {
          folder: "invoicePDF",
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



// router.post("/invoices/upload-pdf", async (req, res) => {
//   try {
//     const { pdfBlob } = req.body;


//     if (!pdfBlob) {
//       return res.status(400).json({ error: "PDF file is required." });
//     }

//     const pdfBuffer = Buffer.from(pdfBlob, 'base64');
//     console.log(pdfBuffer)
//     const pdfResult = await cloudinary.uploader.upload(pdfBuffer, {
//       folder: "invoicePDF",
//       // resource_type: "pdf",
//       allowed_formats: [
//         'pdf',
//       ],
//     });

//     res.status(200).json({ pdfUrl: pdfResult.secure_url });
//   } catch (error) {
//     console.log(error)
//     res.status(400).json({ error: error.message });
//   }
// });



router.get("/invoices", async (req, res) => {
  try {
    const invoices = await AddInvoices.find().populate("customerName")
    .populate({
      path: 'payments',
      model: 'PaymentDetails', 
    });

    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/invoices/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const invoice = await AddInvoices.findById(id).populate("customerName")
    .populate({
      path: 'payments',
      model: 'PaymentDetails', 
    });

    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }

    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get("/invoicesbyCustomerId/:customerid", async (req, res) => {
  const  customerID  = req.params.customerid;

  console.log("customerID", customerID)

  try {
    const invoice = await AddInvoices.find({ customerId: customerID });

    console.log("invoice", invoice)

    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }

    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// router.put("/invoices/:id", async (req, res) => {
//   const { id } = req.params;
//   const updatedData = req.body;

//   try {
//     const existingInvoice = await AddInvoices.findById(id);

//     if (!existingInvoice) {
//       return res.status(404).json({ error: "Invoice not found" });
//     }

//     let updatedSignatureImage = updatedData?.bankDetails?.signatureImage;

//     if (updatedSignatureImage) {
//       const result = await cloudinary.uploader.upload(updatedSignatureImage, {
//         folder: "billing",
//       });
//       updatedSignatureImage = {
//         url: result?.url,
//         public_id: result?.public_id,
//       };
//       updatedData.bankDetails.signatureImage = updatedSignatureImage;
//     }

//     const updatedInvoice = await AddInvoices.findByIdAndUpdate(
//       id,
//       updatedData,
//       {
//         new: true,
//       }
//     );

//     res.status(200).json(updatedInvoice);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// router.delete("/invoices/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedInvoice = await AddInvoices.findByIdAndDelete(id);

//     if (!deletedInvoice) {
//       return res.status(404).json({ error: "Invoice not found" });
//     }

//     res.status(204).send();
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


router.delete('/invoices/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    
    const invoice = await AddInvoices.findById(id);
    if (!invoice) {
      return res.status(404).send('Invoice not found');
    }
   
    const deletedInvoiceData = {
      invoiceNumber: invoice.invoiceNumber,
      customerName: invoice.customerName,
      invoiceDate: invoice.invoiceDate,
      dueDate: invoice.dueDate,
      referenceNo: invoice.referenceNo,
      paymentTerms: invoice.paymentTerms,
      currency: invoice.currency,
      website: invoice.website,
      grandTotal: invoice.grandTotal,
      totalDiscount: invoice.totalDiscount,
      totalTax: invoice.totalTax,
      taxableAmount: invoice.taxableAmount,
      cgstTaxAmount: invoice.cgstTaxAmount,
      sgstTaxAmount: invoice.sgstTaxAmount,
      totalTaxPercentage: invoice.totalTaxPercentage,
      totalDiscountPercentage: invoice.totalDiscountPercentage,
      cgstTaxPercentage: invoice.cgstTaxPercentage,
      sgstTaxPercentage: invoice.sgstTaxPercentage,
      payments: invoice.payments, 
      table: invoice.table, 
      bankDetails: invoice.bankDetails, 
    };
    

    const newDeletedInvoice = new DeletedInvoice(deletedInvoiceData); 
    await newDeletedInvoice.save();
    await AddInvoices.findByIdAndDelete(id);

    res.status(200).send('Invoice deleted successfully');
  } catch (error) {
    console.error('Error deleting invoice:', error);
    res.status(500).send('Internal Server Error');
  }
});



router.get("/newDeletedInvoice/invoices", async (req, res) => {
  try {
    const deletedInvoices = await DeletedInvoice.find().populate("customerName");
    res.status(200).json(deletedInvoices);
  } catch (error) {
    console.error('Error retrieving deleted invoices:', error);
    res.status(500).send('Internal Server Error');
  }
});






// router.delete("/invoices/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedInvoice = await AddInvoices.findByIdAndDelete(id);

//     if (!deletedInvoice) {
//       return res.status(404).json({ error: "Invoice not found" });
//     }

//     res.status(204).send();
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });



router.put("/update-invoice/:invoiceid", async (req, res) => {
  const  invoiceID  = req.params.invoiceid;
  const updatedData = req.body;
  console.log("updated data", updatedData)
  console.log("invoice id", invoiceID)

  try {
    const existingInvoice = await AddInvoices.findById(invoiceID);

    if (!existingInvoice) {
      return res.status(404).json({ error: "Invoice not found" });
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

    const updatedInvoice = await AddInvoices.findByIdAndUpdate(
      invoiceID,
      updatedData.formData,
      {
        new: true,
      }
    );

    console.log("invoice by id", updatedInvoice)

    res.status(200).json(updatedInvoice);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post("/sendInvoice", async (req, res) => {

  const { customerEmail, invoiceData } = req.body;

  const invoicedata = invoiceData;
  const outputPath = `${__dirname}/generated_invoice.pdf`;
  generateInvoicePDF(invoicedata, outputPath);  

  function generateInvoicePDF(invoiceData, outputPath) {
    const pdfDoc = new PDFDocument({ size: 'A4', margin: 50 });
  
    // Pipe the PDF to a writable stream (in this case, a file)
    const pdfStream = fs.createWriteStream(outputPath);
    pdfDoc.pipe(pdfStream);
  
    // Invoice Header
    pdfDoc.fontSize(18).text('Invoice', { align: 'center' });
    pdfDoc.moveDown();
  
    // Invoice Information
    pdfDoc.fontSize(12).text(`Invoice Number: ${invoiceData.invoiceNumber}`);
    pdfDoc.text(`Invoice Date: ${new Date(invoiceData.invoiceDate).toLocaleDateString()}`);
    pdfDoc.text(`Due Date: ${new Date(invoiceData.dueDate).toLocaleDateString()}`);
    pdfDoc.text(`Reference No: ${invoiceData.referenceNo}`);
    pdfDoc.moveDown();
  
    // Customer Information
    pdfDoc.fontSize(14).text('Customer Information:');
    pdfDoc.text(`Name: ${invoiceData.customerName.name}`);
    pdfDoc.text(`Email: ${invoiceData.customerName.email}`);
    pdfDoc.text(`Phone: ${invoiceData.customerName.phone}`);
    pdfDoc.moveDown();
  
    // Invoice Details Table
    pdfDoc.fontSize(14).text('Invoice Details:');
    pdfDoc.moveDown();
  
    // pdfDoc.table({
    //   headers: ['Product', 'Quantity', 'Price', 'Total'],
    //   rows: invoiceData.table.map((item) => [
    //     item.productName,
    //     item.quantity,
    //     item.price,
    //     item.totalAmount,
    //   ]),
    // });
  
    // // Grand Total
    // pdfDoc.fontSize(14).text(`Grand Total: ${invoiceData.grandTotal}`);
    // pdfDoc.moveDown();
  
    // // Additional Information
    // pdfDoc.fontSize(12).text(`Notes: ${invoiceData.bankDetails.notes}`);
    // pdfDoc.text(`Terms and Conditions: ${invoiceData.bankDetails.termsAndConditions}`);
    // pdfDoc.moveDown();
  
    // // Signature Image
    // pdfDoc.image(invoiceData.bankDetails.signatureImage.url, 400, 700, { width: 100, height: 50 });
    const tableHeaders = ['Product', 'Quantity', 'Price', 'Total'];
  const tableRows = invoiceData.table.map((item) => [
    item.productName,
    item.quantity,
    item.price,
    item.totalAmount,
  ]);

  const tableHeight = pdfDoc.currentLineHeight();
  const tableWidth = 500;
  const cellPadding = 10;

  pdfDoc
    .font('Helvetica-Bold')
    .fontSize(12)
    .text('Invoice Details:', { underline: true })
    .moveDown();

  pdfDoc.font('Helvetica').fontSize(10);

  // Draw table headers
  let currentY = pdfDoc.y;
  tableHeaders.forEach((header, i) => {
    pdfDoc
      .text(header, cellPadding + i * (tableWidth / tableHeaders.length), currentY, {
        width: tableWidth / tableHeaders.length,
        align: 'left',
      });
  });

  currentY += tableHeight;

  // Draw table rows
  tableRows.forEach((row) => {
    row.forEach((cell, i) => {
      pdfDoc
        .text(cell.toString(), cellPadding + i * (tableWidth / tableHeaders.length), currentY, {
          width: tableWidth / tableHeaders.length,
          align: 'left',
        });
    });
    currentY += tableHeight;
  });
  
    // End the document
    pdfDoc.end();
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_AUTH_USER,
      pass: process.env.GMAIL_AUTH_PASSWORD,
    },
  });

  // Setup email data
  const mailOptions = {
    from: process.env.GMAIL_AUTH_USER,
    to: "sanjaysanju9448@gmail.com",
    subject: 'Invoice',
    text: 'Please find attached invoice',
    attachments: [
      {
        filename: 'generated_invoice.pdf',
        path: outputPath,
        encoding: 'base64',
      },
    ],
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending invoice');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Invoice sent successfully');
    }
  });

});


module.exports = router;
