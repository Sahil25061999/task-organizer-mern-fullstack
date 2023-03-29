import React, { useEffect } from 'react';
import { getTaskList } from '../../api/taskApi';
import { useTaskList } from '../../context/_index';
import './TaskList.css';
import { Task } from '../_index';

export const TaskList = () => {
  const { taskList, setTaskList } = useTaskList([]);

  useEffect(() => {
    (async () => {
      try {
        const receivedTask = await getTaskList();
        setTaskList(receivedTask);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <div className="task__container">
      <ul className="task__list">
        {taskList && taskList.length ? (
          taskList.map((task) => <Task task={task} key={task._id} />)
        ) : (
          <li className="empty__list">
            <h2>its empty in here</h2>
          </li>
        )}
      </ul>
    </div>
  );
};
