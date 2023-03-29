const Task = require('../models/task.schema.js');

const getAllTask = async (req, res) => {
  try {
    const taskList = await Task.find({}).sort({ createdAt: -1 });
    res.status(200).json(taskList);
  } catch (e) {
    res.status(404).json(e.message);
  }
};

const addTask = async (req, res) => {
  const { task } = req.body;

  try {
    const newTask = await Task.create({ task: task, createdAt: Date.now() });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.deleteOne({ _id: id });
    const taskList = await Task.find({}).sort({ createdAt: -1 });
    res.status(200).json(taskList);
  } catch (e) {
    res.status(404).json(e.message);
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  try {
    await Task.findByIdAndUpdate(id, task);
    const taskList = await Task.find({}).sort({ createdAt: -1 });
    res.status(201).json(taskList);
  } catch (e) {
    res.status(404).json(e.message);
  }
};

module.exports = { getAllTask, addTask, deleteTask, updateTask };
