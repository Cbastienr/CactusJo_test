const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  warranty_year: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
