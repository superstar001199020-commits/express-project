const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    writer: { type: mongoose.Schema.Types.ObjectId, ref: "Writer", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
