// const multer = require("multer");
// const path = require("path");

// // Set storage destination and filename for uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "../public/uploads"); // Save files in the "public/uploads" folder
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = `${Date.now()}-${file.originalname}`;
//     cb(null, uniqueName); // Generate a unique name for each file
//   },
// });

// const upload = multer({ storage });
// module.exports = upload;


// its working before 

// const multer = require("multer");
// const path = require("path");

// // Configure storage for Multer
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Save files in the 'public/uploads' directory
//     cb(null, path.join(__dirname, "../public/uploads"));
//   },
//   filename: function (req, file, cb) {
//     // Set a unique filename for the uploaded file
//     const uniqueSuffix = Date.now() + "-" + file.originalname;
//     cb(null, uniqueSuffix);
//   },
// });

// // Initialize Multer with the configured storage
// const upload = multer({ storage: storage });

// module.exports = upload;




const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "temp/"); // Temporary folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
module.exports = upload;
