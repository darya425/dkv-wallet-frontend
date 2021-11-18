import { useState } from "react";

import InfoBlock from '../../Components/InfoBlock';
import Container from '../../Components/UI/Container';
import ButtonAddTransaction from '../../Components/ButtonAddTransaction';
import ModalAddTransaction from '../../Components/ModalAddTransaction';
import Header from "../../Components/Header";
// import UserData from '../../Components/UserData';

export default function HomeView() {
const [open, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
    <header style={{backgroundColor: '#fff'}}>
      <Header/>
    </header>
    <Container>
        <InfoBlock />
      
      {/* <UserData /> */}

      <ButtonAddTransaction toggleModal={toggleModal}/>
      <ModalAddTransaction open={open} toggleModal={toggleModal}/>
    </Container>
    </>
  );
}

