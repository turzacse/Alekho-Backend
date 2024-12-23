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

//delete a reviews
exports.deleteReview = async(req,res)=>{
  try {
    await Review.findByIdAndDelete(req.params.id)
    res.status(200).json("review deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({message : "error in deleting review"})
  }
}
//delete by email
exports.deleteReviewByEmail = async(req,res)=>{
  try {
    let reveiw =await Review.find({email : req.body.email}).deleteMany();
    res.status(200).json("review deleted successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({message : "error in deleting review"})
  }
}
//get review by id
exports.getReviewById = async(req,res)=>{
  try {
    const review = await Review.findById(req.params.id);
    res.status(200).json(review);
  } catch (error) {
    console.log();
    res.status(500).json({message : "error getting review by id"})
  }
}

//get reveiw by email
exports.getReveiwByEmail = async(req,res)=>{
  try {
    const review = await Review.find({email : req.body.email})
    res.status(200).json(review)
  } catch (error) {
    console.log();
    res.status(500).json({message : "error getting reveiw by email"})
  }
}

exports.updateReveiw = async(req,res)=>{
  try {
    const reveiw = await Review.findById(req.params.id)
    const { name, email, phoneNumber, rating, feedback } = req.body;

    reveiw.name = name;
    reveiw.email = email;
    reveiw.phoneNumber = phoneNumber;
    reveiw.rating = rating;
    reveiw.feedback = feedback;

    const updatedReveiw = await reveiw.save();
    res.status(200).json(updatedReveiw);
  } catch (error) {
    console.log();
    res.status(500).json({message : "error update reveiw"})
  }
}

