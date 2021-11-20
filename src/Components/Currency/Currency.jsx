
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from '@mui/styles';
import Image from "./Vector.svg";
import ImageTablet from "./Vector-tablet.svg";
import ImageDesktop from "./Vector-tablet.svg";
import { Typography } from "@mui/material";





function createData(name, usd, eur, rub) {
  return { name, usd, eur, rub };
}

const rows = [
  createData('USD', '27.55', '27.65'),
  createData('EUR', '30.00','30.10'),
  createData('RUB', '00.00', '00.00'),
];


const useStyles = makeStyles(muiTheme => ({
    table: {
      
     
      borderCollapse: 'inherit',
      background: `rgb(74, 86, 226) url(${Image}) bottom right no-repeat`,
      '@media (min-width: 768px)': { 
        background: `rgb(74, 86, 226) url(${ImageTablet}) bottom right no-repeat`,
        maxWidth: "334px",
        
       
      },

      '@media (min-width: 1280px)': { 
        background: `rgb(74, 86, 226) url(${ImageDesktop}) bottom right no-repeat`,
        maxWidth: "348px",
        height: "347px", 
        
        
      }
    },

    tableHeader: {
        backgroundColor: `rgba(255, 255, 255, 0.2)`,
        fontWeight: 'bold'

    },
     tableBodyRow: {
        '@media (min-width: 1280px)': { 
            "&:last-child td, &:last-child th": {
                paddingBottom: '135px'
                },
          }

     }
}))

export default function BasicTable() {
    const classes = useStyles();
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: 0,
        bgcolor: "transparent"
      }}
    >
      <Table className={classes.table}
        sx={{
            borderRadius: "30px"
        }}
        aria-label="currency table"
        
      >
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell alain="center" 
            sx={{
                color: "white",
                border: 0,
               
              }}
            >
             <Typography style={{ fontWeight: 'bold' }}>Currency</Typography>
            </TableCell>
            <TableCell className={classes.tableHead} align="center"  sx={{ color: "white", border: 0}}>
            <Typography style={{ fontWeight: 'bold' }}>Buy price</Typography>
            </TableCell>
            <TableCell align="right"  sx={{ color: "white", border: 0}}>
            <Typography style={{ fontWeight: 'bold' }}>Sell price</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow className={classes.tableBodyRow}
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 }}}
             
            >
              <TableCell 
                component="th"
                scope="row"
                sx={{ color: "white", border: 0}}
              >
                {row.name}
              </TableCell>
              <TableCell align="center"  sx={{ color: "white", border: 0 }}>
                {row.usd}
              </TableCell>
              <TableCell align="right" sx={{ color: "white", border: 0 }}>
                {row.eur}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
