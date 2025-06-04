const mongoose = require("mongoose");

const booksLengthSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("books-length", booksLengthSchema);
