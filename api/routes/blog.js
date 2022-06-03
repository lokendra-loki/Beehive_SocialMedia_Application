const router = require("express").Router();
const { verifyAdmin, verifyUser } = require("../utils/verifyToken");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  getAllBlogsOfAUser,
  getAllBlogsOfACategory,
  getAllBlogsTitles,

} = require("../controllers/blogController");

//Create
router.post("/create", verifyUser, createBlog);

//Update
router.put("/update/:id", verifyUser, updateBlog);

//Get
router.get("/get/:id", getBlog);

//GetAll
router.get("/getAll", getAllBlogs);

//Delete
router.delete("/delete/:id", verifyAdmin, deleteBlog);

//Get allBlogs of a user
router.post("/getAllBlogsOfAUser", getAllBlogsOfAUser);

//Get blogs according category
router.get("/getAllBlogsOfACategory/:category",   getAllBlogsOfACategory);

//Get all titles of blogs
router.get("/getAllTitles", getAllBlogsTitles);

//export
module.exports = router;
