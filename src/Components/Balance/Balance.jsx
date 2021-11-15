import styles from './balance.module.scss';

const myBalance = "55 634.27";

const Balance = () => {
    return (
        <div className={styles.balanceContainer}>
            <h4 className={styles.balanceText}>your balance</h4>
            <h2 className={styles.balance}>€ {myBalance}</h2>
        </div>
    );
};

export default Balance;