const router = require("express").Router();
const {
  createUserPost,
  updateUserPost,
  getAllUserPosts,
  getUserPost,
  deleteUserPost,
  getAllPostsOfAUser,
} = require("../controllers/userPostController");
const UserPost = require("../models/UserPost");
const { verifyUser, verifyToken } = require("../utils/verifyToken");

//Create UserPost
router.post("/create", verifyToken, createUserPost);

//Update UserPost
router.put("/update/:id", verifyUser, updateUserPost);

//Get UserPost
router.get("/get/:id", getUserPost);

//Get All UserPost
router.get("/getAll", getAllUserPosts);

//Delete UserPost
router.delete("/delete/:id", verifyUser, deleteUserPost);

//Get all Posts of a user
router.post("/getAllPostsOfAUser", getAllPostsOfAUser);

//export
module.exports = router;
