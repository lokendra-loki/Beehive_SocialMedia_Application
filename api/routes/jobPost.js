const router = require('express').Router();
const JobPost = require('../models/JobPost');
const bcrypt = require('bcrypt');
const { createJobPost, updateJobPost, deleteJobPost, getJobPost, GetAllJobPosts } = require('../controllers/jobPostController');


//Create JobPost
router.post("/create", createJobPost)

//Update JobPost
router.put("/update/:id", updateJobPost)

//Get JobPost
router.get("/get/:id", getJobPost)

//GetAll JobPost
router.get("/getAll", GetAllJobPosts)

//Delete JobPost
router.delete("/delete/:id", deleteJobPost)


//export
module.exports = router;