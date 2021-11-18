import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  transactionSelectors,
  transactionOperations,
} from '../../Redux/transactions';

import { usersSelectors } from '../../Redux/users';

import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(muiTheme => ({
  table: {
    borderCollapse: 'inherit',
  },
  tableHeader: {
    backgroundColor: '#fff',

    '& th, td': {
      fontWeight: 'bold',
    },

    '& th:first-child': {
      borderRadius: '30px 0px 0px 30px',
    },

    '& th:last-child': {
      borderRadius: '0 30px 30px 0',
    },
  },
  tableBody: {
    '& th, td': {
      borderBottom: '1px solid #DCDCDF',
    },
  },
  incomeAmount: {
    color: muiTheme.palette.primary.main,
    fontWeight: 'bold',
  },
  expenseAmount: {
    color: muiTheme.palette.accent.main,
    fontWeight: 'bold',
  },
}));

export default function TransactionDashboard() {
  const dispatch = useDispatch();
  useEffect(
    () => dispatch(transactionOperations.getAllTransactions()),
    [dispatch],
  );

  const classes = useStyles();

  const allTransactions = useSelector(state =>
    transactionSelectors.getAllTransactions(state),
  );

  return (
    allTransactions && (
      <TableContainer>
        <Table className={classes.table} sx={{ minWidth: '100%' }}>
          <TableHead className={classes.tableHeader}>
            <TableRow>
              <TableCell align="center" width="15%">
                Date
              </TableCell>
              <TableCell align="center" width="5%">
                Type
              </TableCell>
              <TableCell align="center" width="15%">
                Category
              </TableCell>
              <TableCell align="center" width="35%">
                Comment
              </TableCell>
              <TableCell align="center" width="15%">
                Amount
              </TableCell>
              <TableCell align="center" width="15%">
                Balance
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {allTransactions.map(transaction => (
              <TableRow
                key={transaction._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="td" scope="row" align="center">
                  {new Date(transaction.date).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">
                  {transaction.type === 'income' ? '+' : '-'}
                </TableCell>
                <TableCell align="center">{transaction.category}</TableCell>
                <TableCell align="center">{transaction.comment}</TableCell>
                <TableCell
                  align="center"
                  className={
                    transaction.type === 'income'
                      ? classes.incomeAmount
                      : classes.expenseAmount
                  }
                >
                  {transaction.amount}
                </TableCell>
                <TableCell align="center">{transaction.balanceState}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
}
