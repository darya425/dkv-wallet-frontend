import LoginForm from '../../Components/LoginForm';
import styles from './LoginView.module.scss';
import guy from '../../Images/frameGuy.png';

function LoginView() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
          <img src={guy} alt="guy" className={styles.img} />
          <p className={styles.appName}>Finance App</p>
        </div>

        <div className={styles.formWrapper}>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default LoginView;
