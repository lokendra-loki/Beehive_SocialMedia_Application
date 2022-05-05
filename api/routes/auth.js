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
            fullName: req.body.fullName,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            age: req.body.age,
        })


        //save user
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router
