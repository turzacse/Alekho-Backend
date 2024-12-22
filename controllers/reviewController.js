const Review = require("../models/reviews");

//create a review
 exports.review = async(req,res)=>{
    try {
        const { name, email, phoneNumber, rating, feedback } = req.body;

        const review = new Review({
          name,
          email,
          phoneNumber,
          rating,
          feedback,
        });
          const savedReview = await review.save();
          res.status(200).json(savedReview);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "error in review "})
    }
}
//get all reviews
exports.getReview = async(req,res)=>{
  try {
    const reviews = await Review.find({});
    res.status(200).json(reviews);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "error in getting review "})
  }
}



