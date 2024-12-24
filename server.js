const express = require('express');
const app = express();
require("dotenv").config();
const dotenv = require('dotenv');
const connectDb = require('./config/dataBase.js');

//routes
const reviewRouter = require("./routes/reviewRoute.js")
const authRouter = require("./routes/authRouter.js")
const albumRoutes = require("./routes/albumRouter.js");
const blogRoutes = require("./routes/blogRouter.js");
const galleryRoutes = require("./routes/galleryRoutes.js");



app.use(express.json())

dotenv.config({ path: './.env' });

connectDb(); 

app.use("/uploads", express.static("public/uploads"));

app.use("/api/v1/review", reviewRouter)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/albums", albumRoutes )
app.use("/api/v1/blogs", blogRoutes )
app.use("/api/v1/gallery", galleryRoutes )


app.get('/', (req, res) => {
  res.send('Hello Adnin');
});


app.listen(process.env.PORT, (error) => {
  error ? console.log(error) : console.log(`Server is Running on Port ${process.env.PORT}`);
});