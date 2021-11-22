const getAllTransactions = state => state.transactions.transactions;
const getExpenseTransactions = state => state.transactions.statistics.expenseTransactions;
const getIncomeTransactions = state => state.transactions.statistics.incomeTransactions;

const transactionsSelector = {
  getAllTransactions,
  getExpenseTransactions,
  getIncomeTransactions,
};

export default transactionsSelector;