import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  transactionSelectors,
  transactionOperations,
} from '../../Redux/transactions';

import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(muiTheme => ({
  // main table styles
  mainTableContainer: {
    display: 'none',
    [muiTheme.breakpoints.up('tablet')]: {
      display: 'block',
      maxHeight: '60vh',

      '&::-webkit-scrollbar': {
        width: '10px',
      },
      '&::-webkit-scrollbar-track': {
        background: 'transparent',
        borderRadius: '7px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '7px',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: 'rgba(255, 255, 255, 0.8)',
      },
    },
    [muiTheme.breakpoints.up('desktop')]: {
      maxHeight: '85vh',
    },
  },
  mainTableHeader: {
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
  mainTableBody: {
    '& th, td': {
      borderBottom: '1px solid #DCDCDF',
    },
  },

  // second table styles
  secondTableContainer: {
    display: 'none',
    [muiTheme.breakpoints.down('tablet')]: {
      display: 'block',
    },
  },

  secondTables: {
    position: 'relative',
    backgroundColor: '#fff',
    borderCollapse: 'collapse',
    borderRadius: '10px',
    marginBottom: '10px',

    '&::before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      left: '0px',
      height: '100%',
      width: '5px',
      borderTopLeftRadius: '10px',
      borderBottomLeftRadius: '10px',
    },
  },
  sTableFont: {
    fontWeight: '700',
  },

  incomeTransaction: {
    '&::before': {
      backgroundColor: muiTheme.palette.primary.main,
    },
  },
  expenseTransaction: {
    '&::before': {
      backgroundColor: muiTheme.palette.accent.main,
    },
  },
  //string styles
  incomeAmount: {
    '&.MuiTableCell-root': {
      color: muiTheme.palette.primary.main,
      fontWeight: 'bold',
    },
  },
  expenseAmount: {
    '&.MuiTableCell-root': {
      color: muiTheme.palette.accent.main,
      fontWeight: 'bold',
    },
  },
}));

export default function TransactionDashboard() {
  const dispatch = useDispatch();
  useEffect(
    () => dispatch(transactionOperations.getAllTransactions()),
    [dispatch],
  );

  const classes = useStyles();

  const allTransactions = useSelector(transactionSelectors.getAllTransactions);
  return (
    allTransactions && (
      <>
        {/*mainTable*/}
        <TableContainer className={classes.mainTableContainer}>
          <Table className={classes.table} stickyHeader>
            <TableHead className={classes.mainTableHeader}>
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
            <TableBody className={classes.mainTableBody}>
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
                  <TableCell align="center">
                    {transaction.balanceState}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/*secondTable*/}
        <TableContainer className={classes.secondTableContainer}>
          {allTransactions.map(transaction => (
            <Table
              key={transaction._id}
              className={
                transaction.type === 'income'
                  ? classes.secondTables + ' ' + classes.incomeTransaction
                  : classes.secondTables + ' ' + classes.expenseTransaction
              }
            >
              <TableBody>
                <TableRow>
                  <TableCell variant="head" className={classes.sTableFont}>
                    Date
                  </TableCell>
                  <TableCell align="right">
                    {new Date(transaction.date).toLocaleDateString()}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" className={classes.sTableFont}>
                    Type
                  </TableCell>
                  <TableCell align="right">
                    {transaction.type === 'income' ? '+' : '-'}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" className={classes.sTableFont}>
                    Category
                  </TableCell>
                  <TableCell align="right">{transaction.category}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" className={classes.sTableFont}>
                    Comment
                  </TableCell>
                  <TableCell align="right">{transaction.comment}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" className={classes.sTableFont}>
                    Amount
                  </TableCell>
                  <TableCell
                    align="right"
                    className={
                      transaction.type === 'income'
                        ? classes.incomeAmount
                        : classes.expenseAmount
                    }
                  >
                    {transaction.amount}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" className={classes.sTableFont}>
                    Balance
                  </TableCell>
                  <TableCell align="right">
                    {transaction.balanceState}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          ))}
        </TableContainer>
      </>
    )
  );
}
