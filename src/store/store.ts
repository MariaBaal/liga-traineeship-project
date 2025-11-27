import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { baseApi } from 'api/api';
import { filterSlice } from '../app/taskList/integration/filter.slice';
import { rtkQueryLogger } from './middleware/rtkQueryLogger';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(rtkQueryLogger),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
