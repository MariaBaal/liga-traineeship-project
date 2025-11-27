import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/store/store';
import { setFilter } from 'src/app/taskList/integration/filter.slice';
import './TaskFilters.css';

const TaskFilters: React.FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter.value);

  return (
    <div className="task-list__filters">
      <button
        className={`task-filters__item ${filter === 'all' ? 'active-all' : ''}`}
        onClick={() => dispatch(setFilter('all'))}>
        Все
      </button>

      <button
        className={`task-filters__item ${filter === 'active' ? 'active-active' : ''}`}
        onClick={() => dispatch(setFilter('active'))}>
        Активные
      </button>

      <button
        className={`task-filters__item ${filter === 'important' ? 'active-important' : ''}`}
        onClick={() => dispatch(setFilter('important'))}>
        Важные
      </button>

      <button
        className={`task-filters__item ${filter === 'done' ? 'active-done' : ''}`}
        onClick={() => dispatch(setFilter('done'))}>
        Выполненные
      </button>
    </div>
  );
};

export default TaskFilters;
