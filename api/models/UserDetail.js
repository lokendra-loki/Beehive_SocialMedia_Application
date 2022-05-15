const mongoose = require("mongoose");


const UserDetailSchema = new mongoose.Schema({
    userID:{
        type:String,
        required:true

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
        default: ""
        
        
    },

    profession: {
        type: String,
        default: ""
        
    },

    school: {
        type: String,
        default: ""
    },

  highSchool: {
        type: String,
        default: ""
    },

    currentlyStudying: {
        type: String,
        default: ""
    },

    homeTown: {
        type: String,
    },

    currentlyLiving: {
        type: String,
        default: ""
    },

    pastJobPosition: {
        type: String,
        default: ""
    },

    pastJobAt: {
        type: String,
        default: ""
    },

    currentJobPosition: {
        type: String,
    },

    currentJobAt: {
        type: String,
        default: ""
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
        default: ""
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


module.exports = mongoose.model("UserDetail", UserDetailSchema);