const express = require("express");
const router = express.Router();
const { 
  addCategory, 
  getAllCategories, 
  getCategoryById, 
  updateCategory, 
  deleteCategory, 
  deleteAllCategories 
} = require("../controllers/categoryController");

// Route to add a new category
router.post("/create", addCategory);
router.get("/get/all", getAllCategories);
router.get("/get/:id", getCategoryById);
router.put("/update/:id", updateCategory);
router.delete("/delete/:id", deleteCategory);
router.delete("/delete/all", deleteAllCategories);

module.exports = router;
