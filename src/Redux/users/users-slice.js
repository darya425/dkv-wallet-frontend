import { createSlice } from '@reduxjs/toolkit';

import usersOperations from './users-operations';

const initialState = {
    currentBalance: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [usersOperations.getCurrentBalance.fulfilled]: (state, { payload }) => {
      state.currentBalance = payload.user.currentBalance;
    },
  },
});

export default userSlice.reducer;
