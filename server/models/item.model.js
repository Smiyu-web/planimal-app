const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  retailPrice: {
    type: Number,
    required: true,
  },
  wholesalePrice: {
    type: Number,
  },
  qty: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
  },
  image: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Item", itemSchema);
