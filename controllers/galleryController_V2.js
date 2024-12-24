const Gallery = require("../models/galleryModel_V2");

// Create a new gallery entry
exports.createGallery = async (req, res) => {
  try {
    const { image_name, image_category, short_description, long_description, gallery_album, info } = req.body;

    // Validate file upload
    if (!req.file) {
      return res.status(400).json({ error: "Image file is required." });
    }

    // Construct the accessible URL for the uploaded image
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    const newGallery = new Gallery({
      image: imageUrl, // Save the full URL to the database
      image_name,
      image_category,
      short_description,
      long_description,
      gallery_album,
      info,
    });

    await newGallery.save();
    res.status(201).json({ success: true, data: newGallery });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all gallery entries
exports.getAllGallery = async (req, res) => {
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
    const gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res.status(404).json({ success: false, error: "Gallery not found" });
    }
    res.status(200).json({ success: true, data: gallery });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a gallery entry by ID
exports.deleteGalleryById = async (req, res) => {
  try {
    const gallery = await Gallery.findByIdAndDelete(req.params.id);
    if (!gallery) {
      return res.status(404).json({ success: false, error: "Gallery not found" });
    }
    res.status(200).json({ success: true, message: "Gallery deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
