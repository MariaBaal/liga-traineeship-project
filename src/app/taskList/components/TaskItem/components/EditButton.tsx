import { Link } from 'react-router-dom';
import IconEdit from '../icons/IconEdit';

interface EditButtonProps {
  id: number;
}

const EditButton: React.FC<EditButtonProps> = ({ id }) => (
  <Link to={`/tasks/${id}`} className="task-item__button task-item__button--edit">
    <IconEdit />
    Редактировать
  </Link>
);

export default EditButton;
