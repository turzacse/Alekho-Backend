const express = require('express')
const { review, getReview, deleteReview, deleteReviewByEmail, getReviewById, getReveiwByEmail, updateReveiw } = require('../controllers/reviewController')
const { isAuthenticator, authorizeRoles } = require('../middleware/auth')

const router = express.Router()

// if you want to get reviews with admin just add "authorizeRoles('admin')" after "isAuthinticator"

// /api/v1/review
router.post("/review" ,isAuthenticator, review)
router.get("/get-all-Reviews",getReview) 
router.delete("/delete-reveiw/:id",isAuthenticator, authorizeRoles('admin'), deleteReview)
router.delete("/delete-reveiw-by-email", isAuthenticator, authorizeRoles('admin'), deleteReviewByEmail)
router.get("/get-reveiw-by-id/:id",isAuthenticator,authorizeRoles('admin'), getReviewById)
router.get("/get-reveiw-by-email", isAuthenticator, authorizeRoles('admin'), getReveiwByEmail)
router.put("/update-reveiw/:id", isAuthenticator, authorizeRoles('admin'), updateReveiw)

module.exports = router