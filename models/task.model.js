const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    note: {
        type: String,
        required: true,
    }, 
    startDate: {
        type: Date,
        default: Date.now,
    }, 
    date: {
        type: Date,
        default: '',
    },
    status: {
        type: String,
        default: ''
    },
    review: {
        type: String,
        default: '',
    }
})

const Task = new mongoose.model("Task", taskSchema)
module.exports = Task;