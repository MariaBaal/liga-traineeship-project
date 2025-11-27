import { Task } from '../../../../types/Task';

export interface TaskColumnProps {
  title: string;
  type: string;
  tasks: Task[];
  search: string;
}
