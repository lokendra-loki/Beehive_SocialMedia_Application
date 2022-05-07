const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




//REGISTER
router.post("/register", async (req, res) => {
    try {
        // const { username, email, password, fullName, age } = req.body;
        // const newUser = new User({ username, email, password, fullName, age });

        //generate salt
        const salt = await bcrypt.genSalt(10)

        //hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        //create new user
        const newUser = new User({
            // fullName: req.body.fullName,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            // age: req.body.age,
        })


        //save user
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)

    } catch (error) {
        res.status(500).json(error)
    }
})



//LOGIN
router.post("/login", async (req, res) => {
    try {
        //find user by email
        const user = await User.findOne({ email: req.body.email })

        //if user exists check password
        if (user) {
            const validPassword = await bcrypt.compare(req.body.password, user.password)

            //if password match create token
            if (validPassword) {
                //create token
                const accessToken = jwt.sign({
                    id: user._id,
                    isAdmin: user.isAdmin

                }, process.env.JWT_SECRET, { expiresIn: '3d' })

                const { password, ...others } = user._doc;
                res.status(200).json({others, accessToken})
            }
            else {
                res.status(401).json("Invalid Password")
            }
        }
        else {
            res.status(401).json("User not found")
        }

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router
