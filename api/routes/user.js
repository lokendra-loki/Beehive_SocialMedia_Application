const { createUser, updateUser, getUser, getAllUsers, deleteUser } = require('../controllers/userController');
const router = require('express').Router();


//Update User
router.put("/update/:id", updateUser)

//Get User
router.get("/get/:id", getUser)

//Get All User
router.get("/getAll", getAllUsers)

//Get User
router.delete("/delete/:id", deleteUser)


//export
module.exports = router;
