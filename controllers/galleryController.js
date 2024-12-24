const Gallery = require("../models/galleryModel"); // Adjust path as necessary

// Create a new gallery entry
exports.createGallery = async (req, res) => {
  try {
    const gallery = new Gallery(req.body);
    const savedGallery = await gallery.save();
    res.status(201).json({ success: true, data: savedGallery });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all gallery entries
exports.getAllGalleries = async (req, res) => {
  try {
    const galleries = await Gallery.find();
    res.status(200).json({ success: true, data: galleries });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get a single gallery entry by ID
exports.getGalleryById = async (req, res) => {
  try {
    const { id } = req.params;
    const gallery = await Gallery.findById(id);
    if (!gallery) {
      return res.status(404).json({ success: false, message: "Gallery not found" });
    }
    res.status(200).json({ success: true, data: gallery });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a gallery entry by ID
exports.updateGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGallery = await Gallery.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedGallery) {
      return res.status(404).json({ success: false, message: "Gallery not found" });
    }
    res.status(200).json({ success: true, data: updatedGallery });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a gallery entry by ID
exports.deleteGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGallery = await Gallery.findByIdAndDelete(id);
    if (!deletedGallery) {
      return res.status(404).json({ success: false, message: "Gallery not found" });
    }
    res.status(200).json({ success: true, message: "Gallery deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
