import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setSnackbar } from '../snackbar/snackbar';

axios.defaults.baseURL = 'https://wallet-backend-g5.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

// registration
const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('/api/auth/register', credentials);
      token.set(data.token);
      thunkApi.dispatch(
        setSnackbar(true, 'success', 'You are registered, please sign in'),
      );
      return data;
    } catch (error) {
      const state = thunkApi.getState();
      thunkApi.dispatch(
        setSnackbar(true, 'error', 'This email already in use'),
      );
      return thunkApi.rejectWithValue(state);
    }
  },
);

// login
const logIn = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
  try {
    const { data } = await axios.post('/api/auth/login', credentials);
    token.set(data.token);
    thunkApi.dispatch(
      setSnackbar(true, 'success', 'Welcome on your dashboard'),
    );
    return data;
  } catch (error) {
    const state = thunkApi.getState();
    thunkApi.dispatch(setSnackbar(true, 'error', 'Wrong login or password'));
    return thunkApi.rejectWithValue(state);
  }
});

// fetchCurrentUser
const fetchCurrentUser = createAsyncThunk(
  'auth/ftechCurrentUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.accessToken;

    if (persistedToken === null) {
      return thunkApi.rejectWithValue(state);
    }

    try {
      token.set(persistedToken);
      const { data } = await axios.get('/api/users/current');
      return data;
    } catch (error) {
      const state = thunkApi.getState();
      thunkApi.dispatch(
        setSnackbar(
          true,
          'error',
          'Something went wrong, please try again later',
        ),
      );
      return thunkApi.rejectWithValue(state);
    }
  },
);

// logout
const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await axios.get('/api/auth/logout');
    token.unset();
  } catch (error) {
    const state = thunkApi.getState();
    thunkApi.dispatch(
      setSnackbar(
        true,
        'error',
        'Something went wrong, please try again later',
      ),
    );
    return thunkApi.rejectWithValue(state);
  }
});

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
