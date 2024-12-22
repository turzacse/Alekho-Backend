const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path to your User model
const ErrorHandler = require('../utils/errorHandler');

const isAuthenticator = async (req, res, next) => {
  try {
    const { token } = req.cookies || {};
    // console.log(token)        
    if(!token) return res.status(200).json({message : "login first to access to this resource"})
        const decoded = await jwt.verify(token , process.env.JWT_SECRET);
        // console.log(decoded)
        req.user = await User.findById(decoded._id) ;
        // console.log(req.user)
    next()
} catch (error) {
console.log(error)
}
}


 const authorizeRoles = (...roles) =>{
    return (req,res,next)=>{
        if (!roles.includes(req?.user?.role) ){
            return next(new ErrorHandler(`Role : ${req?.user?.role} is not allowed to access this resource` , 403))
        }
        next();
    }
}


module.exports = {isAuthenticator , authorizeRoles} ;