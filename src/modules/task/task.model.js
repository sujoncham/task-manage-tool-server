const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  note: {
    type: String,
    default: "",
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  date: {
    type: Date,
    default: "",
  },
  status: {
    type: String,
    default: "", //any name
  },
  review: {
    type: String,
    default: "", // assign, inprocess, completed, reviewing, pending, qc done
  },
});

const Task = new mongoose.model("Task", taskSchema);
module.exports = Task;
