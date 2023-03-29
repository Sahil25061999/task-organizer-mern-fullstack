import React, { useState } from 'react';
import { addTask, getTaskList } from '../../api/taskApi';
import { useTaskList } from '../../context/_index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './TaskInput.css';

export const TaskInput = () => {
  const [task, setTask] = useState('');
  const [error, setError] = useState(false);
  const { setTaskList } = useTaskList();
  const URL = 'http://localhost:3000';

  const handleAddTask = async () => {
    try {
      if (!task.length) {
        setError(true);
        return;
      }
      setError(false);
      await addTask(task);
      const receivedTask = await getTaskList();
      setTaskList([...receivedTask]);
      setTask('');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="task__inputs">
      <input
        type="text"
        placeholder={error ? 'Task cannot be empty' : 'Enter Task'}
        onChange={(e) => setTask(e.target.value)}
        value={task}
        required
      />
      <button className="task__add__btn" onClick={handleAddTask}>
        <FontAwesomeIcon icon={faPlus} color={'var(--font-color)'} />
      </button>
    </div>
  );
};
