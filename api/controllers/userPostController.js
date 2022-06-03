const UserPost = require("../models/UserPost");

// Create UserPost
const createUserPost = async (req, res, next) => {
  const newUserPost = new UserPost(req.body);
  try {
    const savedUserPost = await newUserPost.save();
    res.status(200).json(savedUserPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update UserPost
const updateUserPost = async (req, res, next) => {
  try {
    const updatedUserPost = await UserPost.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUserPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get UserPost
const getUserPost = async (req, res, next) => {
  try {
    const post = await UserPost.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get All UserPost
const getAllUserPosts = async (req, res, next) => {
  try {
    const posts = await UserPost.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete UserPost
const deleteUserPost = async (req, res, next) => {
  try {
    const deletedUserPost = await UserPost.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUserPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get all userPosts of a user (by userID) element
const getAllPostsOfAUser = async (req, res, next) => {
  const { userID } = req.body;
  try {
    userKoAllPosts = await UserPost.find({ userID });
    res.status(200).json(userKoAllPosts);
  } catch (error) {
    next(error);
  }
};

//export
module.exports = {
  createUserPost,
  updateUserPost,
  getUserPost,
  getAllUserPosts,
  deleteUserPost,
  getAllPostsOfAUser,
};
