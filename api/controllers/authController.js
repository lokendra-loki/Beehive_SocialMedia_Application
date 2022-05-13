const User = require('../models/User');
const bcrypt = require('bcrypt');


//Register
const register = async (req, res, next) => {
    try {
        //hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        //create new user
        const newUser = new User({
            // fullName: req.body.fullName,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })
        //save user
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)

    } catch (error) {
        next(error)
    }
}



//Login
const login = async (req, res, next) => {
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
                res.status(200).json({ others, accessToken })
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
}


//export
module.exports = { register, login }