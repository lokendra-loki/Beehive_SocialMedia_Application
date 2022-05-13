const { updateUser, getUser, getAllUsers, deleteUser } = require('../controllers/userController');
const { verifyUser, verifyToken, verifyAdmin } = require('../utils/verifyToken');
// const verifyToken = require('../utils/verifyToken');
const router = require('express').Router();



//Checking Only=============>
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello, you are authenticated")
// })

// router.get("/verifyUser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello, you are authenticated and you can delete update etc your account ")
// })

// router.get("/verifyAdmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello, you are authenticated and you can delete all account You have all control over the system")
// })



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
