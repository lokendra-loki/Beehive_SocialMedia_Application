const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true,
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
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    phoneNumber:{
        type: String,
       default: null
    }

}, { timestamps: true });


module.exports = mongoose.model("User", UserSchema);