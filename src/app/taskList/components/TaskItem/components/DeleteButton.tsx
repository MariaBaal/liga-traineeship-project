import IconDelete from '../icons/IconDelete';
import { tasksApi } from 'api/tasksApi';

interface DeleteButtonProps {
  id: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  const [deleteTask, { isLoading: isLoadingDelete }] = tasksApi.useDeleteTaskMutation();
  const handleDeleteButtonClick = () => {
    if (!id) {
      return;
    }
    deleteTask(id);
  };
  return (
    <button
      className="task-item__button task-item__button--delete"
      onClick={handleDeleteButtonClick}
      disabled={isLoadingDelete}>
      <IconDelete />
    </button>
  );
};

export default DeleteButton;
