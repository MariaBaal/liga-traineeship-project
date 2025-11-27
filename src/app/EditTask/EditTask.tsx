import { useParams, useNavigate } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';
import { Task } from '../../types/Task';
import { tasksApi } from '../../api/tasksApi';
import { TaskForm } from 'components/TaskForm/TaskForm';
import './EditTask.css';

function EditTask() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const taskId = id ? Number(id) : undefined;

  const { data: task } = tasksApi.useGetTaskQuery(taskId ?? skipToken);
  const [updateTask, { isLoading }] = tasksApi.useUpdateTaskMutation();

  const handleSubmit = async (data: Task) => {
    if (!task) return;
    await updateTask({ id: task.id, ...data }).unwrap();
    navigate('/');
  };

  if (!task) return <div>Загрузка...</div>;

  return (
    <div className="edit-task-page">
      <h2>Редактировать задачу</h2>
      <TaskForm defaultValues={task} onSubmit={handleSubmit} isLoading={isLoading} submitLabel="Сохранить" />
    </div>
  );
}

export default EditTask;
