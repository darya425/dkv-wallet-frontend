import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from "react";

import { authSelectors } from '../../Redux/auth';

import Container from "../UI/Container";
import HeaderIcon from "./HeaderIcon";
import {LogoutIcon} from "./LogoutIcon";
import ModalLogout from "../ModalLogout";

import styles from "./Header.module.scss";

const Header = () => {
  const [open, setShowModal] = useState(false);
  const name = useSelector(authSelectors.getUserName);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headContainer}>
          <Link to="/home">
          <div className={styles.logo}>
            <HeaderIcon className={styles.headerIcon}/>
            <span className={styles.logoText}>Wallet</span>
          </div>
        </Link>
        <div className={styles.nameMenu}>
          <div className={styles.name}>  
            <span>{name}</span>
          </div>
          <button className={styles.logoutButton} onClick={toggleModal}>
            <span className={styles.svgImg}><LogoutIcon  className={styles.logoutIcon} /></span>
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