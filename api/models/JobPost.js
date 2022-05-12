const mongoose = require("mongoose")

const JobPostSchema = new mongoose.Schema({
    position: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100,
    },

    salaryRange: {
        type: String,
        required: true,
    },

    location: {
        type: String,
    },

    companyName: {
        type: String,
        required: true,
        
    },

    companyType: {
        type: String, //software provider
    },

    noOfEmployee: {
        type: String,
    },

    companyProfileImg: {
        type: String,
        default:""
    },

    contractType: {
        type: Number,
        enum: [1, 2, 3, 4], //intern ,junior ,mid-senior,senior,manager
        required: true,
    },
    officeOrRemote:{
        type:Number,
        enum:[1,2],   //office or remote
        required: true
    },

    jobType: {
        type: Number,
        enum: [1, 2],  //full time,part time
        required: true,
    },

    aboutTheJob: {
        type: String,
        required: true,
    },

    aboutTheCompany: {
        type: String,
        required: true,
    },

    aboutTheRole: {
        type: String,
        required: true,
    },

    requirement1: {
        type: String,
        required: true,
    },

    requirement2: {
        type: String,
        required: true,
    },

    requirement3: {
        type: String,
        required: true,
    },

    requirement4: {
        type: String,
        required: true,
    },

    requirement5: {
        type: String,
        required: true,
    },

    requirement6: {
        type: String,
        required: true,
    },

    requirement7: {
        type: String,
        required: true,
    },

    

}, { timestamps: true })

module.exports = mongoose.model("JobPost", JobPostSchema)