const {
  getAllTask,
  addTask,
  deleteTask,
  updateTask,
} = require('../controllers/task.controllers');
const express = require('express');
const router = express.Router();

router.route('/').get(getAllTask).post(addTask);

router.route('/:id').delete(deleteTask).put(updateTask);

module.exports = router;
