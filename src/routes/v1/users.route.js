const express = require("express");
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user.controller");

const router = express.Router();

router.route("/").post(createUser).get(getUsers);

router.route("/:userId").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
