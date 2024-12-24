const Category = require("../models/categoryModel");

// Add a new category
const addCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Check if the category already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ success: false, message: "Category already exists" });
    }

    // Create a new category
    const newCategory = new Category({ name, description });
    await newCategory.save();

    res.status(201).json({ success: true, message: "Category added successfully", data: newCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    if (!categories || categories.length === 0) {
      return res.status(404).json({ success: false, message: "No categories found" });
    }

    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};


// Get a category by ID
const getCategoryById = async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findById(id);
  
      if (!category) {
        return res.status(404).json({ success: false, message: "Category not found" });
      }
  
      res.status(200).json({ success: true, data: category });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  };
  
  // Update a category by ID
  const updateCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
  
      const updatedCategory = await Category.findByIdAndUpdate(
        id,
        { name, description },
        { new: true, runValidators: true }
      );
  
      if (!updatedCategory) {
        return res.status(404).json({ success: false, message: "Category not found" });
      }
  
      res.status(200).json({ success: true, message: "Category updated successfully", data: updatedCategory });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  };
  
  // Delete a category by ID
  const deleteCategory = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedCategory = await Category.findByIdAndDelete(id);
  
      if (!deletedCategory) {
        return res.status(404).json({ success: false, message: "Category not found" });
      }
  
      res.status(200).json({ success: true, message: "Category deleted successfully", data: deletedCategory });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  };
  
  // Delete all categories
  const deleteAllCategories = async (req, res) => {
    try {
      const result = await Category.deleteMany();
  
      if (result.deletedCount === 0) {
        return res.status(404).json({ success: false, message: "No categories to delete" });
      }
  
      res.status(200).json({ success: true, message: "All categories deleted successfully", data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
  };

  module.exports = {
    addCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
    deleteAllCategories,
  };
