import { useState } from 'react';
import { Modal, Backdrop, Fade, TextField, MenuItem, Button, FormControlLabel} from '@mui/material';
import Switcher from './Switcher';

import styles from './ModalAddTransaction.module.scss';
import useStyles from './stylesMUI';


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
  const classes = useStyles();
  const [category, setCategory] = useState('');
  const [isChecked, setIsChecked] = useState(true);

  const handleCheck = (event) => {
    setIsChecked(prev => !prev);
  }

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={toggleModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <form className={classes.form}>
              <p className={styles.modalText}>Add transaction</p>
              <div className={styles.switcherContainer}>
                <span
                  className={isChecked ? styles.switcherText : `${styles.switcherText} ${styles.green}`}
                >
                  Incomes
                </span>
                <FormControlLabel
                  control={<Switcher sx={{ m: 1 }} defaultChecked />}
                  label=""
                  sx={{ margin: '0' }}
                  onChange={handleCheck}
                />
                <span className={isChecked ? `${styles.switcherText} ${styles.red}` : styles.switcherText}>Expences</span>
              </div>
              {isChecked && 
                <TextField
                  id="standard-select-currency"
                  select
                  placeholder="Choose category"
                  value={category}
                  onChange={handleChange}
                  variant="standard"
                  sx={{ marginBottom: '40px' }}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </TextField>
              }
              <div>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  placeholder="0.00"
                  sx={{ marginRight: '30px'}}
                  className={classes.textField}
                />
                <TextField
                  id="date"
                  type="date"
                  variant="standard"
                  defaultValue={Date.now()}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ }}
                  className={classes.textField}
                />

              </div>
              <TextField
                id="standard-basic"
                variant="standard"
                placeholder="Comment"
                sx={{marginBottom: '40px'}}
              />
              <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: '20px',
                marginBottom: '20px',
                paddingTop: '13px',
                paddingBottom: '13px',
                boxShadow: 'none',
                width: '100%',
                fontSize: '18px'
              }}
            >
              ADD
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                borderRadius: '20px',
                width: '100%',
                paddingTop: '13px',
                paddingBottom: '13px',
                fontSize: '18px'
              }}
              onClick={toggleModal}
            >
              CANCEL
            </Button>
            </form>
        </div>
      </Fade>
    </Modal>
      {/* <Modal
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
        <Fade in={open} sx={{borderRadius: "10px"}}>
          <Box sx={style}>
            <form>
              <p>ADD TRANSACTION</p>
              <FormControlLabel
                control={<Switcher sx={{ m: 1 }} defaultChecked />}
                label=""
              />
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
                sx={{marginTop: '10px'}}
              />
              <TextField
                id="date"
                
                type="date"
                variant="standard"
                defaultValue={Date.now()}
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
      </Modal> */}
    </>

  )
}

export default ModalAddTransaction;
