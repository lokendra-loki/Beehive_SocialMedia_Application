const router = require("express").Router();
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog } = require("../controllers/blogController");
const Blog = require("../models/Blog");


//Create Blog
router.post("/create", createBlog)

//Update Blog
router.put("/update/:id", updateBlog)

//Get Blog
router.get("/get/:id", getBlog)

//GetAll Blogs
router.get("/getAll", getAllBlogs)

//Delete Blog
router.delete("/delete/:id",  deleteBlog)


//export
module.exports = router;