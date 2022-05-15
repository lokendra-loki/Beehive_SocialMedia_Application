const cookieSession = require('cookie-session') // used to create a session
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const authRoute = require('./routes/auth')
const jobPostRoute = require('./routes/jobPost')
const blogRoute = require('./routes/blog')
const userPostRoute = require('./routes/userPost')
const userDetailRoute = require('./routes/userDetail')
const userRoute = require('./routes/user')
const passport = require('passport')
const cors = require('cors')
const passportSetup = require('./passport')
const cookieParser = require('cookie-parser')



//json parser
app.use(express.json())


//MongoDB connection
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB connection successful"))
    .catch((err) => console.log({ msg: "MongoDB connection error", err }))


//Middleware
app.use(cookieParser())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/jobPosts", jobPostRoute)
app.use("/api/userPosts", userPostRoute)
app.use("/api/userDetails", userDetailRoute)
app.use("/api/blogs", blogRoute)


//Error handling middleware
app.use((error, req, res, next) => {
    const errorStatus = error.status || 500
    const errorMessage = error.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: error.stack
    })
})



//Passport middleware
// app.use(cookieSession({
//     name: 'session',
//     keys: ["loki"],
//     maxAge: 24 * 60 * 60 * 100,  //1 day 
// }
// ))
// app.use(passport.initialize())
// app.use(passport.session())
// app.use(
//     cors({
//         origin: "http://localhost:3000", //client url
//         methods: "GET, POST, PUT ,DELETE",
//         credentials: true,
//     })
// )


//Post listening
app.listen(process.env.PORT, () => {
    console.log("Backend Server is running on port " + process.env.PORT);

})