const router = require("express").Router()
const { createUserPost, updateUserPost, getAllUserPosts, getUserPost, deleteUserPost } = require("../controllers/userPostController")
const UserPost = require("../models/UserPost")


//Create UserPost
router.post("/create", createUserPost)

//Update UserPost
router.put("/update/:id", updateUserPost)

//Get UserPost
router.get("/get/:id", getUserPost)

//Get All UserPost
router.get("/getAll", getAllUserPosts)

//Delete UserPost
router.delete("/delete/:id", deleteUserPost)


//export
module.exports = router