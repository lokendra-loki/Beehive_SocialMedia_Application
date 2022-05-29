const router = require("express").Router();
const { verifyAdmin, verifyUser } = require("../utils/verifyToken");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  getAllBlogsOfAUser,
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

//export
module.exports = router;
