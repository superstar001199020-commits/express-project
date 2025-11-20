const mongoose = require("mongoose");

const writerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    bio: {
      type: String,
      default: ""
    }
  },
  { timestamps: true } // adds createdAt and updatedAt
);

module.exports = mongoose.model("Writer", writerSchema);
