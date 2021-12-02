import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setSnackbar } from '../snackbar/snackbar';
import { usersOperations } from '../../Redux/users';

axios.defaults.baseURL = 'https://wallet-backend-g5.herokuapp.com';

const addTransaction = createAsyncThunk(
  'transactions/addTransactions',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('/api/transactions', credentials);
      thunkApi.dispatch(setSnackbar(true, 'success', 'Transaction added'));
      thunkApi.dispatch(usersOperations.getCurrentBalance());
      thunkApi.dispatch(getAllTransactions());
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

const getAllTransactions = createAsyncThunk(
  'transactions/getAllTransactions',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/api/transactions');
      thunkApi.dispatch(usersOperations.getCurrentBalance());
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

const getStatistics = createAsyncThunk(
  'transactions/getStatistics',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post(
        '/api/transactions/statistics',
        credentials,
      );
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

const getExpenseTransactions = createAsyncThunk(
  'transactions/expense',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post(
        '/api/transactions/expense',
        credentials,
      );
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

const getIncomeTransactions = createAsyncThunk(
  'transactions/income',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post(
        '/api/transactions/income',
        credentials,
      );
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

const operations = {
  addTransaction,
  getAllTransactions,
  getStatistics,
  getExpenseTransactions,
  getIncomeTransactions,
};
export default operations;
