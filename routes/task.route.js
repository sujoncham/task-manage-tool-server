const express = require('express')
const { getTask, completedTask, reviewTask, completedTaskById, deleteTask, updateTaskById, reviewTaskById, postTask } = require('../controllers/task.controller')

const taskRouter = express.Router()

taskRouter.get('/', getTask)
taskRouter.get('/completed', completedTask)
taskRouter.get('/reviewed', reviewTask)
taskRouter.post('/', postTask)
taskRouter.put('/:id', updateTaskById)
taskRouter.put('/completed/:id', completedTaskById)
taskRouter.put('/reviewed/:id', reviewTaskById)
taskRouter.delete('/:id', deleteTask)

module.exports = taskRouter;