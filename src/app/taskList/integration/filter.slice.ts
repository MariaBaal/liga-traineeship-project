import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FilterType = 'all' | 'active' | 'important' | 'done';

interface FilterState {
  value: FilterType;
}

const initialFilterState: FilterState = {
  value: 'all',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setFilter(state, action: PayloadAction<FilterType>) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
