import { Middleware } from '@reduxjs/toolkit';
import { tasksApi } from 'api/tasksApi';

export const rtkQueryLogger: Middleware = (storeAPI) => (next) => (action) => {
  if (action.type.startsWith(`${tasksApi.reducerPath}/`)) {
    console.log('%c[RTK Query]', 'color: blue; font-weight: bold;', action.type, action);
  }

  return next(action);
};
