import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Fade, TextField, MenuItem, Button, FormControlLabel} from '@mui/material';

import Switcher from './Switcher';

import styles from './ModalAddTransaction.module.scss';
import { useStyles, Backdrop } from './stylesMUI';
import { transactionOperations } from '../../Redux/transactions';
import { categoriesOperations, categoriesSelectors } from '../../Redux/categories';

const ModalAddTransaction = ({ open, toggleModal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(true);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [comment, setComment] = useState('');
  const type = isChecked ? 'expenses' : 'incomes';
  const {categories} = useSelector(categoriesSelectors.getExpenseCategories);
  console.log(categories);

  useEffect(() => {
    dispatch(categoriesOperations.getExpensesCategories());
  },[dispatch]);

  const handleCheck = () => {
    setIsChecked(prev => !prev);
  }

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'category':
        return setCategory(value);
      case 'amount':
        return setAmount(value);
      case 'date':
        return setDate(value);
      case 'comment':
        return setComment(value);
      default:
        return;
    }
  };

  const reset = () => {
    setCategory('');
    setAmount('');
    setDate('');
    setComment('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(transactionOperations.addTransaction({type, category, amount, date, comment}))
    reset();
  }

  return (
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
      sx={{position: 'absolute'}}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <form className={classes.form} onSubmit={handleSubmit}>
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
                  value={type}
                  name='type'
                />
                <span
                  className={isChecked ? `${styles.switcherText} ${styles.red}` : styles.switcherText}
                >
                  Expenses
                </span>
              </div>
              {isChecked && 
                <TextField
                  select
                  placeholder="Choose category"
                  value={category}
                  name='category'
                  onChange={handleChange}
                  variant="standard"
                  sx={{ marginBottom: '40px' }}
                >
                  {categories.map((category) => (
                    <MenuItem key={category.categoryName} value={category.categoryName}>
                      {category.categoryName}
                    </MenuItem>
                  ))}
                </TextField>
              }
              <div className={styles.inputContainer}>
                <TextField
                  variant="standard"
                  placeholder="0.00"
                  name='amount'
                  value={amount}
                  onChange={handleChange}
                  sx={{ marginRight: '30px', marginBottom: '40px'}}
                  className={classes.textField}
                />
                <TextField
                  id="date"
                  type="date"
                  variant="standard"
                  name='date'
                  value={date}
                  onChange={handleChange}
                  defaultValue={Date.now()}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.textField}
                />

              </div>
              <TextField
                id="standard-basic"
                variant="standard"
                placeholder="Comment"
                name='comment'
                value={comment}
                onChange={handleChange}
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
              onSubmit={handleSubmit}
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
              onClick={reset}
            >
              CANCEL
            </Button>
            </form>
        </div>
      </Fade>
    </Modal>
  )
}

export default ModalAddTransaction;
