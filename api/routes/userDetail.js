const { createUserDetail } = require('../controllers/userDetailController');
const { getUserDetailLogin } = require('../controllers/userDetailController');
const { verifyUser } = require('../utils/verifyToken');
const router = require('express').Router();


//create UserDetail
router.post("/create", createUserDetail)

//get UserDetail	
router.post("/get", getUserDetailLogin)






// //Update UserDetail
// router.put("/update/:id", verifyUser, updateUser) 

// //Get UserDetail
// router.get("/get/:id", verifyUser, getUser)

// //Get UserDetail
// router.get("/getAll", getAllUsers)

// //Delete UserDetail
// router.delete("/delete/:id", verifyUser, deleteUser)


//export
module.exports = router;
