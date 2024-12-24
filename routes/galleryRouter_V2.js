const express = require("express");
const router = express.Router();
const upload = require("../utils/multerConfig"); // Import multer configuration
const galleryController = require("../controllers/galleryController_V2");

// Routes
router.post("/image", upload.single("image"), galleryController.createGallery); // Create a new gallery
router.get("/", galleryController.getAllGallery); // Get all galleries
router.get("/:id", galleryController.getGalleryById); // Get gallery by ID
router.delete("/:id", galleryController.deleteGalleryById); // Delete gallery by ID

module.exports = router;
