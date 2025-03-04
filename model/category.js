// models/product.js
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryname: { type: String, required: true },
  isActive: { type: Boolean, required: true, default: true },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
