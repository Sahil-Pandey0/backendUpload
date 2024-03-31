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
      "mongodb+srv://sahilPandey:sahilPandey@cluster0.suiffqq.mongodb.net/"
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = startDatabase;
