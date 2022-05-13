const mongoose = require('mongoose');


const UserPostSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    profession: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    },

    postImg: {
        type: String,
        default: ""
    },

    likes: {
        type: Array,
        default: []
    },

    disLike:{
        type: Array,
        default: []
    },

    likeCount:{
        type: Number,
        default: 0
    },

    disLikeCount:{
        type: Number,
        default: 0
    }
    

}, { timestamps: true })


//export
module.exports = mongoose.model('UserPost', UserPostSchema);