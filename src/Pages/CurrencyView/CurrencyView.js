import Navigation from '../../Components/Navigation';
import Container from '../../Components/UI/Container';
import Currency from '../../Components/Currency';

import styles from './currencyView.module.scss'

export default function CurrencyView() {
  return (
    <Container>
      <Navigation />
      <div className={styles.curContainer+ ' ' +styles.hidden}>
        <Currency />
      </div>      
    </Container>
  );
}
