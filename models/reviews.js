const mongoose = require('mongoose');

// Define the schema
const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address'],
  },
  phoneNumber: {
    type: Number,
    required: true,
    // match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number'], 
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  feedback: {
    type: String,
    trim: true,
    maxlength: 1000,
  },
}, {
  timestamps: true, 
});

// Create the model
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
