import {useState, useEffect} from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const Datepicker = ({dateChange}) => {
  const [value, setValue] = useState(new Date());

  function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
  }

  useEffect(() => {
    const month = value.getMonth() + 1;
    const year = value.getFullYear();
    const firstDayOfMonth = `'${year}-${month}-01'`;
    const lastDayOfMonth = `'${year}-${month}-${daysInMonth(month, year)}`;
    console.log(firstDayOfMonth, lastDayOfMonth);
    dateChange(firstDayOfMonth, lastDayOfMonth);
  }, [value]);
 
  const handleDateChange = e => {
    setValue(e);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={["year", "month"]}
        label="Year and Month"
        minDate={new Date("2015-01-01")}
        maxDate={new Date()}
        format='yyyy-MM-dd'
        okText={'OK'}
        value={value}
        onChange={handleDateChange}
        renderInput={(params) => <TextField {...params} helperText={null}/>}
      />
    </LocalizationProvider>
  );
}

export default Datepicker;
