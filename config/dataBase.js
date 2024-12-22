const mongoose = require('mongoose');

const connectDb = async()=>{
   try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`DataBase is successfully connected on ${connect.connection.host}`);
   } catch (error) {
    console.error('Error connecting to the database:', error.message);
   }
}

module.exports = connectDb