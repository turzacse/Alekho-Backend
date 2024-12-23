const Album = require("../models/albumModel");

// Create a new album
exports.createAlbum = async (req, res) => {
  try {
    const { name, event } = req.body;

    if (!name || !event) {
      return res.status(400).json({ message: "Name and event are required." });
    }

    const newAlbum = new Album({ name, event });
    await newAlbum.save();

    res.status(201).json({ message: "Album created successfully!", album: newAlbum });
  } catch (error) {
    res.status(500).json({ message: "Error creating album.", error: error.message });
  }
};

// Get all albums
exports.getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find();
    res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: "Error fetching albums.", error: error.message });
  }
};

// Get an album by ID
exports.getAlbumById = async (req, res) => {
  try {
    const { id } = req.params;
    const album = await Album.findById(id);

    if (!album) {
      return res.status(404).json({ message: "Album not found." });
    }

    res.status(200).json(album);
  } catch (error) {
    res.status(500).json({ message: "Error fetching album.", error: error.message });
  }
};

// Update an album
exports.updateAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, event, shortName } = req.body;

    const updatedAlbum = await Album.findByIdAndUpdate(
      id,
      { name, event, shortName },
      { new: true, runValidators: true }
    );

    if (!updatedAlbum) {
      return res.status(404).json({ message: "Album not found." });
    }

    res.status(200).json({ message: "Album updated successfully!", album: updatedAlbum });
  } catch (error) {
    res.status(500).json({ message: "Error updating album.", error: error.message });
  }
};

// Delete an album
exports.deleteAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAlbum = await Album.findByIdAndDelete(id);

    if (!deletedAlbum) {
      return res.status(404).json({ message: "Album not found." });
    }

    res.status(200).json({ message: "Album deleted successfully!", album: deletedAlbum });
  } catch (error) {
    res.status(500).json({ message: "Error deleting album.", error: error.message });
  }
};
