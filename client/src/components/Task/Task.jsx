import React, { useEffect, useState } from 'react';
import { getTaskList, deleteTask, updateTask } from '../../api/taskApi';
import { useTaskList } from '../../context/_index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Task.css';

export const Task = ({ task }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [value, setValue] = useState(task.task);
  const { setTaskList } = useTaskList();
  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      const receivedTaskList = await getTaskList();
      setTaskList(receivedTaskList);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!isEditable && value.length === 0) {
      setValue(task.task);
    }
    if (!isEditable && value.length) {
      if (task.task === value) {
        return;
      }
      (async () => {
        try {
          const response = await updateTask(task._id, { ...task, task: value });
          setTaskList(response);
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [isEditable]);
  return (
    <li className="task">
      <div>
        <input
          type="text"
          value={value}
          readOnly={!isEditable}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="task__btn__container">
        <button
          className="task__delete__btn"
          onClick={() => handleDeleteTask(task._id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button
          className="task__edit__btn"
          onClick={() => setIsEditable(!isEditable)}
        >
          <FontAwesomeIcon icon={isEditable ? faPlus : faPen} />
        </button>
      </div>
    </li>
  );
};
