import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://wallet-backend-g5.herokuapp.com';

const getExpensesCategories = createAsyncThunk(
  'categories/getExpenses',
  async () => {
    try {
      const { data } = await axios.get('/api/categories/expense');
      return data;
    } catch (error) {
      //ToDo add error handling
    }
  },
);

// const getIncomesCategories = createAsyncThunk(
//   'categories/getIncomes',
//   async () => {
//     try {
//       const { data } = await axios.get('/api/categories/income');
//       return data;
//     } catch (error) {
//       //ToDo add error handling
//     }
//   },
// );

const operations = {
  getExpensesCategories,
  // getIncomesCategories,
};
export default operations;
