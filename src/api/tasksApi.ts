import { Task, TaskId } from '../types/Task';
import { baseApi } from 'api/api';

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getTasks: create.query<Task[], void>({
      query: () => '/tasks',
      providesTags: ['Tasks'],
    }),
    getTask: create.query<Task, TaskId>({
      query: (taskId) => `/tasks/${taskId}`,
      providesTags: ['Tasks'],
    }),
    deleteTask: create.mutation<void, TaskId>({
      query: (taskId) => ({ method: 'DELETE', url: `tasks/${taskId}` }),
      invalidatesTags: ['Tasks'],
    }),
    updateTask: create.mutation<Task, Partial<Task> & Pick<Task, 'id'>>({
      query: ({ id, ...patch }) => ({
        url: `tasks/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      transformResponse: (response: { data: Task }, meta, arg) => response.data,
      transformErrorResponse: (response: { status: string | number }, meta, arg) => response.status,
      invalidatesTags: ['Tasks'],
    }),
    toggleComplete: create.mutation<Task, Pick<Task, 'id' | 'isCompleted'>>({
      query: ({ id, isCompleted }) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        body: { isCompleted },
      }),
      invalidatesTags: ['Tasks'],
    }),
    addTask: create.mutation<Task, Partial<Task>>({
      query(body) {
        return {
          url: `/tasks`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: [{ type: 'Tasks', id: 'LIST' }],
    }),
  }),
  overrideExisting: true,
});

export const { useGetTasksQuery } = tasksApi;
