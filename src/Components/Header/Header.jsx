import { Link } from "react-router-dom";
import { useState } from "react";

import Container from "../UI/Container";
import HeaderIcon from "./HeaderIcon";
import LogoutIcon from "./LogoutIcon";
import ModalLogout from "../ModalLogout";

import styles from "./Header.module.scss";

const Header = () => {
  const [open, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
    <Container>
    <div className={styles.header}>
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
      </div>
      </Container>
      <ModalLogout open={open} toggleModal={toggleModal} />
      </>
  )
}

export default Header;
