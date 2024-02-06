const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const AddCategory = require('../models/addCategory');
require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// // Function to handle image upload
// const uploadImage = async (image) => {
//   if (image) {
//     const result = await cloudinary.uploader.upload(image, {
//       folder: 'billing', 
//     });
//     return {
//       url: result?.url,
//       public_id: result?.public_id,
//     };
//   }
//   return null;
// };

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
router.post('/categories', async (req, res) => {
  try {
    const formData = req.body;

    let image = formData?.image;

    if (image) {
      const result = await cloudinary.uploader.upload(image, {
        folder: 'billing',
      });
      image = {
        url: result?.url,
        public_id: result?.public_id,
      };
      formData.image = image;
    }

    const category = new AddCategory(formData);

    const savedCategory = await category.save();

    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await AddCategory.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve categories' });
  }
});

// Update category by ID
router.put('/categories/:id', async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const existingCategory = await AddCategory.findById(id);
    if (!existingCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const updatedImage = await uploadImage(updatedData?.image);
    updatedData.image = updatedImage;

    const updatedCategory = await AddCategory.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update category' });
  }
});

// Delete category by ID
router.delete('/categories/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCategory = await AddCategory.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete category' });
  }
});

module.exports = router;
