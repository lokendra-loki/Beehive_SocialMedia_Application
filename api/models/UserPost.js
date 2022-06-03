const mongoose = require("mongoose");

const UserPostSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    profession: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },

    postImg: {
      type: String,
      default: "",
    },

    likes: {
      type: Array,
      default: [],
    },

    disLikes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

//export
module.exports = mongoose.model("UserPost", UserPostSchema);
