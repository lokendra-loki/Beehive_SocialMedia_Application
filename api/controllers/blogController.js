const Blog = require('../models/Blog');


//Create Blog
const createBlog = async (req, res, next) => {
    const newBlog = new Blog(req.body)
    try {
        const savedBlog = await newBlog.save();
        res.status(200).json(savedBlog)
    } catch (error) {
        res.status(500).json(error)
    }
}


//Update Blog
const updateBlog = async (req, res, next) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedBlog)
    } catch (error) {
        res.status(500).json(error)
    }
}


//Get Blog
const getBlog = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id)
        res.status(200).json(blog)
    }
    catch (error) {
        res.status(500).json(error)
    }
}


//GetAll Blogs
const getAllBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.find()
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json(error)
    }
}


//Delete Blog
const deleteBlog = async (req, res, next) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedBlog)
    }
    catch (error) {
        res.status(500).json(error)
    }
}


//export 
module.exports = { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog };

