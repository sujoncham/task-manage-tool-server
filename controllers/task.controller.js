const Task = require("../models/task.model")


exports.getTask = async(req, res, next)=>{
    try {
        const tasks = await Task.find();
        return res.status(200).json({
            status: "success",
            message: "task is created successfully",
            data: tasks,
        })
    } catch (error) {
        return res.status(400).json({
            status: "failed",
            message: "task is not found",
            error: error,
        })
    }
}
exports.completedTask = async(req, res, next)=>{
    try {
        const tasks = await Task.find({status: 'completed'});
        return res.status(200).json({
            status: "success",
            message: "task is created successfully",
            data: tasks,
        })
    } catch (error) {
        return res.status(400).json({
            status: "failed",
            message: "task is not found",
            error: error,
        })
    }
}
exports.reviewTask = async(req, res, next)=>{
    try {
        const tasks = await Task.find({review: 'completed'});
        return res.status(200).json({
            status: "success",
            message: "task is created successfully",
            data: tasks,
        })
    } catch (error) {
        return res.status(400).json({
            status: "failed",
            message: "task is not found",
            error: error,
        })
    }
}

exports.postTask = async(req, res, next)=>{
    try {
        const {title, note, startDate, date, review, status} = req.body;
        const newTask = new Task({
            title,
            note,
            startDate,
            date,
            review, 
            status
        }); 
        await newTask.save();
        return res.status(200).json({
            status: "success",
            message: "task is created successfully",
            data: newTask,
        })
    } catch (error) {
        return res.status(400).json({
            status: "failed",
            message: "task is not found",
            error: error,
        })
    }
}

exports.updateTaskById = async(req, res, next)=>{
    
    try {
        const {title, note, startDate, date, review, status} = req.body;
        const taskId = req.params.id;
        const task = await Task.findByIdAndUpdate(taskId, {
            title, 
            note, 
            startDate, 
            date, 
            review, 
            status
        });

        return res.status(200).json({
            status: "success",
            message: "update by id successfully",
            data: task,
        })
    } catch (error) {
        console.log(error)
    }
};
exports.completedTaskById = async(req, res, next)=>{
    
    try {
        const {status} = req.body;
        const taskId = req.params.id;
        const task = await Task.findByIdAndUpdate(taskId, {
            status
        });

        return res.status(200).json({
            status: "success",
            message: "update by id successfully",
            data: task,
        })
    } catch (error) {
        console.log(error)
    }
};
exports.reviewTaskById = async(req, res, next)=>{
    
    try {
        const {review} = req.body;
        const taskId = req.params.id;
        const task = await Task.findByIdAndUpdate(taskId, {
            review, 
        });

        return res.status(200).json({
            status: "success",
            message: "update by id successfully",
            data: task,
        })
    } catch (error) {
        console.log(error)
    }
};

exports.deleteTask = async(req, res, next)=>{
    
    try {
        const blogId = req.params.id;
         await Task.findByIdAndRemove(blogId);

         return res.status(200).json({
            status: "success",
            message: "deleted blog by id successfully",
        })
    } catch (error) {
        return res.status(400).json({
            status: "failed",
            message: "not deleted blog",
            error: error.message,
        })
    }

};

