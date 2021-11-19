import {useState, useEffect} from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
// import getDaysInMonth from 'date-fns/getDaysInMonth';

const Datepicker = () => {
  const [value, setValue] = useState(new Date());

//   useEffect(() => {
//     getCurrentMonthTransactions(initialValue);
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
//     getCurrentMonthTransactions(date);
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
        
		// onMonthChange={handleMonthChange}
        renderInput={(params) => <TextField {...params} helperText={null} sx={{marginTop: "30px"}}/>}
      />
    </LocalizationProvider>
  );
}

export default Datepicker;
