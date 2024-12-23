const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const ImageModel = require('../models/gallery.js');

const dotenv = require("dotenv")
dotenv.config({path : "./config/.env"})
// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer Storage with Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'photo_gallery', // Name of folder in Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png'], // Allowed file types
  },
});

const upload = multer({ storage });



// POST upload gallery
exports.createGallery = async (req, res) => {
    upload.single('image')(req, res, async (err) => {
      if (err) {
        console.error("Multer upload error: ", err);
        return res.status(500).json({ error: 'Error uploading image' });
      }
  
      try {
        const {
          image_name,
          image_category,
          short_description,
          long_description,
          gallery_album,
          info,  // this is an object, no need to parse
        } = req.body;
  
        // Validate required fields
        if (!req.file || !info || !image_name || !image_category || !short_description || !long_description) {
            return res.status(400).json({ error: 'Missing required fields.' });
          }
        // Create a new document
        const newImage = new ImageModel({
          image: req.file.path, // Cloudinary URL
          image_name,
          image_category,
          short_description,
          long_description,
          gallery_album,
          info,  // directly using the info object
        });
  
        const savedImage = await newImage.save();
        res.status(201).json({ message: 'Image uploaded successfully.', data: savedImage });
      } catch (error) {
        console.error("Error saving image: ", error);
        res.status(500).json({ error: 'Something went wrong.' });
      }
    });
  };
      
// get all gallery
exports.getAllGallery = async(req,res)=>{
    try {
        const gallery = await ImageModel.find();
        if(gallery.length === 0){
            return res.status(200).json({ message: 'No images found.' });
        }
        res.status(200).json({ data: gallery });
    } catch (error) {
        console.error('Error fetching gallery:', error);
        res.status(500).json({ error: 'Something went wrong.' });
    }
}

// get single gallery
// Get a single image by image_name
exports.getSingleGallery = async (req, res) => {
    try {
      const image = await ImageModel.findById(req.params.id);
  
      if (!image) {
        return res.status(404).json({ message: 'Image not found.' });
      }
  
      res.status(200).json({
        message: 'Image fetched successfully.',
        gallery: image, 
      });
    } catch (error) {
      console.error('Error fetching image:', error);
      res.status(500).json({ error: 'Something went wrong.' });
    }
  };

// Delete a single image from the gallery by ID and remove from Cloudinary
exports.deleteGallery = async (req, res , file) => {
  try {
    const { id } = req.params;
    const image = await ImageModel.findById(id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found.' });
    }
   
    }
   catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
}

  


