import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from '@mui/styles';


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
    "&:nth-last-of-type(n+3) th::before": {
      content: '""',
      width: "24px",
      height: "24px",
      display: "block",
      borderRadius: "5px",
    },
    "&:nth-last-of-type(-n+2) th, &:nth-last-of-type(-n+2) td": {
      borderBottom: 0,
      fontWeight: "bold",
      paddingLeft: "0px"
    },
    "&:nth-last-of-type(2) td": {
      color: "rgba(255, 101, 150, 1)"
    },
    "&:last-child td": {
      color: "rgba(36, 204, 167, 1)"
    }
  }
});

export default function StatisticsTable({results}) {
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
                "&:nth-last-of-type(n+3) th::before": {
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
