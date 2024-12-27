const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String, // You can use ObjectId if you have an Author/User model
      required: true,
    },
    shortDescription: {
      type: String,
      trim: true,
    },
    hastags: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      trim: true,
    },
    slug: {
      type: String,
      // unique: true,
    },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
    publishedAt: {
      type: Date,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        user: { type: String }, // You can use ObjectId if you have a User model
        text: { type: String },
        commentedAt: { type: Date, default: Date.now },
      },
    ],
    thumbnail: {
      type: String,
    },
    metaTitle: {
      type: String,
    },
    metaDescription: {
      type: String,
    },
  },
  { timestamps: true }
);

// Middleware to generate a slug automatically from the title
blogSchema.pre("save", function (next) {
  if (this.title) {
    this.slug = this.title
      .toLowerCase()
      .split(" ")
      .join("-")
      .replace(/[^a-z0-9-]/g, ""); // Generate a slug-friendly URL
  }
  next();
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
