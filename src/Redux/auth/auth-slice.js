import { createSlice } from '@reduxjs/toolkit';

import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  accessToken: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled]: (state, { payload }) => {
      // state.user.name = payload.user.name;
      // state.user.email = payload.user.email;
      // state.accessToken = payload.token;
      // state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled]: (state, { payload }) => {
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.accessToken = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled]: state => {
      state.user.name = null;
      state.user.email = null;
      state.accessToken = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = { ...payload.user };
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected]: (state, { payload }) => {
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.pending]: (state, { payload }) => {
      state.isFetchingCurrentUser = true;
    },
  },
});

export default authSlice.reducer;
