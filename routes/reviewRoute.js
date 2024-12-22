const express = require('express')
const { review, getReview } = require('../controllers/reviewController')
const { isAuthinticator, authorizeRoles } = require('../middleware/auth')
const router = express.Router()

// if you want to get reviews with admin just add "authorizeRoles('admin')" after "isAuthinticator"

router.post("/review" ,review)
router.get("/get-all-Reviews" ,getReview) 



module.exports = router