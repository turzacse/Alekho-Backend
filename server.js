const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDb = require('./config/dataBase.js');

//routes
const reviewRouter = require("./routes/reviewRoute.js")
const authRouter = require("./routes/authRouter.js")
const galleryRouter = require("./routes/galleryRouter.js")
const albumRoutes = require("./routes/albumRouter.js");
const blogRoutes = require("./routes/blogRouter.js");



app.use(express.json())

dotenv.config({ path: './.env' });

connectDb(); 

app.use("/api/v1/review", reviewRouter)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/gallery", galleryRouter )
app.use("/api/v1/albums", albumRoutes )
app.use("/api/v1/blogs", blogRoutes )


app.get('/', (req, res) => {
  res.send('Hello brother');
});


app.listen(process.env.PORT, (error) => {
  error ? console.log(error) : console.log(`Server is Running on Port ${process.env.PORT}`);
});