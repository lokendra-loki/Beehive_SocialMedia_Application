const router = require("express").Router();
const {
  createUserDetail,
  updateUserDetail,
  getUserDetail,
  getAllUserDetail,
  deleteUserDetail,
  getUserDetailByUserID,
} = require("../controllers/userDetailController");

//Create
router.post("/create", createUserDetail);

//Update
router.put("/update/:id", updateUserDetail);

//Get
router.get("/get/:id", getUserDetail);

//Get all
router.get("/getAll", getAllUserDetail);

//Delete
router.delete("/delete/:id", deleteUserDetail);

//Find userDetail by element {userID}
router.post("/getByUserID", getUserDetailByUserID);

//export
module.exports = router;
