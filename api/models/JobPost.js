const mongoose = require("mongoose");

const JobPostSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    // officeOrRemote: {
    //   type: Number,
    //   enum: [1, 2], //office or remote
    // },

    salaryRange: {
      type: String,
      required: true,
    },

    companyName: {
      type: String,
      required: true,
    },

    companyType: {
      type: String, //software provider
      required: true,
    },

    noOfEmployee: {
      type: String,
      required: true,
    },

    companyProfileImg: {
      type: String,
      default: "",
    },

    contractType: {
      type: Number,
      enum: [1, 2, 3, 4], //intern ,junior ,mid-senior,senior,manager
    },

    jobType: {
      type: Number,
      enum: [1, 2], //full time,part time
    },

    aboutJob: {
      type: String,
      required: true,
    },

    aboutCompany: {
      type: String,
      required: true,
    },

    aboutRole: {
      type: String,
      required: true,
    },

    requirement1: {
      type: String,
      default: "",
    },

    requirement2: {
      type: String,
      default: "",
    },

    requirement3: {
      type: String,
      default: "",
    },

    requirement4: {
      type: String,
      default: "",
    },

    requirement5: {
      type: String,
      default: "",
    },

    requirement6: {
      type: String,
      default: "",
    },

    requirement7: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobPost", JobPostSchema);
