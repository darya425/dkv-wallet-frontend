import Navigation from '../../Components/Navigation';
// import Currency from '../../Components/Currency';
import Balance from '../../Components/Balance';
// import UserData from '../../Components/UserData';

import styles from '../../Styles/main.scss';

export default function HomeView() {
  return (
    <>      
      <div className={ styles.info }>
        <div className={ styles.main }>
            <Navigation /> 
            <Balance />
        </div>
          {/* <Currency /> */}
      </div>
        {/* <UserData /> */}
    </>
  );
}
