import * as yup from 'yup';

export const taskSchema = yup.object().shape({
  name: yup.string().required('Введите название задачи'),
  info: yup.string().required('Введите описание'),
  isImportant: yup.boolean().optional(),
});
