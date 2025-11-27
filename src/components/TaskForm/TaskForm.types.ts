import { Task } from '../../types/Task';

export type TaskFormProps = {
  defaultValues?: Partial<Task>;
  onSubmit: (data: Partial<Task>) => void;
  isLoading?: boolean;
  submitLabel?: string;
};
