const express = require("express");
const {
  getTask,
  completedTask,
  reviewTask,
  completedTaskById,
  deleteTask,
  updateTaskById,
  reviewTaskById,
  postTask,
  submittedTaskById,
  assignTask,
  assignTaskById,
  getTaskById,
} = require("./task.controller");

const taskRouter = express.Router();

taskRouter.get("/", getTask);
taskRouter.post("/", postTask);
taskRouter.get("/assign", assignTask);
taskRouter.get("/completed", completedTask);
taskRouter.get("/reviewed", reviewTask);
taskRouter.get("/:id", getTaskById);
taskRouter.put("/assign/:id", assignTaskById);
taskRouter.put("/submitted/:id", submittedTaskById);
taskRouter.put("/reviewed/:id", reviewTaskById);
taskRouter.put("/completed/:id", completedTaskById);
taskRouter.put("/:id", updateTaskById);
taskRouter.delete("/:id", deleteTask);

module.exports = taskRouter;
