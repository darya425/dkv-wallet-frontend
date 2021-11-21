import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://wallet-backend-g5.herokuapp.com';

const addTransaction = createAsyncThunk(
  'transactions/addTransactions',
  async credentials => {
    try {
      const { data } = await axios.post('/api/transactions', credentials);
      return data;
    } catch (error) {
      //ToDo add error handling
    }
  },
);

const getAllTransactions = createAsyncThunk(
  'transactions/getAllTransactions',
  async () => {
    try {
      const { data } = await axios.get('/api/transactions');
      return data;
    } catch (error) {
      //ToDo add error handling
    }
  },
);

const getStatistics = createAsyncThunk(
  'transactions/getStatistics',
  async credentials => {
    try {
      const { data } = await axios.post(
        '/api/transactions/statistics',
        credentials,
      );
      return data;
    } catch (error) {
      //ToDo add error handling
    }
  },
);

const getExpenseTransactions = createAsyncThunk(
  'transactions/expense',
  async credentials => {
    try {
      const { data } = await axios.post(
        '/api/transactions/expense',
        credentials,
      );
      return data;
    } catch (error) {
      //ToDo add error handling
    }
  },
);

const getIncomeTransactions = createAsyncThunk(
  'transactions/income',
  async credentials => {
    try {
      const { data } = await axios.post(
        '/api/transactions/income',
        credentials,
      );
      return data;
    } catch (error) {
      //ToDo add error handling
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
