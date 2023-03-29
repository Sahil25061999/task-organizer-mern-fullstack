import axios from 'axios';

const URL = 'http://localhost:3000';

//API CALL TO GET ALL TASK

export const getTaskList = async () => {
  try {
    const response = await axios.get(`${URL}/tasks`);

    return response.data;
  } catch (e) {
    console.error(e);
  }
};

//API CALL TO ADD TASK
export const addTask = async (task) => {
  try {
    const response = await axios.post(`${URL}/tasks`, { task });
  } catch (e) {
    console.error(e);
  }
};

//API CALL TO UPDATE EXISTING TASK
export const updateTask = async (taskId, task) => {
  try {
    const response = await axios.put(`${URL}/tasks/${taskId}`, { task: task });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

//API CALL TO DELETE TASK
export const deleteTask = async (taskId) => {
  try {
    await axios.delete(`${URL}/tasks/${taskId}`);
  } catch (e) {
    console.error(e);
  }
};
