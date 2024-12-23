const express = require("express");
const {
  createAlbum,
  getAllAlbums,
  getAlbumById,
  updateAlbum,
  deleteAlbum,
} = require("../controllers/albumController");

const router = express.Router();

// Create a new album
router.post("/create", createAlbum);

// Get all albums
router.get("/get/all", getAllAlbums);

// Get an album by ID
router.get("/get/:id", getAlbumById);

// Update an album
router.put("/update/:id", updateAlbum);

// Delete an album
router.delete("/delete/:id", deleteAlbum);

module.exports = router;
