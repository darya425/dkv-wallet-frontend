import { useState } from 'react';

import InfoBlock from '../../Components/InfoBlock';

import Header from '../../Components/Header';
import TransitionDashboard from '../../Components/TransactionDashboard';
import BOLWANKA_API from '../../BOLWANKA-API';

import { Grid } from '@mui/material';

import Container from '../../Components/UI/Container';
import ButtonAddTransaction from '../../Components/ButtonAddTransaction';
import ModalAddTransaction from '../../Components/ModalAddTransaction';

// import UserData from '../../Components/UserData';

import styles from './homeView.module.scss';

export default function HomeView() {
  const [open, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (

    <div className={styles.visualContainer}>
      <Container>
        <InfoBlock />
        
        {/* <UserData /> */}

        <ButtonAddTransaction toggleModal={ toggleModal}/>
        <ModalAddTransaction open={open} toggleModal={ toggleModal}/>
      </Container>
    </div>

  );
}
