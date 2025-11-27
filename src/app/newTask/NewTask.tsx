import { useNavigate } from 'react-router-dom';
import { tasksApi } from '../../api/tasksApi';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { Task } from 'types/Task';
import './NewTask.css';

export default function AddTaskPage() {
  const navigate = useNavigate();
  const [createTask, { isLoading }] = tasksApi.useAddTaskMutation();

  const handleSubmit = async (data: Task) => {
    await createTask(data).unwrap();
    navigate('/');
  };

  return (
    <div className="add-task-page">
      <h2>Создать задачу</h2>
      <TaskForm onSubmit={handleSubmit} isLoading={isLoading} submitLabel="Создать" />
    </div>
  );
}
