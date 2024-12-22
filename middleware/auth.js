 const isAuthinticator = async(req,res,next)=>{
    try {
        const {token} = req.cookies ;   
        if(!token) return res.status(200).json({message : "login first to access to this resource"})
            const decoded = await jwt.verify(token , process.env.JWT_SECRET);
            req.user = await User.findById(decoded._id) ;
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


module.exports = {isAuthinticator , authorizeRoles} ;