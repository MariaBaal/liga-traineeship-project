import React, { useState } from 'react';
import { tasksApi } from '../../api/tasksApi';
import TaskColumn from './components/TaskColumn/TaskColumn';
import TaskFilters from './components/TaskFilters/TaskFilters';
import { useAppSelector } from 'src/store/store';
import { SearchInput } from 'components/SearchInput';
import './TaskList.css';

const TaskList: React.FC = () => {
  const filter = useAppSelector((state) => state.filter.value);

  const [search, setSearch] = useState('');

  const allTasksColumns = [
    { title: 'Активные', type: 'active' },
    { title: 'Важные', type: 'important' },
    { title: 'Выполненные', type: 'done' },
  ];

  const { data: tasks = [], isLoading } = tasksApi.useGetTasksQuery();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="task-list">
      <h1>Список дел</h1>
      <SearchInput value={search} onChange={(value) => setSearch(value)} onReset={() => setSearch('')} />
      <div className="task-list__controls">
        <TaskFilters />

        <div>
          <a href="/add" className="task-list__button task-list__button--add">
            + Добавить
          </a>
        </div>
      </div>
      <div className={filter === 'all' ? 'task-columns' : ''}>
        {filter === 'all'
          ? allTasksColumns.map((col) => (
              <TaskColumn
                key={col.type}
                title={col.title}
                type={col.type as 'active' | 'important' | 'done'}
                tasks={tasks}
                search={search}
              />
            ))
          : allTasksColumns
              .filter((col) => col.type === filter)
              .map((col) => (
                <TaskColumn
                  key={col.type}
                  title={col.title}
                  type={col.type as 'active' | 'important' | 'done'}
                  tasks={tasks}
                  search={search}
                />
              ))}
      </div>
    </div>
  );
};

export default TaskList;
