import { Fab } from "@mui/material";
import AddIcon from "./AddIcon";

import muiTheme from '../UI/muiTheme'


const ButtonAddTransaction = ({toggleModal}) => {
  return (
    <Fab color="primary"
      sx={{
        position: "fixed",
        right: "20px",
        bottom: "30px",
        width: "44px",
        height: "44px",
        boxShadow: "0px 6px 15px rgba(36, 204, 167, 0.5)",

        [muiTheme.breakpoints.up('tablet')]: {
          right: "40px",
          bottom: "40px",
        },

        [muiTheme.breakpoints.up('desktop')]: {
          right: "85px",
        },
      }} aria-label="add new transaction"
      onClick={toggleModal}
    >
      <AddIcon/>
    </Fab> 
  )
}

export default ButtonAddTransaction;