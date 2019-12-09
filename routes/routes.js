const express = require('express')
const Task = express.Router()
const controllers = require('../app/controllers/TaskController')

Task.route('/')
    .post(controllers.add)
    .get(controllers.getAll);

Task.route('/:id')
    .get(controllers.getById)
    .delete(controllers.delete)
    .put(controllers.update)

module.exports = Task