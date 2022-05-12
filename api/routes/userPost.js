const router = require("express").Router()
const UserPost = require("../models/UserPost")



//Create a user post
router.post("/create", async (req, res) => {
    const newUserPost = new UserPost(req.body)
    try {
        const savedUserPost = await newUserPost.save();
        res.status(200).json(savedUserPost)
    } catch (error) {
        res.status(500).json(error)
    }
})









//export
module.exports = router