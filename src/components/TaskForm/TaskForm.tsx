import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Task } from '../../types/Task';
import { TaskFormProps } from './TaskForm.types';
import { taskSchema } from './TaskSchema';
import './TaskForm.css';

export function TaskForm({ defaultValues, onSubmit, isLoading, submitLabel = 'Сохранить' }: TaskFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<Task>>({
    resolver: yupResolver(taskSchema),
    defaultValues: defaultValues ?? { name: '', info: '', isImportant: false },
  });

  return (
    <form className="task-form" onSubmit={handleSubmit(onSubmit)}>
      <label>Название</label>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            className={`task-form__input ${errors.name ? 'error-border' : ''}`}
            placeholder="Введите название"
          />
        )}
      />
      {errors.name && <p className="error">{errors.name.message}</p>}

      <label>Описание</label>
      <Controller
        name="info"
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            className={`task-form__input ${errors.info ? 'error-border' : ''}`}
            placeholder="Введите описание"
          />
        )}
      />
      {errors.info && <p className="error">{errors.info.message}</p>}

      <label>
        <Controller
          name="isImportant"
          control={control}
          render={({ field }) => (
            <input type="checkbox" checked={field.value} onChange={(e) => field.onChange(e.target.checked)} />
          )}
        />
        Важная задача
      </label>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Сохранение...' : submitLabel}
      </button>
    </form>
  );
}
