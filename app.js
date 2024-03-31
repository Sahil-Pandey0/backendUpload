const express = require("express");
const userRouter = require("./routes/user.routes");

const app = express();

app.use(express.json());

app.use("/api/v1", userRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

module.exports = app;
