import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeValue(_, { payload }) {
      return payload;
    },
  },
});

export const { changeValue } = slice.actions;
export const filterReducer = slice.reducer;
