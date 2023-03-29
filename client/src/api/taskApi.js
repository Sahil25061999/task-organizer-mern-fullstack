import axios from 'axios';

const URL = 'http://localhost:3000';

export const getTaskList = async () => {
  try {
    const response = await axios.get(`${URL}/tasks`);

    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const addTask = async (task) => {
  console.log(task);
  try {
    const response = await axios.post(`${URL}/tasks`, { task });
  } catch (e) {
    console.error(e);
  }
};

export const updateTask = async (taskId, task) => {
  console.log(task);
  try {
    const response = await axios.put(`${URL}/tasks/${taskId}`, { task: task });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const deleteTask = async (taskId) => {
  try {
    await axios.delete(`${URL}/tasks/${taskId}`);
  } catch (e) {
    console.error(e);
  }
};
