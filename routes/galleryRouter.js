const express = require("express")
const { createGallery, getAllGallery, getSingleGallery, deleteGallery } = require("../controllers/galleryController")
const { isAuthenticator, authorizeRoles } = require("../middleware/auth")
const router = express.Router()

router.post("/create-gallery",isAuthenticator, authorizeRoles('admin') ,createGallery)
router.get("/get-all-gallerys",isAuthenticator, authorizeRoles('admin') ,getAllGallery)
router.get("/get-gallery-by-id/:id",isAuthenticator, authorizeRoles('admin') ,getSingleGallery)
router.delete("/delete-gallery/:id",isAuthenticator, authorizeRoles('admin') ,deleteGallery)
module.exports = router