import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from '@mui/styles';

const colors = [
  "rgba(254, 208, 87, 1)",
  "rgba(255, 216, 208, 1)",
  "rgba(253, 148, 152, 1)",
  "rgba(197, 186, 255, 1)",
  "rgba(110, 120, 232, 1)",
  "rgba(74, 86, 226, 1)",
  "rgba(129, 225, 255, 1)",
  "rgba(36, 204, 167, 1)",
  "rgba(0, 173, 132, 1)"
];

const expenses = [
  { category: "Food", amount: 15515 },
  { category: "Home", amount: 700 },
  { category: "Children", amount: 560 },
  { category: "Car", amount: 120 },
  { category: "Pool", amount: 860 }
];
const expensesTotal = 340;
const incomeTotal = 100000;

const allExpenses = expenses.map((expense, index) => {
  return {
    category: expense.category,
    amount: expense.amount,
    color: colors[index]
  };
});

const costs = { category: "Expenses", amount: expensesTotal };
const income = { category: "Income", amount: incomeTotal };
const results = [...allExpenses, costs, income];



const useStyles = makeStyles({
  container: {
    marginTop: '20px',
    maxWidth: '350px'
  },
  head: {
    backgroundColor: 'white',
  },
  headLeft: {
    borderRadius: '30px 0 0 30px'
  },
  headRight: {
    borderRadius: "0 30px 30px 0"
  },
  tableRow: {
    "&:nth-last-child(n+3) th::before": {
      content: '""',
      width: "24px",
      height: "24px",
      display: "block",
      borderRadius: "5px",
    },
    "&:nth-last-child(-n+2) th, &:nth-last-child(-n+2) td": {
      borderBottom: 0,
      fontWeight: "bold",
      paddingLeft: "0px"
    },
    "&:nth-last-child(2) td": {
      color: "rgba(255, 101, 150, 1)"
    },
    "&:last-child td": {
      color: "rgba(36, 204, 167, 1)"
    }
  }
});

export default function StatisticsTable() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.container} sx={{bgcolor: "transparent",  boxShadow: 'none'}}>
      <Table aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell className={classes.head+' '+ classes.headLeft}
            sx={{ borderBottom: 0, fontWeight: 'bold'}}>
              Category
            </TableCell>
            <TableCell
              align="right"
              sx={{ borderBottom: 0, fontWeight: 'bold'}}
              className={classes.head+' '+ classes.headRight}>
              Amount
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {results.map((result) => (
            <TableRow className={classes.tableRow}
              key={result.category}
              sx={{
                "&:nth-last-child(n+3) th::before": {
                  bgcolor: result.color,
                  position: "absolute",
                  left: "-1px"
                },
               
              }}
            >
              <TableCell
                component="th"
                scope="row"
                className={classes.firstColumn}
                sx={{ position: "relative",
                paddingLeft: "40px"}}
              >
                {result.category}
              </TableCell>
              <TableCell align="right">{result.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
