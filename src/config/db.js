const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URL = process.env.MONGODB_URL;
const connectDB = async ()=>{
    await mongoose.connect(MONGODB_URL)
}



module.exports=connectDB;