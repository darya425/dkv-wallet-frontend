import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setSnackbar } from '../snackbar/snackbar';

axios.defaults.baseURL = 'http://wallet-backend-g5.herokuapp.com';

const getExpensesCategories = createAsyncThunk(
  'categories/getExpenses',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/api/categories/expense');
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
