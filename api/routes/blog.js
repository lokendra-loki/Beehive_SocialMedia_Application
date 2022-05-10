const router = require("express").Router();
const Blog = require("../models/Blog");


//Create a blog
router.post("/create", async (req, res) => {
    const newBlog = new Blog(req.body)
    try {
        const savedBlog = await newBlog.save();
        res.status(200).json(savedBlog)

    } catch (error) {
        res.status(500).json(error)
    }
})



//Update a blog
router.put("/update/:id", async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedBlog)

    } catch (error) {
        res.status(500).json(error)
    }
})



//Delete a blog
router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedBlog)
    }
    catch (error) {
        res.status(500).json(error)
    }
})




//Get a blog
router.get("/get/:id", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        res.status(200).json(blog)
    }

    catch (error) {
        res.status(500).json(error)
    }

})


//Get all blogs
router.get("/getAll", async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.status(200).json(blogs)
    }catch (error) {
        res.status(500).json(error)
    }
})








//export
module.exports = router;