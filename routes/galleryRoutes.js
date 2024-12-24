const express = require("express");
const router = express.Router();
const galleryController = require("../controllers/galleryController"); // Adjust path as necessary

// Routes
router.post("/create", galleryController.createGallery); 
router.get("/get/all", galleryController.getAllGalleries); 
router.get("/get/:id", galleryController.getGalleryById); 
router.put("/update/:id", galleryController.updateGallery); 
router.delete("/delete/:id", galleryController.deleteGallery); 

module.exports = router;
