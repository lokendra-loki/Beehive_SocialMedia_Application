const UserDetail = require('../models/userDetail')


//create UserDetail
const createUserDetail = async (req, res, next) => {
    const userDetail = new UserDetail(req.body)
    try {
        const savedUserDetail = await userDetail.save();
        res.status(200).json(savedUserDetail)
    } catch (error) {
        next(error)
    }
}


//Find userID from UserDetail //child bata parents fetch garey ko//userID is child and userDetail is parent
const getUserDetailLogin = async (req, res, next) => {
    const { userID } = req.body
    try {
        const getUserID = await UserDetail.find({ userID })
        return res = res.status(200).json(getUserID)
    } catch (error) {
        next(error)
    }
}


// //Update UserDetail
// const updateUser = async (req, res, next) => {
//     try {
//         const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
//         res.status(200).json(updatedUser)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }


// //Get UserDetail
// const getUser = async (req, res, next) => {
//     try {
//         const user = await User.findById(req.params.id)
//         res.status(200).json(user) + "User found"
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }


// //GetUserDetail
// const getAllUsers = async (req, res, next) => {
//     try {
//         const users = await User.find()
//         res.status(200).json(users) + "Users found"
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }


// //Delete UserDetail
// const deleteUser = async (req, res, next) => {
//     try {
//         const deletedUser = await User.findByIdAndDelete(req.params.id)
//         res.status(200).json(deletedUser) + "User deleted"
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }


//export
module.exports = { createUserDetail, getUserDetailLogin }