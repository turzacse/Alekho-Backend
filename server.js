const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();
const dotenv = require('dotenv');
const connectDb = require('./config/dataBase.js');

// Routes
const reviewRouter = require("./routes/reviewRoute.js");
const authRouter = require("./routes/authRouter.js");
const albumRoutes = require("./routes/albumRouter.js");
const blogRoutes = require("./routes/blogRouter.js");
const galleryRoutes = require("./routes/galleryRoutes.js");
const categoryRoutes = require("./routes/categoryRoutes.js");

app.use(express.json());
app.use(cors());

dotenv.config({ path: './.env' });

connectDb();

app.use("/uploads", express.static("public/uploads"));

app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/albums", albumRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/gallery", galleryRoutes);
app.use("/api/v1/category", categoryRoutes);

app.get('/', (req, res) => {
  res.send('Hello Adnin');
});

// Export the app for Vercel
module.exports = app;