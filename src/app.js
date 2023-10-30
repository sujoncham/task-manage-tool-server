const express = require("express");

const cors = require("cors");
const taskRouter = require("./modules/task/task.route");
const routerUser = require("./modules/user/user.route");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/task", taskRouter);
app.use("/api/users", routerUser);

app.get("/", (req, res) => {
  res.send("connected with server");
});

module.exports = app;
