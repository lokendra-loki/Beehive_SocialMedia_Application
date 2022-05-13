const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { register, login } = require('../controllers/authController');


//REGISTER
router.post("/register", register)

//LOGIN
router.post("/login", login)

//export
module.exports = router


//Social Media auth==========================================================
// Auth 
// router.get('/google', passport.authenticate('google', {
//     scope: ['email', 'profile']
// }));

// // Auth Callback
// router.get('/google/callback',
//     passport.authenticate('google', {
//         successRedirect: 'http://localhost:3000/',
//         failureRedirect: '/login/failed'
//     }));

// // Success 
// router.get('/login/success', (req, res) => {
//     if (req.user)
//         res.status(200).json({
//             message: 'Login Successful',
//             user: req.user,
//             accessToken: req.accessToken,
//             refreshToken: req.refreshToken,
//             success: true,
//         })


// });

// // failure
// router.get('/login/failed', (req, res) => {
//     res.status(401).json({
//         message: 'Login Failed',
//         success: false,
//         user: null
//     })
// })

// //logout
// router.get('/logout', (req, res) => {
//     req.logout();
//     res.redirect("http://localhost:3000/");
// })




