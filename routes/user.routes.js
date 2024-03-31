const express = require("express");
const {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
} = require("../controller/user.controller");

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getAllUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
