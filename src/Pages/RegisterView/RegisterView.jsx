import styles from './RegisterView.module.scss';

function RegisterView() {
  return (
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
  );
}

export default RegisterView;