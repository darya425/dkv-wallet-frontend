import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = '';

// const token = {
//   set(token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common['Authorization'] = '';
//   },
// };

// registration
const register = createAsyncThunk();

// login
const logIn = createAsyncThunk();

// fetchCurrentUser
const fetchCurrentUser = createAsyncThunk();

// logout
const logOut = createAsyncThunk();

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
