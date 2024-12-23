const mongoose = require('mongoose');

const connectDb = async()=>{
   try {
const connect = await mongoose.connect('mongodb+srv://alekho:z0Bo3NgCnGakffkR@cluster0.hlnht.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log(`DataBase is successfully connected on ${connect.connection.host}`);
   } catch (error) {
    console.error('Error connecting to the database:', error.message);
   }
}

module.exports = connectDb