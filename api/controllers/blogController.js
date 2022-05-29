const Blog = require("../models/Blog");

//Create
const createBlog = async (req, res, next) => {
  const newBlog = new Blog(req.body);
  try {
    const savedBlog = await newBlog.save();
    res.status(200).json(savedBlog);
  } catch (error) {
    next(error);
  }
};

//Update
const updateBlog = async (req, res, next) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedBlog);
  } catch (error) {
    next(error);
  }
};

//Get
const getBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (error) {
    next(error);
  }
};

//GetAll
const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    next(error);
  }
};

//Delete
const deleteBlog = async (req, res, next) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedBlog);
  } catch (error) {
    next(error);
  }
};

//Get allBlogs of a user (by userID) element
const getAllBlogsOfAUser = async (req, res, next) => {
  const { authorID } = req.body;
  try {
    userKoAllPosts = await Blog.find({ authorID });
    res.status(200).json(userKoAllPosts);
  } catch (error) {
    next(error);
  }
};

//export
module.exports = {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  getAllBlogsOfAUser,
};
