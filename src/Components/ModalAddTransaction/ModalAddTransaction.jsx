import { useState } from 'react';
import { Modal, Backdrop, Fade, Box, TextField, MenuItem, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

const categories = [
  'Main',
  'Food',
  'Car',
  'Children',
  'Development',
  'House',
  'Education',
  'Rest'
]

const ModalAddTransaction = ({ open, toggleModal }) => {

  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={toggleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form>
              <p>ADD TRANSACTION</p>
              <TextField
                id="standard-select-currency"
                select
                placeholder="Choose category"
                value={category}
                onChange={handleChange}
                variant="standard"
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="standard-basic"
                variant="standard"
                placeholder="0.00"
              />
              <TextField
                id="date"
                
                type="date"
                variant="standard"
                defaultValue={Date.now()}
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="standard-basic"
                variant="standard"
                placeholder="Comment"
              />
              <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: '20px',
                marginBottom: '10px',
                boxShadow: 'none',
                width: '100%'
              }}
            >
              ADD
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                borderRadius: '20px',
                width: '100%'
              }}
              onClick={toggleModal}
            >
              CANSEL
            </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>

  )
}

export default ModalAddTransaction;
