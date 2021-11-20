import RegistrationForm from '../../Components/RegistrationForm';
import styles from './RegisterView.module.scss';
import girl from '../../Images/mobileGirl.png';
import Container from '../../Components/UI/Container';

function RegisterView() {
  return (
    <Container>
      <div className={styles.container}>
          <div className={styles.imgWrapper}>
          <img src={girl} alt="guy" className={styles.img} />
            <p className={styles.appName}>Finance App</p>
          </div>
          <div className={styles.formWrapper}>
            <RegistrationForm />
          </div>
        
      </div>
    </Container>
  );
}

export default RegisterView;