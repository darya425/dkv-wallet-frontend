import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
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

import getCurrentcies from '../../Services/CurrencyApi'

function createData(name, usd, eur, rub, btc) {
  return { name, usd, eur, rub, btc };
}

let rows = [
  createData('USD', '', ''),
  createData('EUR', '', ''),
  createData('RUB', '', ''),
  createData('BTC', '', ''),
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
  const [state, setState] = useState();

  useEffect(() => {
    getCurrentcies().then(setState)    
  }, [])
  
  if (state) {
    const { buy, sale } = state[1];
    const eurBuy = parseFloat(buy);
    const eurSale = parseFloat(sale);
    let newBuy = null;
    let newSale = null;
    let usdBuy = null;
    let usdSale = null;
    const newState = [];

    for (let i = 0; i < state.length; i++) {
      const { ccy, buy, sale } = state[i];
      switch (i) {
        case 0:
          newBuy = (eurBuy / parseFloat(buy)).toFixed(3);
          newSale = (eurSale / parseFloat(sale)).toFixed(3);
          newState[i] = { ccy, newBuy, newSale };
          usdBuy = newBuy;
          usdSale = newSale;
          break;
        case 1:
          newBuy = eurBuy.toFixed(3);
          newSale = eurSale.toFixed(3);
          newState[i] = { ccy: "UAH", newBuy, newSale };          
          break;
        case 2:
          newBuy = (eurBuy / parseFloat(buy)).toFixed(3);
          newSale = (eurSale / parseFloat(sale)).toFixed(3);
          newState[i] = { ccy, newBuy, newSale };
          break;
        case 3:
          newBuy = (parseFloat(buy) / usdBuy).toFixed(3);
          newSale = (parseFloat(sale) / usdSale).toFixed(3);
          newState[i] = { ccy, newBuy, newSale };
          break;
        
        default:
          break;
      }
    }

    rows = newState.map(({ ccy, newBuy, newSale}) => {
      return createData(ccy, newBuy, newSale)
    })
  }

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
