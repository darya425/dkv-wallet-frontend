import { Fab } from "@mui/material";
import AddIcon from "./AddIcon";


const ButtonAddTransaction = ({toggleModal}) => {
  return (
    <Fab color="primary"
      sx={{
        position: "absolute",
        right: "20px",
        bottom: "30px",
        width: "44px",
        height: "44px",
        boxShadow: "0px 6px 15px rgba(36, 204, 167, 0.5)"
      }} aria-label="add new transaction"
      onClick={toggleModal}
    >
      <AddIcon/>
    </Fab> 
  )
}

export default ButtonAddTransaction;