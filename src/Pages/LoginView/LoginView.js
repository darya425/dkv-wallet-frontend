import Header from '../../Components/Header';
import styles from './LoginView.module.scss';

function LoginView() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.containerBg}>
          <div className={styles.imgWrapper}>
            <div className={styles.img} />
            <p className={styles.appName}>Finance App</p>
          </div>

          <div className={styles.formWrapper}>
          </div>
        </div>
        </div>
    </>
  );
}

export default LoginView;