const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  image: {
    type: String, // Assuming the image is stored as a URL or file path
    required: true,
  },
  image_name: {
    type: String,
    required: true,
  },
  image_category: {
    type: String,
    required: true,
  },
  short_description: {
    type: String,
    required: true,
  },
  long_description: {
    type: String,
    required: true,
  },
  gallery_album: {
    type: String, // Optional field for gallery album
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  info: {
    captured_date: {
      type: Date,
      required: true,
    },
    captured_location: {
      type: String,
      required: true,
    },
    captured_by: {
      type: String,
      required: true,
    },
    captured_device: {
      type: String,
      required: true,
    },
    edited_by: {
      type: String, // Optional, as editing might not always happen
    },
  },
});

const ImageModel = mongoose.model('Photo_gallary', ImageSchema);

module.exports = ImageModel;
