import InfoBlock from '../../Components/InfoBlock';
import Navigation from '../../Components/Navigation';
import Container from '../../Components/UI/Container';
import VisualContainer from '../../Components/VisualContainer';
// import StatData from '../../Components/UserData';

import styles from './statView.module.scss';

export default function StatView() {
  return (
    <Container>
      <VisualContainer>
      <div className={styles.hiddenNav}>
        <Navigation />
      </div>
      <div className={styles.hiddenInfo}>
        <InfoBlock />
      </div>      
      
      {/* <StatData /> */}

      </VisualContainer>
    </Container>
  );
}