const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const authRoute = require('./routes/auth')


//MongoDB connection
mongoose.connect(process.env.MONGODB_URL)//its a promise so we can use .then and .catch
    .then(() => console.log("MongoDB connection successful"))
    .catch((err) => console.log(err))


//Middleware
app.use(express.json())
app.use("/api/auth", authRoute)


//post listening
app.listen(process.env.PORT || 6000, () => {
    console.log("Server is running on port 5000");

})