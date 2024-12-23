const express = require("express");
const {
  createBlog,
  getAllBlogs,
  getBlogByIdOrSlug,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogControllers");

const router = express.Router();

// Create a new blog
router.post("/create", createBlog);

// Get all blogs
router.get("/get/all", getAllBlogs);

// Get a single blog by ID or slug
router.get("/get/:id", getBlogByIdOrSlug);

// Update a blog by ID
router.put("/update/:id", updateBlog);

// Delete a blog by ID
router.delete("/delete/:id", deleteBlog);

module.exports = router;
