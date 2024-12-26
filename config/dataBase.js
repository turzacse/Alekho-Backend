const mongoose = require('mongoose');

const connectDb = async()=>{
   try {
// const connect = await mongoose.connect('mongodb+srv://alekho:z0Bo3NgCnGakffkR@cluster0.hlnht.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
const connect = await mongoose.connect('mongodb+srv://ALEKHO1:kI5TEh8smB2yWZ9y@cluster0.fvl5f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log(`DataBase is successfully connected on ${connect.connection.host}`);
   } catch (error) {
    console.error('Error connecting to the database:', error.message);
   }
}

module.exports = connectDb