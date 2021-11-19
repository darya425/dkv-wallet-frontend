import { useState } from 'react';

import InfoBlock from '../../Components/InfoBlock';


import BOLWANKA_API from '../../BOLWANKA-API';

import TransitionDashboard from '../../Components/TransactionDashboard';


import Container from '../../Components/UI/Container';
import VisualContainer from '../../Components/VisualContainer';
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
    <Container>
      <VisualContainer>
        <div className={styles.homeContainer}>
          <InfoBlock />
          <div className={styles.dashContainer}>
            <TransitionDashboard/>
          </div>         

          <ButtonAddTransaction toggleModal={ toggleModal}/>
          <ModalAddTransaction open={open} toggleModal={ toggleModal}/>
        </div>
        </VisualContainer>
      </Container>
  );
}
