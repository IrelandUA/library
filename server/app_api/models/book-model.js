const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  title: { type: String, default: "" },
  image: { type: String, default: "" },
  author: [{ type: mongoose.Schema.Types.ObjectId, ref: "author" }],
  read_now_url: { type: String, default: "" },
  more_info_url: { type: String, default: "" },
});

module.exports = mongoose.model("book", bookSchema);
