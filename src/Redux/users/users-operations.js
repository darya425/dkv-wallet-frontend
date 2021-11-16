import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://wallet-backend-g5.herokuapp.com';

const getCurrentBalance = createAsyncThunk(
  'users/getCurrentBalance',
  async () => {
    try {
      const { data } = await axios.get('/api/users/balance');
      return data;
    } catch (error) {
      //ToDo add error handling
    }
  },
);

const operations = {
  getCurrentBalance,
};
export default operations;
