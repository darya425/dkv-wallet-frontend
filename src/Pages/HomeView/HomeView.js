import InfoBlock from '../../Components/InfoBlock';
import Header from '../../Components/Header';
import TransitionDashboard from '../../Components/TransactionDashboard';
import BOLWANKA_API from '../../BOLWANKA-API';

import { Grid } from '@mui/material';
// import UserData from '../../Components/UserData';

export default function HomeView() {
  return (
    <>
      <BOLWANKA_API />
      <Header />
      <Grid container spacing={0}>
        <Grid item desktop={4}>
          <InfoBlock />
        </Grid>
        <Grid item desktop={8}>
          <TransitionDashboard />
        </Grid>
      </Grid>

      {/* <UserData /> */}
    </>
  );
}
