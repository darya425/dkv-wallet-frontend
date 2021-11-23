import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setSnackbar } from '../snackbar/snackbar';

axios.defaults.baseURL = 'https://wallet-backend-g5.herokuapp.com';

const getCurrentBalance = createAsyncThunk(
  'users/getCurrentBalance',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/api/users/balance');
      return data;
    } catch (error) {
      const state = thunkApi.getState();
      thunkApi.dispatch(
        setSnackbar(
          true,
          'error',
          'Somethink went wrong, please try again later',
        ),
      );
      return thunkApi.rejectWithValue(state);
    }
  },
);

const operations = {
  getCurrentBalance,
};
export default operations;
