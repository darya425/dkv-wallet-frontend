import Header from '../../Components/Header';
import InfoBlock from '../../Components/InfoBlock';
import Navigation from '../../Components/Navigation';
import Container from '../../Components/UI/Container';
// import StatData from '../../Components/UserData';

import styles from './statView.module.scss';

export default function StatView() {
  return (
    <>
    <header style={{backgroundColor: '#fff'}}>
      <Header/>
    </header>
    <Container>
      <div className={styles.hiddenNav}>
        <Navigation />
      </div>
      <div className={styles.hiddenInfo}>
        <InfoBlock />
      </div>      
      
      {/* <StatData /> */}
      </Container>
    </>
  );
}