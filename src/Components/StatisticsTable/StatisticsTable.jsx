import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(category, amount) {
  return { category, amount };
}

const rows = [
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Gingerbread", 356),
  createData("Expenses:", 24.235),
  createData("Income:", 35.325)
];

export default function StatisticsTable() {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
      <Table sx={{ minWidth: 320 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ borderRadius: "30px 0 0 30px", bgcolor: "blue" }}>
              Category
            </TableCell>
            <TableCell
              align="right"
              sx={{ borderRadius: "0 30px 30px 0", bgcolor: "blue" }}
            >
              Amount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.category}
              sx={{
                "&:nth-last-child(-n+2) th, &:nth-last-child(-n+2) td": {
                  borderBottom: 0,
                  fontWeight: "bold"
                },
                "&:nth-last-child(2) td": {
                  color: "rgba(255, 101, 150, 1)"
                },
                "&:last-child td": {
                  color: "rgba(36, 204, 167, 1)"
                }
              }}
            >
              <TableCell component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
