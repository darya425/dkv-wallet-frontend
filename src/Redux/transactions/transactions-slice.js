import { createSlice } from '@reduxjs/toolkit';

import transactionOperations from './transaction-operations';

const initialState = {
  // newTransaction: {
  //   amount: null,
  //   balanceState: null,
  //   category: null,
  //   comment: null,
  //   createdAt: null,
  //   date: null,
  //   owner: null,
  //   type: 'expense',
  //   updatedAt: null,
  //   _id: null,
  // },
  transactions: [],

  statistics: {
    expenseTransactions: [],
    incomeTransactions: [],
  },
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [transactionOperations.addTransaction.fulfilled]: (state, { payload }) => {
      state.transactions = [payload.result, ...state.transactions];
    },
    [transactionOperations.getAllTransactions.fulfilled]: (
      state,
      { payload },
    ) => {
      state.transactions = payload.transactions;
    },
    [transactionOperations.getExpenseTransactions.fulfilled]: (
      state,
      { payload },
    ) => {
      state.statistics.expenseTransactions = payload.result;
    },
    [transactionOperations.getIncomeTransactions.fulfilled]: (
      state,
      { payload },
    ) => {
      state.statistics.incomeTransactions = payload.result;
    },
    // [transactionOperations.getStatistics.fulfilled]: (state, { payload }) => {
    //   state.allTransactions.quantity = payload.quantity;
    //   state.allTransactions.transactions = payload.transactions;
    // },
  },
});

export default transactionSlice.reducer;
