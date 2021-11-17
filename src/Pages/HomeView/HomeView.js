import { useState } from "react";

import InfoBlock from '../../Components/InfoBlock';
import ButtonAddTransaction from '../../Components/ButtonAddTransaction';
import ModalAddTransaction from '../../Components/ModalAddTransaction';
// import UserData from '../../Components/UserData';

export default function HomeView() {
const [open, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <InfoBlock />
      
      {/* <UserData /> */}

      <ButtonAddTransaction toggleModal={ toggleModal}/>
      <ModalAddTransaction open={open} toggleModal={ toggleModal}/>
    </>
  );
}

