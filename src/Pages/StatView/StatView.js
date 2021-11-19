import InfoBlock from '../../Components/InfoBlock';
import Navigation from '../../Components/Navigation';
import Container from '../../Components/UI/Container';
import Diagram from '../../Components/Diagram';
import Datepicker from '../../Components/Datepicker';
import StatisticsTable from '../../Components/StatisticsTable/StatisticsTable';
// import colors from './colors';
// import StatData from '../../Components/UserData';

import styles from './statView.module.scss';

export default function StatView() {
  return (
    <Container>
      <div className={styles.hiddenNav}>
        <Navigation />
				<Diagram />
				<Datepicker />
				<StatisticsTable/>
      </div>
      <div className={styles.hiddenInfo}>
        <InfoBlock />
      </div>      
      
      {/* <StatData /> */}
    </Container>
  );
}