
const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

connectDB()
    .then(() => {
        console.log("mongoose connection establish..")
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch(() => {
        console.error("Connection is not established")
    })
