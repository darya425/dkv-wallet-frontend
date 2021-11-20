import {useState, useEffect} from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const Datepicker = ({getMonthTransactions}) => {
  const [value, setValue] = useState(new Date());
  // const [loading, setLoading] = useState('false');
  const getDate = new Date(value);
  const month = getDate.getMonth() + 1;
  const year = getDate.getFullYear();
  function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
  }
// console.log(daysInMonth(month, year));

//   useEffect(() => {
//     getMonthTransactions(value);
//     // abort request on unmount
//     return () => ;
//   }, []);

// const handleMonthChange = (date) => {
//     if () {
//       // make sure that you are aborting useless requests
//       // because it is possible to switch between months pretty quickly
//      
//     }

//     setIsLoading(true);
//     setTransactions([]);
//     getMonthTransactions(date);
//   };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={["year", "month"]}
        label="Year and Month"
        minDate={new Date("2015-01-01")}
        maxDate={new Date()}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} helperText={null}/>}
      />
    </LocalizationProvider>
  );
}

export default Datepicker;
