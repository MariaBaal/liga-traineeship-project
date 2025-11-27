import React from 'react';
import { TaskItemProps } from './TaskItem.types';
import './TaskItem.css';
import DeleteButton from './components/DeleteButton';
import EditButton from './components/EditButton';
import CompleteButton from './components/CompleteButton';

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div className="task-item">
      <h3 className="task-item__title">{task.name}</h3>
      <DeleteButton id={task.id!} />

      {task.info && (
        <>
          <span className="task-item__label">Описание</span>
          <p className="task-item__description">{task.info}</p>
        </>
      )}

      <div className="task-item__buttons">
        {!task.isCompleted && <EditButton id={task.id!}></EditButton>}
        <CompleteButton id={task.id!} isCompleted={!!task.isCompleted} />
      </div>
    </div>
  );
};

export default TaskItem;
