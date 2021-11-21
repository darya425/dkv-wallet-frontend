import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './Redux/auth';

import {
  transactionOperations,
  transactionSelectors,
} from './Redux/transactions';
import { usersOperations } from './Redux/users';
import { categoriesOperations } from './Redux/categories';

import { Button } from '@mui/material';

const TestRegister = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const expTransations = useSelector(
    transactionSelectors.getExpenseTransactions,
  );
  console.log(expTransations);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setemail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      case 'name':
        setName(value);
        break;

      default:
        return;
    }
  };

  const handleSubmitRegister = e => {
    e.preventDefault();
    dispatch(authOperations.register({ email, password, name }));
  };
  const handleSubmitLogin = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
  };
  const logoutBtn = e => {
    e.preventDefault();
    dispatch(authOperations.logOut());
  };

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  const addTransactionsBtn = async e => {
    e.preventDefault();
    console.log(
      await dispatch(
        transactionOperations.addTransaction({
          type: 'expense',
          category: 'food',
          amount: 150,
          date: new Date(),
          comment: 'sushi',
        }),
      ),
    );
  };
  const getAllTransactionsBtn = async e => {
    e.preventDefault();
    const allTransactions = await dispatch(
      transactionOperations.getAllTransactions(),
    );
    console.log(allTransactions);
  };

  const getStatisticsBtn = async e => {
    e.preventDefault();
    console.log(
      await dispatch(
        transactionOperations.getStatistics({
          startDate: new Date('2021-11-01'), // yyyy-mm-dd
          endDate: new Date('2021-11-16'), // yyyy-mm-dd
        }),
      ),
    );
  };

  //   const updateBalanceBtn = e => {
  //     e.preventDefault();
  //     dispatch(usersOperations.updateUserBalance({}));
  //   };

  const getExpensesBtn = async e => {
    e.preventDefault();
    console.log(await dispatch(categoriesOperations.getExpensesCategories()));
  };

  const getCurrentBalanceBtn = async e => {
    e.preventDefault();
    console.log(await dispatch(usersOperations.getCurrentBalance()));
  };

  const getExpStatBtn = async e => {
    e.preventDefault();
    console.log(
      await dispatch(
        transactionOperations.getExpenseTransactions({
          startDate: '2021-12-11T00:00:00Z',
          endDate: '2021-12-15T00:00:00Z',
        }),
      ),
    );
  };

  // const getIncomesBtn = async e => {
  //   e.preventDefault();
  //   console.log(await dispatch(categoriesOperations.getIncomesCategories()));
  // };

  return (
    <>
      <Button variant="contained" color="primary">
        yes
      </Button>

      {isLoggedIn ? (
        <div>
          <h2>is logedIn</h2>
          <div>
            <h3>logout</h3>
            <button type="button" onClick={logoutBtn}>
              logout
            </button>
          </div>
          <button type="button" onClick={addTransactionsBtn}>
            add transactions
          </button>
          <button type="button" onClick={getAllTransactionsBtn}>
            get all transactions
          </button>
          <button type="button" onClick={getStatisticsBtn}>
            get statistics
          </button>
          {/* <button type="button" onClick={getStatisticsBtn}>
            update balance
          </button> */}
          <button type="button" onClick={getExpensesBtn}>
            get expenses
          </button>
          <button type="button" onClick={getCurrentBalanceBtn}>
            get current Balance
          </button>
          <button type="button" onClick={getExpStatBtn}>
            get expense statistic
          </button>
        </div>
      ) : (
        <div>
          <h2>isLoggedOut</h2>
          <div>
            <h3>registration</h3>
            <form onSubmit={handleSubmitRegister}>
              <label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                ></input>
              </label>
              <label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                ></input>
              </label>
              <label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                ></input>
              </label>
              <button type="submit">submit</button>
            </form>
          </div>
          <div>
            <h3>Login</h3>
            <form onSubmit={handleSubmitLogin}>
              <label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                ></input>
              </label>
              <label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                ></input>
              </label>
              <button type="submit">submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TestRegister;

/*
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './Redux/auth';
import { transactionOperations } from './Redux/transactions';
import { categoriesOperations } from './Redux/categories';
  const dispatch = useDispatch();
  const handleSubmitRegister = e => {
    e.preventDefault();
    dispatch(authOperations.register({ email, password, name }));
  };
  const handleSubmitLogin = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
  };
  const logoutBtn = e => {
    e.preventDefault();
    dispatch(authOperations.logOut());
  };
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  const addTransactionsBtn = async e => {
    e.preventDefault();
    console.log(
      await dispatch(
        transactionOperations.addTransaction({
          type: 'expense',
          category: 'food',
          amount: 100,
          date: new Date(),
          comment: 'kebab',
        }),
      ),
    );
  };
  const getAllTransactionsBtn = async e => {
    e.preventDefault();
    const allTransactions = await dispatch(
      transactionOperations.getAllTransactions(),
    );
    console.log(allTransactions);
  };
  const getStatisticsBtn = async e => {
    e.preventDefault();
    console.log(
      await dispatch(
        transactionOperations.getStatistics({
          startDate: new Date('2021-11-01'), // yyyy-mm-dd
          endDate: new Date('2021-11-16'), // yyyy-mm-dd
        }),
      ),
    );
  };
  const getExpensesBtn = async e => {
    e.preventDefault();
    console.log(await dispatch(categoriesOperations.getExpensesCategories()));
  };
*/
