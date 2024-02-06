const mongoose = require('mongoose');

const addCategorySchema = new mongoose.Schema({
  // categoryId: {
  //   type: String,
  //   unique: true,
  //   required: true
  // },
  name: String,
  slug: String,
  parentCategory:String,
  image: {
    url: String,
    public_id: String,
  },
});

module.exports = mongoose.model('AddCategory', addCategorySchema);
