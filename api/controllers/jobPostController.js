const JobPost = require('../models/JobPost');


//Create JopPost
const createJobPost = async (req, res, next) => {
    const newJobPost = new JobPost(req.body)
    try {
        const savedJobPost = await newJobPost.save();
        res.status(200).json(savedJobPost)
    } catch (error) {
        next(error)
    }
}


//Update JopPost
const updateJobPost = async (req, res,next) => {
    try {
        const updatedJobPost = await JobPost.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedJobPost)
    } catch (error) {
        next(error)
    }
}


//Get JopPost
const getJobPost = async (req, res,next) => {
    try {
        const jobPost = await JobPost.findById(req.params.id)
        res.status(200).json(jobPost)
    } catch (error) {
        next(error)
    }
}


//GetAll JopPost
const GetAllJobPosts = async (req, res, next) => {
    try {
        const JobPosts = await JobPost.find()
        res.status(200).json(JobPosts)
    } catch (error) {
        next(error)
    }
}


//Delete JopPost
const deleteJobPost = async (req, res,next) => {
    try {
        const deletedJobPost = await JobPost.findByIdAndDelete(req.params.id)
        res.status(200).json({ msg: "This JobPost has ben deleted ", deletedJobPost })
    } catch (error) {
        next(error)
    }
}


//export
module.exports = { createJobPost, updateJobPost, getJobPost, GetAllJobPosts, deleteJobPost }