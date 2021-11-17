import InfoBlock from '../../Components/InfoBlock';
import Navigation from '../../Components/Navigation';
// import StatData from '../../Components/UserData';

import styles from './statView.module.scss';

export default function StatView() {
  return (
    <>
      <div className={styles.hiddenNav}>
        <Navigation />
      </div>
      <div className={styles.hiddenInfo}>
        <InfoBlock />
      </div>      
      
      {/* <StatData /> */}
    </>
  );
}