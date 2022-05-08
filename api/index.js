const cookieSession = require('cookie-session')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const authRoute = require('./routes/auth')
const passport = require('passport')
const cors = require('cors')
const passportSetup = require('./passport')


//MongoDB connection
mongoose.connect(process.env.MONGODB_URL)//its a promise so we can use .then and .catch
    .then(() => console.log("MongoDB connection successful"))
    .catch((err) => console.log(err))


//Middleware
app.use(express.json())
app.use("/api/auth", authRoute)


//Passport middleware
// app.use(cookieSession({
//     name: 'session',
//     keys: [process.env.COOKIE_KEY],
//     maxAge: 24 * 60 * 60 * 100,//1 day 
// }
// ))
// app.use(passport.initialize())
// app.use(passport.session())

// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         methods: "GET, POST, PUT ,DELETE",
//         credentials: true
//     })
// )






//post listening
app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port 5000");

})