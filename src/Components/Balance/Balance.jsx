import {  useSelector } from 'react-redux';
import {  usersSelectors } from '../../Redux/users';

import styles from './balance.module.scss';

const Balance = () => {
    const balance = useSelector(usersSelectors.getCurrentBalance);

    return (
        <div className={styles.balanceContainer}>
            <h4 className={styles.balanceText}>your balance</h4>
            <h2 className={styles.balance}>€ {balance}</h2>
        </div>
    );
};

export default Balance;