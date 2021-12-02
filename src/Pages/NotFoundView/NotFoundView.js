import Container from '../../Components/UI/Container';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { Button } from '@mui/material';

export default function NotFoundView() {
  return (
    <Container>
      <div className={styles.box}>
        <h2>Page not found</h2>
        <Button variant="contained" component={Link} to="/home">
          Back to home
        </Button>
      </div>
    </Container>
  );
}
