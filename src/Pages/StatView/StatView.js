import Navigation from '../../Components/Navigation';

import styles from '../../Styles/main.scss';

export default function StatView() {
  return (
    <>      
      <div className={ styles.info }>
        <div className={ styles.main }>
          <Navigation /> 
          {/* <Balance /> */}
        </div>
          {/* <Currency /> */}
      </div>
        {/* <UserData /> */}
    </>
  );
}