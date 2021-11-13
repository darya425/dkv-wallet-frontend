import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://wallet-backend-g5.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

// registration
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/api/auth/register', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    //ToDo add error handling
  }
});

// login
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/api/auth/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    //ToDo add error handling
  }
});

// fetchCurrentUser
const fetchCurrentUser = createAsyncThunk(
  'auth/ftechCurrentUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.accessToken;

    console.log(state);

    if (persistedToken === null) {
      return thunkApi.rejectWithValue(state);
    }

    try {
      token.set(persistedToken);
      const { data } = await axios.get('/api/users/current');
      return data;
    } catch (error) {
      //ToDo add error handling
    }
  },
);

// logout
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.get('/api/auth/logout');
    token.unset();
  } catch (error) {
    //ToDo add error handling
  }
});

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
