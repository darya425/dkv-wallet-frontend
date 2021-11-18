import { Link } from "react-router-dom";
import { useState } from "react";

import HeaderIcon from "./HeaderIcon";
import LogoutIcon from "./LogoutIcon";

import styles from "./Header.module.scss";
import ModalLogout from "../ModalLogout";
import Container from '../UI/Container';

const Header = () => {
  const [open, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headContainer}>
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
        <ModalLogout open={open} toggleModal={toggleModal}/>
        </div>      
    </Container>
  </header>
  )
}

export default Header;
