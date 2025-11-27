import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { TaskColumnProps } from './TaskColumn.types';
import './TaskColumn.css';

const TaskColumn: React.FC<TaskColumnProps> = ({ title, type, tasks, search }) => {
  const filteredTasks = tasks
    .slice()
    .filter((task) => {
      let status = task.isImportant ? 'important' : 'active';
      if (task.isCompleted) {
        status = 'done';
      }
      return status === type;
    })
    .filter((task) => task.name!.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => b.id! - a.id!);

  return (
    <div className={`task-column task-column--${type}`}>
      <div className={`task-column__title task-column__title--${type}`}>
        <h2 className={`task-column__title-text task-column__title-text--${type}`}>{title}</h2>
      </div>

      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p className="task-column__empty">Задач нет</p>
      )}
    </div>
  );
};

export default TaskColumn;
