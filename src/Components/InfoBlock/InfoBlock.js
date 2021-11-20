import Navigation from '../Navigation';
import Balance from '../Balance';
import Currency from '../Currency';

import styles from './InfoBlock.module.scss';

export default function Info() {
    return (
        <div className={ styles.info }>
            <div className={ styles.main }>
                <Navigation /> 
                <Balance />
            </div>
            {/* <div className={styles.balvanka + ' ' + styles.hidden}>
            $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $
            </div> */}
            <Currency/>
        </div>
    );
}
