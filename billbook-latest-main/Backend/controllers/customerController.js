const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const AddCustomer = require('../models/addCustomer');
require('dotenv').config();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadImage = async (image) => {
  if (image) {
    const result = await cloudinary.uploader.upload(image, {
      folder: 'billing',
    });
    return {
      url: result?.url,
      public_id: result?.public_id,
    };
  }
  return null;
};


router.post('/customers', async (req, res) => {
  try {
    const formData = req.body;
    const image = await uploadImage(formData?.image);
    formData.image = image;

    const formDatas = formData.phone;
    const customername = formData.name;


    const customerID = `EasyBBCustomID${formDatas}${customername}`;
    formData.customerId = customerID;

    const customer = new AddCustomer(formData)

   
    const savedCustomer = await customer.save();

    res.status(201).json(savedCustomer);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Failed to create customer' });
  }
});


router.get('/customers', async (req, res) => {
  try {
    const customers = await AddCustomer.find().populate("Invoices");
    res.status(200).json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve customers' });
  }
});


// router.get("/customers/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const customers = await AddCustomer.findById(id)
//     // .populate({
//     //   path: 'payments',
//     //   model: 'PaymentDetails', 
//     // });;

//     if (!customers) {
//       return res.status(404).json({ error: "Invoice not found" });
//     }

//     res.status(200).json(invoice);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });


router.get("/customers/:id", async (req, res) => {
  const customerid = req.params.id;

  try {
    const customer = await AddCustomer.findById(customerid).populate({
      path: 'Invoices',
      populate: [{
        path: 'payments',
        model: 'PaymentDetails', 
      }]
    })
    
    // console.log("customer", customer)

    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }

    res.status(200).json(customer); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// router.put('/update-customer/:customerid', async (req, res) => {
//   const { id } = req.params;
//   const updatedData = req.body;

//   try {
//     const existingCustomer = await AddCustomer.findById(id);
//     if (!existingCustomer) {
//       return res.status(404).json({ error: 'Customer not found' });
//     }

//     const updatedImage = await uploadImage(updatedData?.image);
//     updatedData.image = updatedImage;

//     const updatedCustomer = await AddCustomer.findByIdAndUpdate(id, updatedData, {
//       new: true,
//     });

//     res.status(200).json(updatedCustomer);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to update customer' });
//   }
// });


router.put('/update-customer/:customerid', async (req, res) => {
  const customerID = req.params.customerid;
  // const { id } = req.params; 
  const updatedData = req.body;

  try {
    const existingCustomer = await AddCustomer.findById(customerID);
    if (!existingCustomer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    const updatedImage = await uploadImage(updatedData?.image);
    updatedData.image = updatedImage;

    const updatedCustomer = await AddCustomer.findByIdAndUpdate(customerID, updatedData.formData, {
      new: true,
    });

    console.log("invoicebyid", updatedCustomer)

    res.status(200).json(updatedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update customer' });
  }
});


// Delete customer by ID
router.delete('/customers/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCustomer = await AddCustomer.findByIdAndDelete(id);

    if (!deletedCustomer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete customer' });
  }
});

module.exports = router;
