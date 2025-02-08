const express = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/UserController");

const router = express.Router();

router.route("/GetAll").get(getAllUsers)
router.route("/AddUser").post(createUser);
router.route("/:id").get(getUserById);
router.route("/:id/DeleteUser").delete(deleteUser);
router.route("/:id/UpdateUser").put(updateUser);

module.exports = router;
