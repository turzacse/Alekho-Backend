const User = require("../models/user.js");
const { sendToken } = require("../utils/sendToken.js");


exports.registerUser = async (req, res, next) => {
    try {
      const { name, email, phoneNumber, password } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "Email already registered",
        });
      }
  
      const user = await User.create({
        name,
        email,
        phoneNumber,
        password,
      });
  

      await user.getResetPasswordToken();
      await user.save({ validateBeforeSave: false });
  
     res.status(200).json({
        success: true,
        message: "User registered successfully",
        user,
    });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error registering user",
        error: error.message,
      });
    }
  };
  

exports.loginUser = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return res.status(401).send({
          success: false,
          message: "Invalid email or password",
        });
      }
      // compare password body with password in database
      try {
        const match = await user.comparePassword(password);
  
        if (!match) {
          return res.status(400).json({
            success: false,
            message: "Invalid email or password",
          });
        }
        
      } catch (error) {
        console.error("Error comparing passwords:", error);
        return res.status(500).json({
          success: false,
          message: "Error comparing passwords",
        });
      }
     
        sendToken(user, 200, res);
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "error login user",
        error: error.message,
      });
    }
  };
  