const router = require("express").Router();
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
} = require("../controllers/blogController");
const { verifyAdmin, verifyUser } = require("../utils/verifyToken");
const Blog = require("../models/Blog");

//Create Blog
router.post("/create", verifyUser, createBlog);

//Update Blog
router.put("/update/:id", verifyUser, updateBlog);

//Get Blog
router.get("/get/:id", getBlog);

//GetAll Blogs
router.get("/getAll", getAllBlogs);

//Delete Blog
router.delete("/delete/:id", verifyAdmin, deleteBlog);

//export
module.exports = router;
