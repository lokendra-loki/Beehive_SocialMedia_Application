const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
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
        unique: true,
        trim: true,
        lowercase: true,
    }

    , password: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
    },

    age: {
        type: Number,
        required: true,
        min: 16,
    },

    isAdmin: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });


module.exports = mongoose.model("User", UserSchema);