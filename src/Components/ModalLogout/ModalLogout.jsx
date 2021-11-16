import { Button, Modal, Backdrop, Fade } from '@mui/material';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../Redux/auth';

import styles from './ModalLogout.module.scss';
import useStyles from './stylesMUI';

const ModalLogout = ({open, toggleModal}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(authOperations.logOut());
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
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <p id="transition-modal-description" className={styles.modalText}>Are you sure?</p>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: '20px',
                marginBottom: '10px',
                boxShadow: 'none',
                width: '100%'
              }}
              onClick={handleLogout}
            >
              Yes
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
              No
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  )
}

export default ModalLogout;
