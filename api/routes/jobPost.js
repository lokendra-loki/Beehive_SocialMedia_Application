const router = require('express').Router();
const JobPost = require('../models/JobPost');


//Create a job post
router.post("/create", async (req, res) => {
    const newJobPost = new JobPost(req.body)

    try {
        const savedJobPost = await newJobPost.save();
        res.status(200).json(savedJobPost)

    } catch (error) {
        res.status(500).json(error)
    }
})



//update a job post
router.put("/:id", async (req, res) => {
    try {
        const updatedJobPost = await JobPost.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedJobPost)

    } catch (error) {
        res.status(500).json(error)
    }
})




//Delete a job Post
router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedJobPost = await JobPost.findByIdAndDelete(req.params.id)
        res.status(200).json({ msg: "This JobPost has ben deleted ", deletedJobPost })

    } catch (error) {
        res.status(500).json(error)
    }
})




//Get a job post
router.get("/find/:id",async(req,res)=>{
    try {
        const jobPost = await JobPost.findById(req.params.id)
        res.status(200).json(jobPost)
        
    } catch (error) {
        res.status(500).json(error)
        
    }

})


//Get all job posts
router.get("/findAll",async(req,res)=>{
    try {
        const JobPosts= await JobPost.find()
        res.status(200).json(JobPosts)
        
    } catch (error) {
        res.status(500).json(error)
    }
})



//export
module.exports = router;