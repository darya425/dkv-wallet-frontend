import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 5, 5),
  },
  button: {
    borderRadius: "20px",
  }
}));

const ModalLogout = ({open, toggleModal}) => {
  const classes = useStyles();
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
          <p id="transition-modal-description">Are you sure?</p>
          <Button variant="contained" color="primary" className={classes.button}>Yes</Button>
          <Button variant="outlined" color="primary" className={classes.button} onClick={toggleModal}>No</Button>
        </div>
      </Fade>
    </Modal>
  )
}

export default ModalLogout;
