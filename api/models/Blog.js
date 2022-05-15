const mongoose = require('mongoose');


const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    },

    img: {
        type: String,
        default: ""
    },

    timeRead: {
        type: Number,
        required: true
    },

    location: {
        type: String,
        required: true
    },

},{timestamps: true});

//export
module.exports = mongoose.model('Blog', BlogSchema);