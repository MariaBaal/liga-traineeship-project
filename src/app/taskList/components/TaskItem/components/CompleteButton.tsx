import { useState } from 'react';
import IconComplete from '../icons/IconComplete';
import { tasksApi } from '../../../../../api/tasksApi';

interface CompleteButtonProps {
  id: number;
  isCompleted: boolean;
}

const CompleteButton: React.FC<CompleteButtonProps> = ({ id, isCompleted }) => {
  const [toggleComplete, { isLoading }] = tasksApi.useToggleCompleteMutation();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = async () => {
    await toggleComplete({
      id,
      isCompleted: !isCompleted,
    }).unwrap();
  };

  return (
    <button
      className={`task-item__button ${
        isCompleted
          ? isHovered
            ? 'task-item__button--cancel'
            : 'task-item__button--completed'
          : 'task-item__button--done'
      }`}
      onClick={handleClick}
      disabled={isLoading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {(isHovered && !isCompleted) || !isHovered ? <IconComplete /> : null}

      {isLoading ? 'Выполнение...' : isCompleted ? (isHovered ? 'Отменить' : 'Выполнено') : 'Выполнить'}
    </button>
  );
};

export default CompleteButton;
