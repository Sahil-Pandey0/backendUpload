const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connection.on("open", () => {
  console.log("Database Conncted successfully");
});

mongoose.connection.on("end", () => {
  console.log("Database Not Conncted");
});

const startDatabase = async () => {
  try {
    await mongoose.connect(
      //   "mongodb+srv://sahilPandey:sahilPandey@cluster0.suiffqq.mongodb.net/"
      "mongodb://127.0.0.1:27017/test"
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = startDatabase;
