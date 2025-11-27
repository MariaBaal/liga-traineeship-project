import { Task } from '../types/Task';

export const mockTasks: Task[] = [
  { id: 1, name: 'Learn React', info: 'lern lern и еще раз lern', isCompleted: false },
  { id: 2, name: 'Build a project', isCompleted: true },
  {
    id: 3,
    name: 'Write tests',
    info: 'Наше дело не так однозначно, как может показаться: высокое качество позиционных исследований предполагает независимые способы реализации своевременного выполнения сверхзадачи. Но экономическая повестка сегодняшнего дня выявляет срочную потребность поставленных обществом задач.',
    isCompleted: false,
  },
  { id: 4, name: 'Write tests', isCompleted: false, isImportant: true },
];
