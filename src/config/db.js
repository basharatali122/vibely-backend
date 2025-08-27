const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URL = process.env.MONGODB_URL;
const connectDB = async ()=>{
    await mongoose.connect(MONGODB_URL)
}

connectDB()
.then(()=>{
    console.log("mongoose connection establish..")
})
.catch(()=>{
    console.error("Connection is not established")
})

module.exports=connectDB;