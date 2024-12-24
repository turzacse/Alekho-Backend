const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    image: {
      type: String, // URL of the uploaded image
      required: true,
    },
    image_name: {
      type: String,
      required: true,
      trim: true,
    },
    image_category: {
      type: String,
      required: true,
      trim: true,
    },
    short_description: {
      type: String,
      required: true,
      trim: true,
    },
    long_description: {
      type: String,
      trim: true,
    },
    gallery_album: {
      type: String,
      default: null, 
    },
    info: {
      captured_date: { type: Date, required: true },
      captured_location: { type: String, required: true },
      captured_by: { type: String, required: true },
      captured_device: { type: String, required: true },
      edited_by: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const Gallery = mongoose.model("Gallery", gallerySchema);

module.exports = Gallery;
