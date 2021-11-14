import { Link } from "react-router-dom";
import { useState } from "react";

import HeaderIcon from "./HeaderIcon";
import LogoutIcon from "./LogoutIcon";

import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Button } from '@material-ui/core';

import styles from "./Header.module.scss";

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

const Header = () => {
  const classes = useStyles();
  const [open, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
  <header className={styles.header}>
    <Link to="/">
      <div className={styles.logo}>
        <HeaderIcon className={styles.headerIcon}/>
        <span className={styles.logoText}>Wallet</span>
      </div>
    </Link>
    <div className={styles.nameMenu}>
      <div className={styles.name}>  
        <span>Name</span>
      </div>
      <button className={styles.logoutButton} onClick={toggleModal}>
        <LogoutIcon className={styles.logoutIcon} />
        <span className={styles.buttonText}>Exit</span>
      </button>
    </div>
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
          <p id="transition-modal-description">Are you sure you want to exit?</p>
          <Button variant="contained" color="primary" className={classes.button}>Yes</Button>
          <Button variant="outlined" color="primary" className={classes.button}>No</Button>
        </div>
      </Fade>
    </Modal>
  </header>
  )
}

export default Header;
