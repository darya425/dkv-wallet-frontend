import { createSlice } from '@reduxjs/toolkit';

import categoriesOperations from './categories-operations';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [categoriesOperations.getExpensesCategories.fulfilled]: (
      state,
      { payload },
    ) => {
      state.categories = payload.categories;
    },
  },
});

export default categoriesSlice.reducer;