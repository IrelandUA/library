const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  author: { type: String, required: true },
  number: { type: String, required: true },
  link: { type: String, required: true },
});

module.exports = mongoose.model("author", authorSchema);
