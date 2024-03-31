const User = require("../model/user.model");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUser = async (req, res) => {
  try {
    const user = await User.find({});

    return res.status(200).json({
      success: true,
      message: "User Find Successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      message: "User Updated Successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
};
