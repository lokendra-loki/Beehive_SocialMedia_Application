const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },

    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        maxlength: 20,
        lowercase: true,
    },

    email: {
        type: String,
        required: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 5,
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    profilePicP: {
        type: String,
        default: ""
    },

    coverPic: {
        type: String,
        default: ""
    },

    bio: {
        type: String,
        required: true,
    },

    profession: {
        type: String,
    },

    passOutSchool: {
        type: String,
    },

    passOutHighSchool: {
        type: String,

    },

    currentlyStudingCollegeOrSchool: {
        type: String,
    },

    homeTown: {
        type: String,
    },

    currentlyLiving: {
        type: String,
    },

    pastJobPosition: {
        type: String,
    },

    pastJobAt: {
        type: String,

    },

    currentJobPosition: {
        type: String,
    },

    currentJobAt: {
        type: String,
    },

    followers: {
        type: Array, //array of userId
        default: []
    },

    following: {
        type: Array, //array of userId
        default: []
    },

    relationShipStatus: {
        type: String,
        enum: ["single", "in a relationship", "engaged", "married", "complicated", "in a open relationship"],
    },

    followerCount: {
        type: Number,
        default: 0
    },

    followingCount: {
        type: Number,
        default: 0
    },

    nickName: {
        type: String,
        maxlength: 8,
    },

    likes: {
        type: Array,
        default: []
    },

    dislikes: {
        type: Array,
        default: []
    },

    likeCount: {
        type: Number,
        default: 0
    },

    dislikesCount: {
        type: Number,
        default: 0
    }


}, { timestamps: true });


module.exports = mongoose.model("User", UserSchema);